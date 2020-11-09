import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  @Input() completedLists = true;
  @ViewChild('listWithSliding') listWithSliding: IonList;

  constructor(
    public wishesService: WishesService,
    private router: Router,
    private alertCtr: AlertController
  ) {}

  selectedList(item: List) {
    this.router.navigate([`${this.router.url}/add`, item.id]);
  }
  eraseList(id: number) {
    this.wishesService.eraseList(id);
  }
  async editTitle(item: List) {
    const alert = await this.alertCtr.create({
      header: 'Edit Title',
      subHeader: 'At least 3 characters for title',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: item.title,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => this.listWithSliding.closeSlidingItems(),
        },
        {
          text: 'Update',
          handler: (data: any) => {
            if (data.title.trim().length > 3) {
              item.title = data.title.trim();
              this.wishesService.saveStorage();
              this.listWithSliding.closeSlidingItems();
            }
          },
        },
      ],
    });

    alert.present();
  }
  ngOnInit() {}
}
