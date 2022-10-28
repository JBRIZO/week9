import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserCredentials } from '../interfaces/usercredentials.interface';

@Injectable()
export class CredentialStorageService {
  private readonly tokenItemName = 'token';
  private readonly userItemName = 'user';

  constructor() {}

  saveCredentials(validCredentials : UserCredentials) : void {
    localStorage.setItem(this.tokenItemName,validCredentials.data.token)
    localStorage.setItem(this.userItemName, JSON.stringify(validCredentials.data.user))
  }

  getStoredUser() : User | null {
    const userStored : User | null = JSON.parse(localStorage.getItem(this.userItemName)!)
    return userStored
  } 

  getToken() : string | null {
    return localStorage.getItem(this.tokenItemName)
  }

}
