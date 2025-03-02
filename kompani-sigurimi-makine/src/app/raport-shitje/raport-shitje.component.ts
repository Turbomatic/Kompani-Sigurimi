import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RaportShitjeServicesService } from '../shared/services/raport-shitje-services.service';
import { RaportShitjeInterface } from '../shared/raport-shitje-interface';

@Component({
  selector: 'app-raport-shitje',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './raport-shitje.component.html',
  styleUrl: './raport-shitje.component.scss',
  providers: [RaportShitjeServicesService],
})
export class RaportShitjeComponent {
  raportShitje: RaportShitjeInterface[] | undefined;
  constructor(private raportShitjeService: RaportShitjeServicesService) {}

  ngOnInit(): void {
    this.raportShitjeService
      .getRaportShitjeData()
      .subscribe(
        (raportShitje: RaportShitjeInterface[]) =>
          (this.raportShitje = raportShitje)
      );
  }
}
