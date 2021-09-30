import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class PagesService {
    lRegistros:any=[
    ]
      api_url = 'http://localhost:3000/usuario';
      constructor(public httpAvila: HttpClient){
          console.log('Se a conectado correctamente al servidor');
      }

    listar(){
      ///console.log("Listar **************")
      return this.httpAvila.get(this.api_url)
    }


    agregar(userParametro: String, passwordParametro: String){
          console.log('conectando **************',userParametro,passwordParametro);
          return this.httpAvila.post(this.api_url,
              {usuario:userParametro,clave:passwordParametro});
    }

     actualizar(id: string,userParametro: String, passwordParametro: String){
      return this.httpAvila.put(this.api_url+'/' +id,
          {usuario:userParametro,clave:passwordParametro} );

     }
    eliminar(id: string){
        return this.httpAvila.delete(this.api_url +'/' +id);
    }

  }
