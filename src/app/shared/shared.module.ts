import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule, TuiTablePaginationModule } from '@taiga-ui/addon-table';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, TuiErrorModule } from '@taiga-ui/core';
import {
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
  TuiIslandModule,
  TuiFieldErrorPipeModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ReactiveFormsModule,
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
})
export class SharedModule {}
