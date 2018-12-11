import { Component, OnInit } from '@angular/core';
import {Actor} from '../actor.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ActorService} from '../actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  actor: Actor;
  id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private actorService: ActorService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.actorService.getActor(this.id)
            .then((actor) => {
            this.actor = actor;
            })
            .catch(error => console.log(error));
        }
      );
  }
}
