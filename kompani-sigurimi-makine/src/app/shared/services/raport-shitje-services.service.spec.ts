import { TestBed } from '@angular/core/testing';

import { RaportShitjeServicesService } from './raport-shitje-services.service';

describe('RaportShitjeServicesService', () => {
  let service: RaportShitjeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaportShitjeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
