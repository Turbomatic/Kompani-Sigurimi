import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancierComponent } from '../../components/financier/financier.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FinancierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FinancierComponent }])
  ]
})
export class FinancierModule { }