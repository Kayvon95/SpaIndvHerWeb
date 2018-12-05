import { Component, OnInit } from '@angular/core';
import {DirectorService} from './director.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css'],
  providers: [DirectorService]
})
export class DirectorsComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private directorService: DirectorService) { }

  ngOnInit() {
  }

}
