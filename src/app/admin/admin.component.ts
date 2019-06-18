import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin : any ;
  constructor(
    private adminservice: AdminService,
    private router: Router,
    private authservice: AuthService
  ) {}

  ngOnInit() {
    if (!this.adminservice.adminId) {
      const tokenData = jwt_decode(localStorage.getItem("token"));
      this.adminservice.adminId = tokenData.data._id;
    }
    this.adminservice.getDashboardData().subscribe((data: any) => {
    //  console.log(data.data);
      this.admin = data.data ;
    });
  }
  onLogOutClicked() {
    this.authservice.logOut();
    this.router.navigate(["/login"]);
    return false;
  }

}
