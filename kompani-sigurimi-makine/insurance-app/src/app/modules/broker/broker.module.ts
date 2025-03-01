import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokerComponent } from '../../components/broker/broker.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BrokerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BrokerComponent }])
  ]
})
export class BrokerModule { }