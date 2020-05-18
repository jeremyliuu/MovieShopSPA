import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JwtStorageService } from './jwt-storage.service';
import { Login } from 'src/app/shared/models/login';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(private apiService: ApiService, private jwtStorageService: JwtStorageService) { }

  login(userLogin: Login): Observable<boolean> {
    // get un/pw from login component and send that to the API (HTTP Post)
    // API will send back JWT token if un/pw is valid
    // once JWT is recieved from API , store token in localStorage
    return this.apiService.create('account/login', userLogin).pipe(
      map(response => {
        if (response) {
          // store the token in local storage and return true
          this.jwtStorageService.saveToken(response.token);
          return true;
        }
        return false;
      })
    );
  }
  logout() {
    // just clear the token from localStorage (Delete the token)
    this.jwtStorageService.destroyToken();
  }

  private decodeToken(): User {
    const token = this.jwtStorageService.getToken();
    if ( !token  || new JwtHelperService().isTokenExpired(token) ) {
      this.logout();
      return null;
    }
    const decodedToken =  new JwtHelperService().decodeToken(token);
    this.user = decodedToken;
    return this.user;
  }

  isLoggedIn(): boolean {
    const token = this.jwtStorageService.getToken();
    if ( !token  || new JwtHelperService().isTokenExpired(token) ) {
      return false;
    }
    return true;
  }

  isAdmin(): boolean {
    const decodedData = this.decodeToken();
    if (decodedData.role.includes("Admin")){
      return true
    }
    return false;
  }

  getUserFullName() : string {
    if (this.decodeToken != null) {
      const decodedData =  this.decodeToken();
      const userFullName = decodedData.given_name + ' ' + decodedData.family_name;
      return userFullName;
    }
  }
}
