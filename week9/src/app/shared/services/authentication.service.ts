import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AuthenticationService {
  private readonly url = '';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}
}
