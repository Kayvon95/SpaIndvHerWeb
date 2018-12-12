import {ActivatedRoute, Params, Router} from '@angular/router';
import {ActorService} from '../actor.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MovieService} from '../../movies/movie.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  actorForm: FormGroup;
  editMode = false;
  addToMovie = false;
  id = '';
  movieId = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private actorService: ActorService,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.movieId = params['movieId'];
          console.log('MovieID = ' + this.movieId );
          this.addToMovie = params['movieId'] != null;
          console.log('BOOL: addToMovie is ' + this.addToMovie);
          this.initForm();
        }
      );
  }

  private initForm() {
    this.actorForm = new FormGroup({
      'firstName': new FormControl,
      'lastName': new FormControl,
      'yearOfBirth': new FormControl,
      'countryOfOrigin': new FormControl,
      'isDirector': new FormControl,
      'imageUrl': new FormControl
    });

    if (this.editMode) {
      this.actorService.getActor(this.id)
        .then((actor) => {
          this.actorForm.setValue({
            firstName: actor.firstName,
            lastName: actor.lastName,
            yearOfBirth: actor.yearOfBirth,
            countryOfOrigin: actor.countryOfOrigin,
            isDirector: actor.isDirector,
            imageUrl: actor.imageUrl});
        })
        .catch(error => console.log(error));
    } else if (this.addToMovie) {
      console.log('FORM: Adding actor to movie');
    }
  }

  onSaveActor() {
    if (this.editMode) {
      this.actorService.editActor(this.id, this.actorForm.value)
        .subscribe(
          (response) => this.router.navigate(['/actors/' + this.id]),
          (error) => console.log(error)
        );
    } else if (this.addToMovie) {
      console.log('Adding actor to movie ' + this.movieId);
      console.log('MovieID: ' + this.movieId);
      const stringId = this.movieId.toString();
      console.log('MovieID to String: ' + stringId)
      this.movieService.addActorToMovie(stringId, this.actorForm.value)
        .subscribe(
          (response) => this.router.navigate(['/movies/' + this.movieId]),
          (error) => console.log(error)
        );
    } else {
      this.actorService.saveActor(this.actorForm.value)
        .subscribe(
          (response) => this.router.navigate(['/actors']),
          (error) => console.log(error)
        );
    }
  }

  onDeleteActor() {
    this.actorService.deleteActor(this.id)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    this.router.navigate(['/actors']);
  }

  onCancel() {
    this.router.navigate(['/actors/' + this.id]);
  }
}
