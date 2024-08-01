export class AuthenticationRequest {
  username: string | undefined;
  password: string|undefined;


  constructor(data?: Partial<AuthenticationRequest>) {
    if (data) {
      this.username = data.username;
      this.password = data.password;
    }
  }
}


