import { Component } from '@angular/core';
import { DamageService } from '../../services/damage.service';
import { Damage } from '../../interfaces/damage.interface';

@Component({
  selector: 'app-damage-form',
  templateUrl: './damage-form.component.html',
  styleUrls: ['./damage-form.component.css']
})
export class DamageFormComponent {
  damage: Damage = {
    id: 0,
    description: '',
    repairCost: 0,
    damageType: ''
  };

  constructor(private damageService: DamageService) {}

  calculateDamageValue() {
    // Logic to calculate damage value based on the type of damage
    if (this.damage.damageType === 'total') {
      this.damage.repairCost = this.calculateTotalRepairCost();
    } else if (this.damage.damageType === 'scratch') {
      this.damage.repairCost = this.calculateScratchRepairCost();
    }
  }

  submitDamageReport() {
    this.damageService.reportDamage(this.damage).subscribe(response => {
      // Handle response after submitting the damage report
      console.log('Damage report submitted:', response);
    });
  }

  private calculateTotalRepairCost(): number {
    // Implement logic to calculate total repair cost
    return 5000; // Example value
  }

  private calculateScratchRepairCost(): number {
    // Implement logic to calculate scratch repair cost
    return 500; // Example value
  }
}