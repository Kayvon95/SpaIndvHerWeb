import { Component, OnDestroy, OnInit } from '@angular/core';
import { Director } from '../director.model';
import { DirectorService} from '../director.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-director-list',
  templateUrl: './director-list.component.html',
  styleUrls: ['./director-list.component.css']
})

export class DirectorListComponent implements OnInit, OnDestroy {
  directors: Director[];
  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private directorService: DirectorService) { }

  ngOnInit() {
    this.subscription = this.directorService.directorChanged
      .subscribe(
        (directors: Director[]) => {
          this.directors = directors;
        }
      );
    this.directorService.getAll()
      .then(directors => {
        this.directors = directors;
      })
      .catch( error => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
