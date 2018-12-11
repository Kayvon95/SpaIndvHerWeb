import {Director} from './director.model';
import { environment } from '../../environments/environment';
import {Injectable} from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DirectorService {
  directorChanged = new Subject<Director[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + 'directors';
  private directors: Director[] = [];

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

  getDirector(id: string): Promise<Director> {
    return this.http.get(this.serverUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
         return response.json() as Director;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  public saveDirector(director: Director) {
    return this.http.post(
      this.serverUrl, director, { headers: this.headers }
    );
  }

  public editDirector(id: string, director: Director ) {
    return this.http.put(
      this.serverUrl + '/' + id, director, { headers: this.headers}
      );
  }

  public deleteDirector(id: string) {
    return this.http.delete(
      this.serverUrl + '/' + id, {headers: this.headers}
      );
  }
}
