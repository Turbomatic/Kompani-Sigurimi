import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RaportBlerjeMockData } from '../raport-blerje-mock-data';
import { RaportBlerjeInterface } from '../raport-blerje-interface';
@Injectable()
export class RaportBlerjeServicesService {

  getRaportBlerjeData(): Observable<RaportBlerjeInterface[]>{
    return of(RaportBlerjeMockData);
  }
}
