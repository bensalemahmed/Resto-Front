import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls: ['./user-liste.component.css']
})
export class UserListeComponent implements OnInit {
  liste;
  one: any;
    constructor(private adminservice: AdminService) { }

    ngOnInit() {
      this.adminservice.getsuser().subscribe((data: any) => {
        this.liste = data.data;
      });
    }
    sendmodal(x){
      console.log(x);
      this.adminservice.getonesuser(x).subscribe((data: any) => {
        this.one = data.data;
      });
    }
  }
