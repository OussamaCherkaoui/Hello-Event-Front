import {Role} from "./Role";

export class User {
  idUser?:number;
  username: string | undefined;
  password: string|undefined;
  email: string|undefined;
  phone: string|undefined;
  role?:Role;

  constructor(data?: Partial<User>) {
    if (data) {
      this.idUser = data.idUser;
      this.username = data.username;
      this.password = data.password;
      this.email = data.email;
      this.phone = data.phone;
      this.role = data.role;
    }
  }
}


