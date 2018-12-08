import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Director} from '../director.model';
import {DirectorService} from '../director.service';

@Component({
  selector: 'app-director-detail',
  templateUrl: './director-detail.component.html',
  styleUrls: ['./director-detail.component.css']
})
export class DirectorDetailComponent implements OnInit {
  director: Director;
  id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private directorService: DirectorService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.directorService.getDirector(this.id)
            .then((director) => {
              this.director = director;
            })
            .catch(error => console.log(error));
        }
      );
  }
}
