import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-raportet',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule, RouterModule], // Import necessary modules
  templateUrl: './raportet.component.html',
  styleUrl: './raportet.component.scss'
})
export class RaportetComponent {}