import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
    'Access-Control-Allow-Origin': 'localhost:4200'
  });
  private serverUrl = environment.serverUrl + 'authentication';

  constructor (private http: Http) {
    this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    this.headers.append('Access-Control-Allow-Origin', 'localhost:4200');
  }

  signUp(username: string, password: string) {
     return this.http.post('http://localhost:5000/api/v1' + '/signup', {username: username, password: password})
       .subscribe(response => {
         const textResponse = response.text();
         const jsonResponse = JSON.parse(textResponse);
         localStorage.setItem('auth_token', jsonResponse.token);
       });
  }

  login(username: string, password: string) {
    console.log('@login(): ' + this.serverUrl + '/login');
    return this.http.post(this.serverUrl + '/login', {username: username, password: password})
      .subscribe(response => {
        const textResponse = response.text();
        const jsonResponse = JSON.parse(textResponse);
        // console.log(jsonResponse.token);
        localStorage.setItem('auth_token', jsonResponse.token);
      });
  }

  verifyTokenJWT(): boolean {
    const token = localStorage.getItem('auth_token');
    this.headers.append( 'Authorization', token );
    if (token) {
      // console.log('token found');
      this.http.post(this.serverUrl + '/verifyToken', {auth_token: ''}, {headers: this.headers})
        .subscribe( response => {
          const textResponse = response.text();
          const jsonResponse = JSON.parse(textResponse);
          console.log(jsonResponse.sub);
        });
      return true;
    } else {
      console.log('No valid token');
      return false;
    }
  }
}
