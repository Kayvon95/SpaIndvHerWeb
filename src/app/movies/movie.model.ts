export class Movie {
  constructor(
    public _id: string,
    public title: string,
    public subtitle: string,
    public minutes: number,
    public genre: string,
    public yearOfRelease: number,
  ) {}
  // constructor(title: string, subtitle: string, minutes: number, genre: string, yearOfRelease: number) {
  //   this.title = title;
  //   this.subtitle = subtitle;
  //   this.minutes = minutes;
  //   this.genre = genre;
  //   this.yearOfRelease = yearOfRelease;
  // }
}
