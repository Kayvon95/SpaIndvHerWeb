import {Actor} from '../actors/actor.model';
export class Movie {
  constructor(
    public _id: string,
    public title: string,
    public subtitle: string,
    public minutes: number,
    public genre: string,
    public yearOfRelease: number,
    public actors: Actor[],
    public imageUrl: string
  ) {}
}
