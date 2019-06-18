import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import * as AppUtil from '../common/app.util';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminId;
  admin;

  constructor(private http: HttpClient) { }


  getDashboardData() {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
    return this.http.get('http://localhost:3000/admin/user/' + this.adminId, httpOptions);
  }

  getAdmin() {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
    return this.http.get('http://localhost:3000/admin/getadmin/all' ,  httpOptions);
  }
  getoneAdmin(id) {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
    return this.http.get('http://localhost:3000/admin/getadmin/'+id ,  httpOptions);
  }
 updateOne(id , user) {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
    return this.http.post('http://localhost:3000/admin/update/'+id , user,  httpOptions);
  }

  deleteOne(id) {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
      console.log(token)
    return this.http.post('http://localhost:3000/admin/delete/'+id ,{},  httpOptions);
  }

//simple user servis
getsuser() {

  const token = localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${token}`
    })};
  return this.http.get('http://localhost:3000/admin/getsimpleuser/all' ,  httpOptions);
}
getonesuser(id) {

  const token = localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${token}`
    })};
  return this.http.get('http://localhost:3000/admin/getsimpleuser/'+id ,  httpOptions);
}
//simple resto servis
getresto() {

  const token = localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${token}`
    })};
  return this.http.get('http://localhost:3000/admin/getresto/all' ,  httpOptions);
}
getoneresto(id) {

  const token = localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${token}`
    })};
  return this.http.get('http://localhost:3000/admin/getresto/'+id ,  httpOptions);
}

  decodeToken() {
    if (localStorage.getItem('token')) {
      const data = jwt_decode(localStorage.getItem('token'));
      if (data.data.role === 'admin') {
        this.adminId = jwt_decode(localStorage.getItem('token')).data._id;
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
