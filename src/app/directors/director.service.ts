import {Director} from './director.model';
import { environment } from '../../environments/environment';
import {Injectable} from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DirectorService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + 'directors';
  private directors: Director[] = [];

  // private directors: Director[] = [
  //   new Director( 'Tommy', 'Wiseau', true),
  //   new Director('Christopher', 'Nolan', false)
  // ];

  // getDirectors() {
  //   return this.directors.slice();
  // }
  constructor (private http: Http) {
  }

  getAll(): Promise<Director[]> {
    console.log('Fetching directors from the server.');

    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.directors = response.json() as Director[];
        return this.directors;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
}
