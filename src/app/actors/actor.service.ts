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
        console.log('Actors: ' + this.actors);
        return this.actors;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  getActor(id: string): Promise<Actor> {
    return  this.http.get(this.serverUrl + '/' + id, { headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json() as Actor;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  public saveActor(actor: Actor) {
    return this.http.post(
      this.serverUrl, actor, { headers: this.headers }
    );
  }

  public editActor(id: string, actor: Actor) {
    return this.http.put(
      this.serverUrl + '/' + id, actor, { headers: this.headers}
    );
  }

  public deleteActor(id: string) {
    return this.http.delete(
      this.serverUrl + '/' + id, {headers: this.headers}
    );
  }
}
