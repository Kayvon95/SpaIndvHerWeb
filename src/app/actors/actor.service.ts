import {Actor} from './actor.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Http, Headers} from '@angular/http';

@Injectable()
export class ActorService {
  actorChanged = new Subject<Actor[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + 'actors';
  private actors: Actor[] = [];

  constructor(private http: Http) {}

  getAll(): Promise<Actor[]> {
    console.log('Fetching actors from the server.');

    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.actors = response.json() as Actor[];
        return this.actors;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
}
