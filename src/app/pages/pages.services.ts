import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class PagesService {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      api_url = 'http://localhost:3000/usuario';


      // eslint-disable-next-line @typescript-eslint/naming-convention
      constructor(public httpAvila: HttpClient){
          console.log('Se a conectado correctamente al servidor');
      }

    // eslint-disable-next-line @typescript-eslint/ban-types
    agregar(userParametro: String, passwordParametro: String){
          console.log('conectando **************',userParametro,passwordParametro);
          return this.httpAvila.post(this.api_url,
              {user:userParametro,clave:passwordParametro});
    }


  //*---------------------------------------------------------------------------------*//
    eliminar(id: string){
        return this.httpAvila.delete(this.api_url +'/' +id);
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    actualizar(id: string,userParametro: String, passwordParametro: String){
        return this.httpAvila.put(this.api_url+'/' +id,
            {email:userParametro,clave:passwordParametro} );
    }
  }
