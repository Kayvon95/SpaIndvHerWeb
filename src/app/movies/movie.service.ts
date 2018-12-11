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

  public saveMovie(movie: Movie) {
    return this.http.post(
      this.serverUrl, movie, { headers: this.headers }
    );
  }

  public editMovie(id: string, movie: Movie) {
    return this.http.put(
      this.serverUrl + '/' + id, movie, { headers: this.headers}
    );
  }

  public deleteMovie(id: string) {
    return this.http.delete(
      this.serverUrl + '/' + id, {headers: this.headers}
    );
  }
}
