import { IUser } from '../interface/user.interface';

export class User implements IUser {
  constructor(
    public id: number,
    public email: string,
    public name: string,
    public password: string,
    public acceptTerms: boolean
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
    this.acceptTerms = acceptTerms;
  }
}
