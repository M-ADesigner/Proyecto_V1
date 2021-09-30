import { Component } from '@angular/core';
import { PagesService } from '../../pages.services';
import { MainPage } from '../main.page';

@Component({
  selector: 'app-actUsuario',
  templateUrl: './actUsuario.pages.html',
  styleUrls: ['./actUsuario.pages.scss'],
})
export class ActUsuarioPage  {

  constructor(public maine: PagesService) {
  }

    ejecutar(xx:any){
      this.maine.actualizar(this.maine.lRegistros.id
                               ,this.maine.lRegistros.usuario
                               ,this.maine.lRegistros.clave)
       .subscribe(respuesta=>{
           console.log("actualice*******************",respuesta)
       })

   }
   eliminarUser(){
    this.maine.eliminar(this.maine.lRegistros.id)
    .subscribe(resAvila=>{this.maine.lRegistros.id=resAvila
                           this.maine.lRegistros.usuario=resAvila
                            this.maine.lRegistros.clave=resAvila});
       console.log("Usuario eliminado")
     }

}

