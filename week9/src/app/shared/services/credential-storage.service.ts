import { Injectable } from '@angular/core';

@Injectable()
export class CredentialStorageService {
  private readonly tokenItemName = 'token';
  private readonly userItemName = 'user';

  constructor() {}
}
