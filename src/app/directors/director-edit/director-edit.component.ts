import { Component, OnInit } from '@angular/core';
import {Director} from '../director.model';
import {DirectorService} from '../director.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-director-edit',
  templateUrl: './director-edit.component.html',
  styleUrls: ['./director-edit.component.css']
})
export class DirectorEditComponent implements OnInit {
  directorForm: FormGroup;
  editMode = false;
  id = '';
  editedDirector = Director;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private directorService: DirectorService
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

  private initForm() {
    this.directorForm = new FormGroup({
      'firstName': new FormControl,
      'lastName': new FormControl,
      'yearOfBirth': new FormControl,
      'countryOfOrigin': new FormControl,
      'isActor': new FormControl,
      'imageUrl': new FormControl
    });

    if (this.editMode) {
      this.directorService.getDirector(this.id)
        .then((director) => {
          this.directorForm.setValue({
            firstName: director.firstName,
            lastName: director.lastName,
            yearOfBirth: director.yearOfBirth,
            countryOfOrigin: director.countryOfOrigin,
            isActor: director.isActor,
            imageUrl: director.imageUrl});
          })
        .catch(error => console.log(error));
    }
  }

  onSaveDirector() {
    if (this.editMode) {
      this.directorService.editDirector(this.id, this.directorForm.value)
        .subscribe(
          (response) => this.router.navigate(['/']),
          (error) => console.log(error)
        );
    } else {
      this.directorService.saveDirector(this.directorForm.value)
        .subscribe(
          (response) => this.router.navigate(['/']),
          (error) => console.log(error)
        );
    }
  }

  onDeleteDirector() {
    this.directorService.deleteDirector(this.id)
      .subscribe(
        (response) => this.router.navigate(['/']),
        (error) => console.log(error)
      );
  }

  onCancel() {
    this.router.navigate(['/directors/' + this.id]);
  }

}
