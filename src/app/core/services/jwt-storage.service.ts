import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtStorageService {

  constructor() { }

  getToken() : string {
    // go to local storage and get the token
    return localStorage.getItem('token');
  }
  saveToken(token: string) {
    localStorage.setItem('token',token);
  }
  destroyToken() {
    localStorage.removeItem('token');
  }
}
