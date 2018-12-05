import { Movie } from './movie.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
  private movies: Movie[] = [
    new Movie('The Lord of the Rings', 'The Fellowship of the Ring', 178, 'Fantasy', 2001),
    new Movie('The Lord of the Rings', 'The Two Towers', 17, 'Fantasy', 2002),
    new Movie('Interstellar', '', 178, 'Science-fiction', 2014)
  ];

  getMovies() {
    return this.movies.slice();
  }
}
