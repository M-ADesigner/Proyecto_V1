import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';




@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage  {

  constructor(public popoverController: PopoverController) {}

  async Presentarpopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Component,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
  }
}
