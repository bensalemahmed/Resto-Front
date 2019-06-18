import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserService {
userid;
  constructor(private http: HttpClient) { }


  getDashboardData() {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};
    return this.http.get('http://localhost:3000/client/getclient/'+this.userid, httpOptions);
  }
  getAllResto() {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};

    return this.http.get('http://localhost:3000/client/getrestofc/all', httpOptions);
  }
  sedmail(mail) {
    return this.http.post('http://localhost:3000/reservation/sedmail', mail);
  }
  getplat(id) {
    return this.http.get('http://localhost:3000/client/getplat/'+id);
  }
  getoneResto(x) {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${token}`
      })};

    return this.http.get('http://localhost:3000/client/getrestofc/'+x, httpOptions);
  }




  decodeToken() {
    if (localStorage.getItem('token')) {
      const data = jwt_decode(localStorage.getItem('token'));
      if (data.data.role === 'user') {
        this.userid = jwt_decode(localStorage.getItem('token')).data._id;
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
