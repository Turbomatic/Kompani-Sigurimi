import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BilancServicesService } from '../shared/services/bilanc-services.service';
import { BilanciInterface } from '../shared/bilanci-interface';

@Component({
  selector: 'app-bilanci',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './bilanci.component.html',
  styleUrl: './bilanci.component.scss',
  providers:[BilancServicesService]
})
export class BilanciComponent {
  bilanci: BilanciInterface[] | undefined;
  constructor(private bilanciService: BilancServicesService) {}
  ngOnInit(): void {
    this.loadBilances();
  }

  private loadBilances(): void {
    this.bilanciService
      .getBilanciData()
      .subscribe((bilanci: BilanciInterface[]) => this.bilanci = bilanci);
  }

}
