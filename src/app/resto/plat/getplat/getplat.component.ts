import { RestoService } from 'src/app/Service/resto.service';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";


@Component({
  selector: 'app-getplat',
  templateUrl: './getplat.component.html',
  styleUrls: ['./getplat.component.css']
})
export class GetplatComponent implements OnInit {
admin;
  constructor( public restoService : RestoService) { }

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
}
