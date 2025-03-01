import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { FinancierComponent } from '../components/financier/financier.component';
import { BrokerComponent } from '../components/broker/broker.component';
import { InsuranceFormComponent } from '../components/insurance-form/insurance-form.component';
import { DamageFormComponent } from '../components/damage-form/damage-form.component';
import { ReportComponent } from '../components/report/report.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'financier', component: FinancierComponent },
  { path: 'broker', component: BrokerComponent },
  { path: 'insurance-form', component: InsuranceFormComponent },
  { path: 'damage-form', component: DamageFormComponent },
  { path: 'report', component: ReportComponent },
  { path: '', redirectTo: '/financier', pathMatch: 'full' },
  { path: '**', redirectTo: '/financier' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }