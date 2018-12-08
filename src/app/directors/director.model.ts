export class Director {
  constructor(
    public _id: string,
    public firstName: string,
    public lastName: string,
    public yearOfBirth: number,
    public countryOfOrigin: string,
    public isActor: boolean
  ) {}

  // public id: string;
  // public firstName: string;
  // public lastName: string;
  // public isActor: boolean;
  //
  // constructor(id: string, firstName: string, lastName: string, isActor: boolean) {
  //   this.id = id;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.isActor = isActor;
  // }
}
