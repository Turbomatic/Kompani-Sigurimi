import { TestBed } from '@angular/core/testing';

import { RaportetServicesService } from './raportet-services.service';

describe('RaportetServicesService', () => {
  let service: RaportetServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaportetServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
