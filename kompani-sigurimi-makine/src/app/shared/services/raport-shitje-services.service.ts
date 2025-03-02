import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RaportShitjeInterface } from '../raport-shitje-interface';
import { RaportShitjeMockData } from '../raport-shitje-mock-data';

@Injectable()
export class RaportShitjeServicesService {
  getRaportShitjeData(): Observable<RaportShitjeInterface[]> {
    return of(RaportShitjeMockData);
  }
}
