import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/list.model';
import { Item } from '../../models/items.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  list: List;
  valueItem = '';

  constructor(
    private wishesService: WishesService,
    private route: ActivatedRoute
  ) {
    const idList = this.route.snapshot.paramMap.get('id');
    this.list = this.wishesService.getList(idList);
  }

  addItem() {
    if (this.valueItem.trim().length < 1) {
      return;
    }
    const newItem = new Item(this.valueItem);
    this.list.items.push(newItem);
    this.valueItem = '';
    this.wishesService.saveStorage();
  }

  completedList(flag: boolean) {
    this.list.terminatedAt = new Date();
    this.list.completed = flag;
  }

  changeCompleted() {
    this.list.items.every((item) => item.completed)
      ? this.completedList(true)
      : this.completedList(false);
    this.wishesService.saveStorage();
  }

  eraseItem(index: number) {
    this.list.items.splice(index, 1);
    this.wishesService.saveStorage();
  }

  ngOnInit() {}
}
