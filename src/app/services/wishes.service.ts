import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class WishesService {
  lists: List[] = [];

  constructor() {
    this.getStorage();
  }

  newList(title: string) {
    const newList = new List(title);
    this.lists.push(newList);
    this.saveStorage();
    return newList.id;
  }

  getList(id: string) {
    return this.lists.find((item) => item.id === +id);
  }

  eraseList(id: number) {
    this.lists = this.lists.filter((item) => item.id !== id);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('W1sh3SD4ta', JSON.stringify(this.lists));
  }

  getStorage() {
    const data = localStorage.getItem('W1sh3SD4ta');
    if (!data) {
      return;
    }
    this.lists = JSON.parse(data);
  }
}
