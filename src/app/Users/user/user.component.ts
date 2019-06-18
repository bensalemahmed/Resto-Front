import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 allresto;
 oneresto;
 onePlat;
 idplat;
 mail;
  admin : any ;
  constructor(
    private userservice: UserService,
    private router: Router,
    private authservice: AuthService
  ) {}

  ngOnInit() {
    if (!this.userservice.userid) {
      const tokenData = jwt_decode(localStorage.getItem("token"));
      this.userservice.userid = tokenData.data._id;
    }
    this.userservice.getDashboardData().subscribe((data: any) => {

      this.admin = data.data ;
      console.log(this.admin)
    });
    this.userservice.getAllResto().subscribe((allResto: any) => {
      this.allresto = allResto.data;
     });
  }
  sendmodal(x){
    console.log(x);
    this.userservice.getoneResto(x).subscribe((data: any) => {
      console.log(data);
      this.oneresto=data.data;

    });
  }
  verif(x){
    this.userservice.getplat(x).subscribe((data: any) => {
      console.log ('plat');
      console.log (data.data)


      this.onePlat =data.data;
    });


  }
  sendMail(x){
    const mail = {
      emailFrom: this.admin.email,
      emailTo: this.oneresto.email,
      sub :'Reservation avec Date'+ new Date(),
      message: "réservation du "+ this.admin.firstName +" " +this.admin.lastName +" Pour  un  "+ this.onePlat.name+":)"
    }

 this.userservice.sedmail(mail).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(["/user"]);

    });

  }
  onLogOutClicked() {
    this.authservice.logOut();
    this.router.navigate(["/login"]);
    return false;
  }
}
