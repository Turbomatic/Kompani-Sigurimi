import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../../services/insurance.service';
import { DamageService } from '../../services/damage.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  totalInsurance: number;
  totalDamage: number;
  profitLoss: number;

  constructor(private insuranceService: InsuranceService, private damageService: DamageService) {
    this.totalInsurance = 0;
    this.totalDamage = 0;
    this.profitLoss = 0;
  }

  ngOnInit(): void {
    this.calculateTotalInsurance();
    this.calculateTotalDamage();
    this.calculateProfitLoss();
  }

  calculateTotalInsurance(): void {
    const insuranceData = this.insuranceService.getInsuranceData();
    this.totalInsurance = insuranceData.reduce((total, insurance) => total + insurance.value, 0);
  }

  calculateTotalDamage(): void {
    const damageData = this.damageService.getDamageData();
    this.totalDamage = damageData.reduce((total, damage) => total + damage.value, 0);
  }

  calculateProfitLoss(): void {
    this.profitLoss = this.totalInsurance - this.totalDamage;
  }
}