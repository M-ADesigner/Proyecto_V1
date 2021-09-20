
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CRegisterPage } from './cRegister/cRegister.page';
import { LoginPage } from './login/login.page';
import { MainPage } from './main/main.page';
import { RegisterPage } from './register/register.page';
import { ShopPage } from './shop/shop.page';
import { TeamPage } from './team/team.page';
import { VCorreoPage } from './vCorreo/vCorreo.page';

const routes: Routes = [
  {
    path: '',
    //component: LogoPage,
    children: [
        {  path: 'register',component:    RegisterPage,         }, //Se declara la clase
        {  path: 'main',component:        MainPage,                 }, //Se declara la clase
        {  path: 'shop',component:        ShopPage,                 }, //Se declara la clase
        {  path: 'cRegister',component:   CRegisterPage,                 }, //Se declara la clase
        {  path: 'login',component:       LoginPage,                 }, //Se declara la clase
        {  path: 'vCorreo',component:     VCorreoPage,                 }, //Se declara la clase
        {  path: 'team',component:        TeamPage,                 }, //Se declara la clase
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {} //Clase llamada PageRoutingModule
