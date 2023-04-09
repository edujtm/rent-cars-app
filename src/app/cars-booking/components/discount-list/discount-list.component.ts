import { Component } from '@angular/core';

@Component({
  selector: 'app-discount-list',
  templateUrl: './discount-list.component.html',
  styleUrls: ['./discount-list.component.scss'],
})
export class DiscountListComponent {
  selectedDiscount = {
    type: 'moneyDiscount',
    quantity: 10.0,
  };
}
