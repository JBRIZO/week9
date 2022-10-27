import { TestBed } from '@angular/core/testing';

import { CredentialStorageService } from './credential-storage.service';

describe('CredentialStorageService', () => {
  let service: CredentialStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredentialStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
