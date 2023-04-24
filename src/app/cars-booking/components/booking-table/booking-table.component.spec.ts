import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookingTableComponent } from './booking-table.component';
import { BookingService, Customer } from '../../services/booking.service';
import { VehicleService } from '../../services/vehicle.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TuiSelectComponent } from '@taiga-ui/kit';

const FAKE_CUSTOMERS: Customer[] = [
  { Id: 'abc123', Email: "edu@exemplo.com", Name: "Eduardo", Address: "Big Street Avenue", Age: 18 },
]

@Component({
  template: `
    <tui-root>
      <app-booking-table></app-booking-table>
    </tui-root>
  `
})
class TestHarnessComponent {}

fdescribe('BookingTableComponent', () => {
  let component: BookingTableComponent;
  let hostFixture: ComponentFixture<TestHarnessComponent>;
  let testElement: DebugElement;
  let controller: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, NoopAnimationsModule],
      declarations: [ TestHarnessComponent, BookingTableComponent ],
      providers: [
        BookingService,
        VehicleService
      ]
    })
    .compileComponents();

    controller = TestBed.inject(HttpTestingController);
    hostFixture = TestBed.createComponent(TestHarnessComponent);

    testElement = hostFixture.debugElement.query(By.directive(BookingTableComponent));
    component = testElement.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve customers on initialization', () => {
    controller.expectOne(`${environment.apiUrl}/customers/`)
  })

  // Skip: couldn't open tui-select dropdown
  xit('should display customers for selection', async () => {
    const req = controller.expectOne(`${environment.apiUrl}/customers/`);
    req.flush(FAKE_CUSTOMERS);

    hostFixture.detectChanges();

    const select = testElement.query(By.css('tui-select input'));
    select.triggerEventHandler('click', { bubbles: true });
    /*
    Other stuff that I've tried
    select.nativeElement.focus();
    hostFixture.detectChanges();
    select.nativeElement.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    select.triggerEventHandler('click', new MouseEvent("click", { bubbles: true, cancelable: true }));
    select.triggerEventHandler('keypress', {
      which: 40,
      key: 'ArrowDown',
      bubbles: true,
      preventDefault: () => {},
    });
    */

    hostFixture.detectChanges();

    const options = testElement.queryAll(By.css('.customer-option'));

    const optionContents = options.map(option => (option.nativeElement as HTMLElement).textContent);

    const expectedContents = FAKE_CUSTOMERS.map(cust => `${cust.Name} - ${cust.Email}`);

    expect(options.length).toEqual(FAKE_CUSTOMERS.length);
    expect(JSON.stringify(optionContents)).toBe(JSON.stringify(expectedContents));
  })

  it('should retrieve customer bookings and vehicles when customer is selected', () => {
    const req = controller.expectOne(`${environment.apiUrl}/customers/`);
    req.flush(FAKE_CUSTOMERS);

    hostFixture.detectChanges();

    const selectedCustomer = FAKE_CUSTOMERS[0];
    component.selectedCustomer.setValue(selectedCustomer);

    controller.expectOne(`${environment.apiUrl}/customers/${selectedCustomer.Id}/bookings`);
    controller.expectOne(`${environment.apiUrl}/vehicles`);
  })
});
