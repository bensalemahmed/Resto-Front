import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestoService } from 'src/app/Service/resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  liste;
  restoForm : FormGroup;
  one: any;
  id;
    constructor(private adminservice: AdminService , private restoService: RestoService) {
      this.restoForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        tel: new FormControl('' ),
        address: new FormControl('', [Validators.required]),
      });
    }

    ngOnInit() {
      this.adminservice.getresto().subscribe((data: any) => {
        console.log(data);
        this.liste = data.data;
      });
    }
    sendmodal(x){
      this.id = x ;
      console.log(x);
      this.adminservice.getoneresto(x).subscribe((data: any) => {
        console.log(data);
        this.one = data.data;
        console.log(this.one);
      });
    }
    addresto(){
      console.log('aaaaaa', this.restoForm)

        this.restoService.addRestoOffice(this.restoForm.value,this.id).subscribe((data: any) => {
          console.log(data);
this.ngOnInit();
        });
      }


    }
