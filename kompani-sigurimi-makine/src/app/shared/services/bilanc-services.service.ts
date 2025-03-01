import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { BilanciMockData } from "../bilanci-mock-data";
import { BilanciInterface } from "../bilanci-interface";

@Injectable()
export class BilancServicesService {

  getBilanciData(): Observable<BilanciInterface[]> {
    return of(BilanciMockData);
  }
}
