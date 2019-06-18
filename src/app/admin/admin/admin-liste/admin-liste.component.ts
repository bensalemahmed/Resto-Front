import { AdminService } from './../../../Service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-liste',
  templateUrl: './admin-liste.component.html',
  styleUrls: ['./admin-liste.component.css']
})
export class AdminListeComponent implements OnInit {
liste;
one: any;
  constructor(private adminservice: AdminService) { }

  ngOnInit() {
    this.adminservice.getAdmin().subscribe((data: any) => {
      console.log(data);
      this.liste = data.data;
    });
  }
  sendmodal(x){
    console.log(x);
    this.adminservice.getoneAdmin(x).subscribe((data: any) => {
      console.log(data);
      this.one = data.data;
      console.log(this.one);
    });
  }
}
