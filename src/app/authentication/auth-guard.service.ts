import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';


@Injectable()
export class AuthGuardService implements CanLoad, CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canLoad(route: Route): boolean {
    console.log('canLoad() called');
    const url: string = route.path;
    console.log('Url:' + url);
    if (this.authService.verifyTokenJWT()) {
      return true;
    }
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    console.log('canActivate() called');
    console.log('Url:' + url);
    if (this.authService.verifyTokenJWT()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
