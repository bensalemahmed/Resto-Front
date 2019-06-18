import { AuthService } from './../../Service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 image ;
  registerForm: FormGroup;
  message = '';
  submitted = false;
  constructor(private router: Router , private authService : AuthService) {

    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      role: new FormControl('user' ),
      imgUrl: new FormControl('profil.png'),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }
  imgselected($event){
    console.log($event.target.files);
    this.image = $event.target.files[0];
  }
  registerBtn() {
    this.submitted = true;
    this.message = '';
    if (this.registerForm.valid) {
      //this.registerForm.controls['imgUrl'].setValue(this.image);
      this.registerForm.value['imgUrl'] =this.image
      const formData = new FormData ()
      formData.append('imgUrl',this.image);
      formData.append('email',this.registerForm.value.email)
      formData.append('firstName',this.registerForm.value.firstName)
      formData.append('lastName',this.registerForm.value.lastName)
      formData.append('password',this.registerForm.value.password)
      formData.append('role',this.registerForm.value.role)
      this.authService.register(formData).subscribe((data: any) => {
        if (data.msg === 'ok') {

                this.router.navigateByUrl('/login');
          }
         else{
          this.message = 'errrr';
        }
      });
    }
  }

}
