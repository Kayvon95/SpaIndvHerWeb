import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MovieService} from '../movie.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movieForm: FormGroup;
  editMode = false;
  id = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  // TODO: FIT TO MOVIE MODEL
  private initForm() {
    this.movieForm = new FormGroup({
      'title': new FormControl,
      'subtitle': new FormControl,
      'minutes': new FormControl,
      'genre': new FormControl,
      'yearOfRelease': new FormControl,
    });

    if (this.editMode) {
      this.movieService.getMovie(this.id)
        .then((movie) => {
          this.movieForm.patchValue({
            title: movie.title,
            subtitle: movie.subtitle,
            minutes: movie.minutes,
            genre: movie.genre,
            yearOfRelease: movie.yearOfRelease});
        })
        .catch(error => console.log(error));
    }
  }

  onSaveMovie() {
    if (this.editMode) {
      this.movieService.editMovie(this.id, this.movieForm.value)
        .subscribe(
          (response) => this.router.navigate(['/movies/' + this.id]),
          (error) => console.log(error)
        );
    } else {
      this.movieService.saveMovie(this.movieForm.value)
        .subscribe(
          (response) => this.router.navigate(['/movies']),
          (error) => console.log(error)
        );
    }
  }

  onDeleteMovie() {
    this.movieService.deleteMovie(this.id)
      .subscribe(
        (response) => this.router.navigate(['/']),
        (error) => console.log(error)
      );
  }

  onCancel() {
    this.router.navigate(['/movies/' + this.id]);
  }
}

// USE:
// Assault: Pistol kills
// Medic: Cei Regotti Trench
// Support: Bar Trench
// Scout: Ross MkIII markasman
