import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-get-resto',
  templateUrl: './get-resto.component.html',
  styleUrls: ['./get-resto.component.css']
})
export class GetRestoComponent implements OnInit {
  liste;
  one: any;
    constructor(private adminservice: AdminService) { }

    ngOnInit() {
      this.adminservice.getresto().subscribe((res: any) => {
        this.liste = res.data;
        console.log(this.liste);
      });
    }
    sendmodal(x){
      console.log(x);
      this.adminservice.getoneresto(x).subscribe((data: any) => {
        console.log(data);
        this.one = data.data;
        console.log(this.one);
      });
    }
  }
