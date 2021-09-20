import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CRegisterPage } from "./cRegister/cRegister.page";
import { LoginPage } from "./login/login.page";
import { MainPage } from "./main/main.page";
import { PagesRoutingModule } from "./pages.routing";
import { RegisterPage } from "./register/register.page";
import { ShopPage } from "./shop/shop.page";
import { TeamPage } from "./team/team.page";
import { VCorreoPage } from "./vCorreo/vCorreo.page";


@NgModule({
    //se declaran todas las declaraciones de los modulos
    declarations: [RegisterPage,
                   MainPage,
                   ShopPage,
                   CRegisterPage,
                   LoginPage,
                   VCorreoPage,
                   TeamPage],  /// Se desclara la clase
    entryComponents: [],
    imports: [
        //BrowserModule,
         IonicModule.forRoot()
         ,PagesRoutingModule  ///Se importal el modulo  de routing
        ,FormsModule
    ],
    //providers: [],
   // bootstrap: [AppComponent],,
  })
  export class PagesModule {} /// clase llama pageModule

