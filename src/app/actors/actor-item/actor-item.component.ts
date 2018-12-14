import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../actor.model';
import {Movie} from '../../movies/movie.model';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
  @Input() actor: Actor;
  @Input() movie: Movie;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
