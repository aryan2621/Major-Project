import { TestBed } from '@angular/core/testing';

import { MlServicesService } from './ml-services.service';

describe('MlServicesService', () => {
  let service: MlServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
