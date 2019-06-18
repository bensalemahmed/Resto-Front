import { Router } from '@angular/router';
import { RestoService } from 'src/app/Service/resto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  platForm: FormGroup;
  constructor(private restoServ : RestoService , private router : Router) {
    this.platForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
  }
 AddPlat() {
  if (this.platForm.valid) {
    this.restoServ.addplat(this.platForm.value).subscribe((data: any) => {
      if (data.msg === 'successful add') {
          this.router.navigateByUrl('resto/get');


      }

    });
  }

 }
}
