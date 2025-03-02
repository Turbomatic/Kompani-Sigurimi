import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RaportBlerjeServicesService } from '../shared/services/raport-blerje-services.service';
import { RaportBlerjeInterface } from '../shared/raport-blerje-interface';

@Component({
  selector: 'app-raport-blerje',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './raport-blerje.component.html',
  styleUrl: './raport-blerje.component.scss',
  providers:[RaportBlerjeServicesService]
})
export class RaportBlerjeComponent {
  raportBlerje: RaportBlerjeInterface[] | undefined;
  constructor(private raportBlerjeService : RaportBlerjeServicesService){}
  ngOnInit():void{
    this.loadRaports();
  }
  
  private loadRaports():void{
    this.raportBlerjeService
      .getRaportBlerjeData()
      .subscribe((raportBlerje: RaportBlerjeInterface[])=> this.raportBlerje = raportBlerje);
  
  }
}

