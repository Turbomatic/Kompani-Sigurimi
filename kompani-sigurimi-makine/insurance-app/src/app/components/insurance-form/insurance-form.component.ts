import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../interfaces/insurance.interface';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent {
  insuranceForm: FormGroup;

  constructor(private fb: FormBuilder, private insuranceService: InsuranceService) {
    this.insuranceForm = this.fb.group({
      insuranceType: ['', Validators.required],
      vehicleYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      enginePower: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  calculateInsurance() {
    if (this.insuranceForm.valid) {
      const insuranceData: Insurance = this.insuranceForm.value;
      const insuranceValue = this.insuranceService.calculateInsurance(insuranceData);
      alert(`Calculated Insurance Value: ${insuranceValue}`);
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}