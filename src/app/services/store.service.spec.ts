import { TestBed } from '@angular/core/testing';

import { StoreService } from './state-management.service';

describe('StateManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreService = TestBed.get(StoreService);
    expect(service).toBeTruthy();
  });
});
