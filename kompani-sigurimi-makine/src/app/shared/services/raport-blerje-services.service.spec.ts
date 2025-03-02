import { TestBed } from '@angular/core/testing';

import { RaportBlerjeServicesService } from './raport-blerje-services.service';

describe('RaportBlerjeServicesService', () => {
  let service: RaportBlerjeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaportBlerjeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
