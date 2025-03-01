import { Injectable } from '@angular/core';
import { Insurance } from '../interfaces/insurance.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  private insurances: Insurance[] = [];
  private insuranceSubject = new BehaviorSubject<Insurance[]>(this.insurances);

  constructor() {
    this.initializeInsurances();
  }

  private initializeInsurances() {
    // Sample data for initial insurance records
    this.insurances = [
      { type: 'Kasko', year: 2020, power: 1200, value: 5000 },
      { type: 'Full Kasko', year: 2021, power: 1500, value: 7000 },
      { type: 'Kartoni Jeshil', year: 2019, power: 1000, value: 3000 },
    ];
    this.insuranceSubject.next(this.insurances);
  }

  getInsurances() {
    return this.insuranceSubject.asObservable();
  }

  calculateInsurance(type: string, year: number, power: number): number {
    let baseValue = 0;
    switch (type) {
      case 'Kasko':
        baseValue = 5000 - (2023 - year) * 200 + (power / 100) * 100;
        break;
      case 'Full Kasko':
        baseValue = 7000 - (2023 - year) * 300 + (power / 100) * 150;
        break;
      case 'Kartoni Jeshil':
        baseValue = 3000 - (2023 - year) * 100 + (power / 100) * 50;
        break;
      default:
        throw new Error('Invalid insurance type');
    }
    return Math.max(baseValue, 0); // Ensure value is not negative
  }

  addInsurance(insurance: Insurance) {
    this.insurances.push(insurance);
    this.insuranceSubject.next(this.insurances);
  }
}