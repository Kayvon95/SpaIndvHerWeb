import {Component, OnDestroy, OnInit} from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService} from '../movie.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[];
  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    this.subscription = this.movieService.movieChanged
      .subscribe(
        (movies: Movie[]) => {
          this.movies = movies;
        }
      );
    this.movieService.getAll()
      .then(movies => {
        this.movies = movies;
      })
      .catch( error => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
