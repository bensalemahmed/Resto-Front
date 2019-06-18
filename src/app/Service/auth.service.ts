import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AppUtil from '../common/app.util';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  constructor(private _http: HttpClient) { }

  login(user) {
    return this._http.post('http://localhost:3000/auth/login', user);
  }
  register(user) {
    return this._http.post('http://localhost:3000/auth/register', user);
  }
  logOut() {
    localStorage.removeItem(AppUtil.SECRET);
    localStorage.clear();
  }


}
