import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  liste;
  image;
  pw;
  one: any;
  editform;
  submitted;
  constructor(private adminservice: AdminService) {
    this.editform = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      role: new FormControl('user'),
      imgUrl: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(),
    });
  }

  ngOnInit() {
    this.adminservice.getAdmin().subscribe((data: any) => {
      console.log(data);
      this.liste = data.data;
    });
  }
  sendmodal(x) {
    console.log(x);

    this.adminservice.getoneAdmin(x).subscribe((data: any) => {
      console.log(data);
      this.one = data.data;
      console.log(this.one);
      console.log(this.one.firstName)
      this.editform = new FormGroup({
        firstName: new FormControl(this.one.firstName, [Validators.required]),
        lastName: new FormControl(this.one.lastName, [Validators.required]),
        role: new FormControl(this.one.role),
        imgUrl: new FormControl(this.one.imgUrl),
        email: new FormControl(this.one.email, [Validators.required, Validators.email]),
        password: new FormControl(this.one.password ),
      });
    });
  }
  imgselected($event) {
    console.log($event.target.files);
    this.image = $event.target.files[0];
  }
  edit(x) {

    this.submitted = true;
    if (this.editform.valid) {
      //this.editform.controls['imgUrl'].setValue(this.image);
      this.editform.value['imgUrl'] = this.image

      console.log(this.image)
      const formData = new FormData()
      if (this.image) {
        formData.append('imgUrl', this.image);
      }
      if (this.editform.value.password){
        formData.append('password', this.editform.value.password)

      }



      formData.append('email', this.editform.value.email)
      formData.append('firstName', this.editform.value.firstName)
      formData.append('lastName', this.editform.value.lastName)
      formData.append('role', this.editform.value.role)
       console.log(formData.getAll('imgUrl'))
      this.adminservice.updateOne(x, formData).subscribe((data: any) => {
        console.log(data)
        this.ngOnInit();
      });
    }
  }
}
