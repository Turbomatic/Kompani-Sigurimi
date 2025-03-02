import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RaportetServicesService } from '../shared/services/raportet-services.service';

@Component({
  selector: 'app-raportet',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './raportet.component.html',
  styleUrl: './raportet.component.scss',
  providers:[RaportetServicesService]
})
export class RaportetComponent {
  
}