import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;

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

  public onSignup() {
    this.authenticationService.signUp(this.userForm.value.username, this.userForm.value.password);
    this.router.navigate(['/']);
  }

  public onCancel() {
    this.router.navigate(['/']);
  }
}
