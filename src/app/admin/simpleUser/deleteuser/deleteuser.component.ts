import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  liste;
  one: any;
    constructor(private adminservice: AdminService) { }

    ngOnInit() {
      this.adminservice.getsuser().subscribe((data: any) => {
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
    delete(i){
      console.log(i);
      this.adminservice.deleteOne(i).subscribe((data: any) => {
             console.log (data) ;

        this.one = data.data;

        this.ngOnInit();
      });

    }
}
