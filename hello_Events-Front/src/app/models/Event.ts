export class Event {
  id?: number;
  title: string | undefined;
  description: string|undefined;
  date: string | undefined;
  location: string | undefined;
  category: string | undefined;


  constructor(data?: Partial<Event>) {
    if (data) {
      this.id = data.id;
      this.title = data.title;
      this.description = data.description;
      this.date = data.date;
      this.location = data.location;
      this.category = data.category;
    }
  }
}
