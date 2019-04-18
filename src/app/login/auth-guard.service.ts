import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Route, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';


@Injectable()
export class AuthGuardService  {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  // implements CanLoad
  // canLoad(){
  //
  // }
}
