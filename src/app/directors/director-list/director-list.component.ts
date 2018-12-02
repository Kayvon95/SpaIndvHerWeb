import { Component, OnInit } from '@angular/core';
import { Director } from '../director.model';
import { DirectorService} from '../director.service';

@Component({
  selector: 'app-director-list',
  templateUrl: './director-list.component.html',
  styleUrls: ['./director-list.component.css']
})

export class DirectorListComponent implements OnInit {
  directors: Director[];

  constructor(private directorService: DirectorService) { }

  ngOnInit() {
    this.directors = this.directorService.getDirectors();
  }

}
