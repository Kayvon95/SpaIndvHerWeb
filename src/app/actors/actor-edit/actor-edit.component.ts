import { Component, OnInit } from '@angular/core';
import {ActorService} from '../actor.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  actorForm: FormGroup;
  editMode = false;
  id = '';


  constructor(private router: Router,
              private route: ActivatedRoute,
              private actorService: ActorService) { }

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
    }
  }

  onSaveActor() {
    if (this.editMode) {
      this.actorService.editActor(this.id, this.actorForm.value)
        .subscribe(
          (response) => this.router.navigate(['/actors/' + this.id]),
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
        (response) => this.router.navigate(['/']),
        (error) => console.log(error)
      );
  }

  onCancel() {
    this.router.navigate(['/actors/' + this.id]);
  }
}
