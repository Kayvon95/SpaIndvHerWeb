export class Actor {
  constructor(
    public _id: string,
    public firstName: string,
    public lastName: string,
    public yearOfBirth: number,
    public countryOfOrigin: string,
    public isDirector: boolean) {
  }
}
