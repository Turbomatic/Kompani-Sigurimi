import { Component } from '@angular/core';
import { InsuranceService } from '../../services/insurance.service';
import { DamageService } from '../../services/damage.service';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent {
  constructor(private insuranceService: InsuranceService, private damageService: DamageService) {}

  calculateInsurance(insuranceType: string, vehicleDetails: any): number {
    return this.insuranceService.calculateInsurance(insuranceType, vehicleDetails);
  }

  reportDamage(damageDetails: any): void {
    this.damageService.reportDamage(damageDetails);
  }
}