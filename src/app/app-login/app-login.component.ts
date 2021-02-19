import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit, DoCheck {

  // 表单校验
  loginGroup: FormGroup;

  usernameValid = false;
  usernameText = '';
  passwordValid = false;
  passwordText = '';

  // 依赖注入
  constructor(private fb : FormBuilder, private router: Router) {
    this.loginGroup  = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngDoCheck(): void {
    console.log(this.loginGroup.controls.username.valid);
    this.usernameValid = this.loginGroup.controls.username.valid;
    this.passwordValid = this.loginGroup.controls.password.valid;
    if(this.usernameValid){
      this.usernameText = '用户名输入成功！';
    }else{
      this.usernameText = '校验失败，至少六位！';
    }
    if(this.passwordValid){
      this.passwordText = '密码输入成功！';
    }else{
      this.passwordText = '校验失败，至少六位！';
    }
  }

  ngOnInit(): void {
    
  }

  // 登录逻辑
  login(){
    console.log(this.loginGroup);
    console.log(this.loginGroup.valid);
    console.log(this.loginGroup.value);
    if(this.loginGroup.valid) {
      this.router.navigateByUrl('/list');
    }
  }

}
