import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-raport-blerje',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './raport-blerje.component.html',
  styleUrl: './raport-blerje.component.scss'
})
export class RaportBlerjeComponent {

}
