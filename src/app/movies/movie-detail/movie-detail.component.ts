import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie.model';
import {MovieService} from '../movie.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.movieService.getMovie(this.id)
            .then((movie) => {
              this.movie = movie;
            })
            .catch(error => console.log(error));
        }
      );
  }
}
