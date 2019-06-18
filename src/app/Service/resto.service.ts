import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import * as AppUtil from '../common/app.util';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  restoId;
  constructor(private http: HttpClient) { }
  getDashboardData() {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
      console.log (httpOptions)
    return this.http.get('http://localhost:3000/resto/getresto/' + this.restoId, httpOptions);
  }


  getAllRestoOffice() {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
    return this.http.get('http://localhost:3000/admin/getrestooffice/all' ,  httpOptions);
  }
  getOneRestoOffice(id) {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
    return this.http.get('http://localhost:3000/admin/getrestooffice/'+id ,  httpOptions);
  }


 addRestoOffice(bod,id) {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
    return this.http.post('http://localhost:3000/admin/addresto/'+id ,bod,  httpOptions);
  }

  addplat(bod) {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
    return this.http.post('http://localhost:3000/resto/addplat ', bod, httpOptions);
  }


  decodeToken() {
    if (localStorage.getItem('token')) {
      const data = jwt_decode(localStorage.getItem('token'));
      if (data.data.role === 'resto') {
        this.restoId = jwt_decode(localStorage.getItem('token')).data._id;
        console.log(jwt_decode(localStorage.getItem('token')));
      }
    }
  }
  isLoggedIn() :boolean {
    //TODO: Enhace this method. angular2-jwt
    let flag = false;
    try {
      if(jwt_decode(localStorage.getItem('token')).data){
        flag= true;
      }
    } catch (error) {
      flag = false;
    }
    return flag;

    // return !!localStorage.getItem('token');
  }
}
