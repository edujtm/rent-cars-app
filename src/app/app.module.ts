import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, TuiErrorModule } from '@taiga-ui/core';
import {
  TuiInputModule,
  TuiIslandModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
  TuiFieldErrorPipeModule,
} from '@taiga-ui/kit';
import { TuiTableModule, TuiTablePaginationModule } from '@taiga-ui/addon-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiInputPhoneModule,
    TuiIslandModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiTableModule,
    TuiTablePaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
