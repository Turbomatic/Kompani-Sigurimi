import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bilanci',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './bilanci.component.html',
  styleUrl: './bilanci.component.scss'
})
export class BilanciComponent {

}
