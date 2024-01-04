import { IUserLogin } from '../../interface/user-login.interface';

export class UserLogin implements IUserLogin {
  constructor(public email: string, public password: string) {
    this.email = email;
    this.password = password;
  }
}
