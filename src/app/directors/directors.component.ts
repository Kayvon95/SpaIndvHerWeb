import { Component, OnInit } from '@angular/core';
import {DirectorService} from './director.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css'],
  providers: [DirectorService]
})
export class DirectorsComponent implements OnInit {

  constructor(private directorService: DirectorService) { }

  ngOnInit() {
  }

}
