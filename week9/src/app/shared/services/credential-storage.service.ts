import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../interfaces/user.interface';
import { UserCredentials } from '../interfaces/usercredentials.interface';

@Injectable()
export class CredentialStorageService {
  private readonly tokenItemName = 'token';
  private readonly userItemName = 'user';

  constructor(private jwtHelper: JwtHelperService) {}

  saveCredentials(validCredentials: UserCredentials): void {
    localStorage.setItem(this.tokenItemName, validCredentials.data.token);
    localStorage.setItem(
      this.userItemName,
      JSON.stringify(validCredentials.data.user)
    );
  }

  getStoredUser(): User | null {
    const userStored: User | null = JSON.parse(
      localStorage.getItem(this.userItemName)!
    );
    return userStored;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenItemName);
  }

  signOut(): void {
    localStorage.removeItem(this.tokenItemName);
    localStorage.removeItem(this.userItemName);
  }

  isLoggedIn(): boolean {
    return !this.jwtHelper.isTokenExpired(this.getToken()!);
  }
}
