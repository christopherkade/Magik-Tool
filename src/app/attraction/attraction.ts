export class Attraction {
  id: string;
  name: string;
  active: boolean;
  waitTime: number;
  status: string;

  constructor(id?: string, title?: string, active?: boolean, waitTime?: number, status?: string) {
    this.id = id;
    this.name = title;
    this.active = active;
    this.waitTime = waitTime;
    this.status = status;
  }
}
