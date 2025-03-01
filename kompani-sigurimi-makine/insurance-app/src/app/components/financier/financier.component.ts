import { Component } from '@angular/core';
import { InsuranceService } from '../../services/insurance.service';
import { DamageService } from '../../services/damage.service';

@Component({
  selector: 'app-financier',
  templateUrl: './financier.component.html',
  styleUrls: ['./financier.component.css']
})
export class FinancierComponent {
  totalInsurance: number;
  totalClaims: number;
  profitLoss: number;

  constructor(private insuranceService: InsuranceService, private damageService: DamageService) {
    this.calculateFinancials();
  }

  calculateFinancials() {
    const insuranceData = this.insuranceService.getInsuranceData();
    const claimsData = this.damageService.getClaimsData();

    this.totalInsurance = insuranceData.reduce((sum, insurance) => sum + insurance.value, 0);
    this.totalClaims = claimsData.reduce((sum, claim) => sum + claim.value, 0);
    this.profitLoss = this.totalInsurance - this.totalClaims;
  }
}