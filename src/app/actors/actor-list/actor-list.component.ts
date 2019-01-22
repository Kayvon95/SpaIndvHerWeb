import {Component, OnDestroy, OnInit} from '@angular/core';
import {Actor} from '../actor.model';
import {Subscription} from 'rxjs/Subscription';
import {ActorService} from '../actor.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit, OnDestroy {
  actors: Actor[];
  subscription: Subscription;
  actorCount: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private actorService: ActorService) { }

  ngOnInit() {
    this.subscription = this.actorService.actorChanged
      .subscribe(
        (actors: Actor[]) => {
          this.actors = actors;
        }
      );
    this.actorService.getAll()
      .then(actors => {
        this.actors = actors;
        this.actorCount = this.actors.length;
      })
      .catch( error => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
