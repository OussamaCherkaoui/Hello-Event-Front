import {Compte} from "./Compte";

export class User {
  user_id?: number;
  userName: string | undefined;
  cin: string | undefined;
  email: string | undefined;
  passWord?: string;
  comptes? : [Compte];

  constructor(data?: Partial<User>) {
    if (data) {
      this.user_id = data.user_id;
      this.userName = data.userName;
      this.cin = data.cin;
      this.email = data.email;
      this.passWord = data.passWord;
    }
  }
}
