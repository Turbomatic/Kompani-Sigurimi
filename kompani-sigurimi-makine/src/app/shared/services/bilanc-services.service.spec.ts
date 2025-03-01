import { TestBed } from '@angular/core/testing';

import { BilancServicesService } from './bilanc-services.service';

describe('BilancServicesService', () => {
  let service: BilancServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilancServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
