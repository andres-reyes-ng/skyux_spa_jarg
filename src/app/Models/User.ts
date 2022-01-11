export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public contactNo: string,
    public email: string,
    public birthDay: string,
    public address: string
  ) {}
}
export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  contactNo: string;
  email: string;
  birthDay: string;
  address: string;
}

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
