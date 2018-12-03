import {Component, Input, OnInit} from '@angular/core';
import {Director} from '../../directors/director.model';

@Component({
  selector: 'app-director-item',
  templateUrl: './director-item.component.html',
  styleUrls: ['./director-item.component.css']
})
export class DirectorItemComponent implements OnInit {
  @Input() director: Director;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
x
}