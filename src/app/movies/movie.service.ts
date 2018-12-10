import { Movie } from './movie.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MovieService {
  movieChanged = new Subject<Movie[]>();
  private headers = new Headers({'content-type' : 'application/json'});
  private serverUrl = environment.serverUrl + 'movies';
  private movies: Movie[] = [];

  constructor(private http: Http) {}

  getAll(): Promise<Movie[]> {
    console.log('Fetching movies from ' + this.serverUrl );

    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.movies = response.json() as Movie[];
        return this.movies;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message = error);
      });
  }

  getMovie(id: string): Promise<Movie> {
    return this.http.get(this.serverUrl + '/' + id, { headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json() as Movie;
      })
      .catch( error => {
        console.log('handleError');
        return Promise.reject( error.message = error );
      });
  }
}
