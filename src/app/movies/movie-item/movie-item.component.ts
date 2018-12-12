import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie.model';
import {Director} from '../../directors/director.model';
import {DirectorService} from '../../directors/director.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() director: Director;
  @Input() index: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private directorService: DirectorService) { }

  ngOnInit() {
  }

  onDetail() {
    console.log(this.movie);
    console.log(this.route);
    this.router.navigate(['detail', this.movie._id], {relativeTo: this.route});
  }
}
