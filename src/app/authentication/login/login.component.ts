import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  hasToken = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userForm = new FormGroup({
      'username': new FormControl,
      'password': new FormControl
    });
  }

  public onLogin() {
    this.authenticationService.login(this.userForm.value.username, this.userForm.value.password);
    // this.router.navigate(['/']);
  }

  public onCancel() {
    this.router.navigate(['/']);
  }
}
