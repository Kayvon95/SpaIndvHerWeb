import {Director} from './director.model';
import {Injectable} from '@angular/core';

@Injectable()
export class DirectorService {
  private directors: Director[] = [
    new Director( 'Tommy', 'Wiseau', true),
    new Director('Christopher', 'Nolan', false)
  ];

  getDirectors() {
    return this.directors.slice();
  }
}
