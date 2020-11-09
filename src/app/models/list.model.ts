import { Item } from './items.model';

export class List {
  id: number;
  title: string;
  createdAt: Date;
  terminatedAt: Date | undefined;
  completed: boolean;
  items: Item[];

  constructor(title: string) {
    this.title = title;
    this.createdAt = new Date();
    this.completed = false;
    this.items = [];

    this.id = new Date().getTime();
  }
}
