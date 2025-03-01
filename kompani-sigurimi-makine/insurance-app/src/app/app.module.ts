import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { FinancierModule } from './modules/financier/financier.module';
import { BrokerModule } from './modules/broker/broker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FinancierModule,
    BrokerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }