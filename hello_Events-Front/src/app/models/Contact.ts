export class Contact {
  id?: number;
  name: string | undefined;
  email: string|undefined;
  message: string | undefined;
  requestDate: string | undefined;


  constructor(data?: Partial<Contact>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.email = data.email;
      this.message = data.message;
      this.requestDate = data.requestDate;
    }
  }
}
