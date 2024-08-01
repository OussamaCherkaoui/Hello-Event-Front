export class Ticket {
  id?: number;
  user_id: number | undefined;
  event_id?: number;
  purchaseDate: string | undefined;


  constructor(data?: Partial<Ticket>) {
    if (data) {
      this.id = data.id;
      this.user_id = data.user_id;
      this.event_id = data.event_id;
      this.purchaseDate = data.purchaseDate;
    }
  }
}
