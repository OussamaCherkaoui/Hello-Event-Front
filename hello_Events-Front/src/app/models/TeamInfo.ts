export class TeamInfo {
  id?: number;
  name: string | undefined;
  role?: string;
  description: string | undefined;


  constructor(data?: Partial<TeamInfo>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.role = data.role;
      this.description = data.description;
    }
  }
}
