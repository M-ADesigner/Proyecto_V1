import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vCorreo',
  templateUrl: './vCorreo.page.html',
  styleUrls: ['./vCorreo.page.scss'],
})
export class VCorreoPage  {

  constructor(public alertCtrl: AlertController) { }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Aviso!',
      message: 'Se te ah enviando un link de verificacion de correo electronico',
      buttons: ['Aceptar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
}
