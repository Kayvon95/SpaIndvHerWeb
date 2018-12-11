import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActorService} from './actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private actorService: ActorService) { }

  ngOnInit() {
  }

}
