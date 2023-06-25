import { TestBed } from '@angular/core/testing';

import { ProdapiService } from './prodapi.service';

describe('ProdapiService', () => {
  let service: ProdapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
