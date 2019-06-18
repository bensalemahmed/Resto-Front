import { AdminService } from './../../Service/admin.service';
import { AuthService } from './../../Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message = '';
  submitted = false;
  constructor(private authService: AuthService, private router: Router,
              private adminservice: AdminService) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }
  loginBtn() {
    this.submitted = true;
    this.message = '';
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((data: any) => {
        if (data.msg === 'OK') {
          const tokenData = jwt_decode(data.data.token);
          localStorage.setItem('token', data.data.token);
          if (tokenData.data.role === 'admin') {
            this.adminservice.adminId = tokenData.data._id;
            this.router.navigateByUrl('/admin');
          }
          if (tokenData.data.role === 'user') {
            this.router.navigateByUrl('/user');
          }
          if (tokenData.data.role === 'resto') {
            this.router.navigateByUrl('/resto');
          }
        } else {
          this.message = data.msg;
        }
      });
    }
  }
}
