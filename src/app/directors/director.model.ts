import {Movie} from '../movies/movie.model';
export class Director {
  constructor(
    public _id: string,
    public firstName: string,
    public lastName: string,
    public yearOfBirth: number,
    public countryOfOrigin: string,
    public isActor: boolean,
    public imageUrl: string,
    public movies: Movie[]
  ) {}
}
