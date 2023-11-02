export interface TicketInterface {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  status: string;
  progress: number;
  createdAt: Date;
  updatedAt: Date;
}
