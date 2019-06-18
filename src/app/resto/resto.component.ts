import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { AdminService } from '../Service/admin.service';
import { RestoService } from '../Service/resto.service';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {

  admin : any ;
  constructor(
    private restoService : RestoService,
    private router: Router,
    private authservice: AuthService

  ) {}

  ngOnInit() {
    if (!this.restoService.restoId) {
      const tokenData = jwt_decode(localStorage.getItem("token"));
      this.restoService.restoId = tokenData.data._id;
    }
    this.restoService.getDashboardData().subscribe((data: any) => {
      this.admin = data.data ;
      console.log(this.admin)
    });
  }
  onLogOutClicked() {
    this.authservice.logOut();
    this.router.navigate(["/login"]);
    return false;
  }
}
