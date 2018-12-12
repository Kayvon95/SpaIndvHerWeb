import {ActivatedRoute, Params, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {DirectorService} from '../../directors/director.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movieForm: FormGroup;
  editMode = false;
  addToDirector = false;
  id = '';
  directorId = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private movieService: MovieService,
              private directorService: DirectorService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params);
          this.id = params['id'];
          this.editMode = params['id'] != null;
          console.log('editMode ' + this.editMode);

          this.directorId = params['directorid'];
          this.addToDirector = params['directorid'] != null;
          console.log(this.directorId);
          console.log(this.addToDirector);
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
      'imageUrl': new FormControl
    });

    if (this.editMode) {
      console.log('Editing movie.');
      this.addToDirector = false;
      this.movieService.getMovie(this.id)
        .then((movie) => {
          this.movieForm.patchValue({
            title: movie.title,
            subtitle: movie.subtitle,
            minutes: movie.minutes,
            genre: movie.genre,
            yearOfRelease: movie.yearOfRelease,
            imageUrl: movie.imageUrl
          });
        })
        .catch(error => console.log(error));
    } else if (this.addToDirector) {
      console.log('FORM: Adding movie to director');
    }
  }

  onSaveMovie() {
    if (this.editMode) {
      console.log('Editing movie');
      this.movieService.editMovie(this.id, this.movieForm.value)
        .subscribe(
          (response) => this.router.navigate(['/movies/' + this.id]),
          (error) => console.log(error)
        );
    } else if (this.addToDirector) {
      console.log('Targeting ');
      console.log('Adding movie to director with Service');
      this.directorService.addMovieToDirector(this.directorId, this.movieForm.value)
        .subscribe(
          (response) => this.router.navigate(['/directors/' + this.directorId]),
          (error) => console.log(error)
        );
    } else {
      console.log('Adding new movie');
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
        (response) => this.router.navigate(['/movies/list/']),
        (error) => console.log(error)
      );
  }

  onCancel() {
    this.router.navigate(['/movies/' + this.id]);
  }
}
