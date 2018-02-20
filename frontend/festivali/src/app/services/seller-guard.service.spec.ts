import { TestBed, inject } from '@angular/core/testing';

import { SellerGuardService } from './seller-guard.service';

describe('SellerGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerGuardService]
    });
  });

  it('should be created', inject([SellerGuardService], (service: SellerGuardService) => {
    expect(service).toBeTruthy();
  }));
});
