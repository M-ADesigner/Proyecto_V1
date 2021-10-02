import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { PagesService } from '../pages.services';
import { ActUsuarioPage } from './actUsuario/actUsuario.pages';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage  implements OnInit {

   constructor(public miSericio: PagesService, public popoverCtrl: PopoverController) {

   }
  ngOnInit(): void {
      this.miSericio.listar()
      .subscribe(resAvila=>{
        this.miSericio.lRegistros = resAvila
      });
  }

  refrescar(event) {
      this.miSericio.listar()
    console.log('Sincronizando...');

      setTimeout(() => {
        this.miSericio.listar().subscribe(resAvila=>{this.miSericio.lRegistros=resAvila});
        ///console.log('Sincronizacion exitosa!!');
        event.target.complete();
      }, 2000);
}

  actualizar(id: string,userParametro: String, passwordParametro: String){
  return this.miSericio.httpAvila .put(this.miSericio.api_url+'/' +id,
  {usuario:userParametro,clave:passwordParametro} );

}
async notifications(ev: any) {
  const popover = await this.popoverCtrl.create({
      component: ActUsuarioPage,
      event: ev,
      animated: true,
      showBackdrop: true
  });
  return await popover.present();
}
}
