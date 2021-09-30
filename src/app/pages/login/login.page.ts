import { Component } from "@angular/core";
import { PagesService } from "../pages.services";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(public miServicio: PagesService) { }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    usuario={
      nombre:'',
      clave:'',
    };


    login(){
      console.log('Se a registrado correctamente');
      this.miServicio.agregar(this.usuario.nombre,
                               this.usuario.clave)
      .subscribe(respuesta=>{
        console.log('Ejecutando usuario',respuesta);
      });
    }

}
