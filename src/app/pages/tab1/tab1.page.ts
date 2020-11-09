import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public wishesService: WishesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async addList() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'New List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: `List's name`,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Cancel'),
        },
        {
          text: 'Create',
          handler: (data: any) => {
            if (data.title.trim().length > 3) {
              const id = this.wishesService.newList(data.title);
              this.router.navigate(['/tabs/tab1/add/', id]);
            }
          },
        },
      ],
    });

    alert.present();
  }
}
