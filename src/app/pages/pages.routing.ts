
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CRegisterPage } from './cRegister/cRegister.page';
import { CursoCssPage } from './cursoCss/cursoCss.page';
import { CursohtmlPage } from './cursos/cursoHtml/cursoHtml.cursos';
import { CursosPage } from './cursos/cursos.page';
import { EstructuraHtmlPage } from './cursos/estructuraHtml/estructuraHtml.cursos';
import { EtiquetasBhtmlPage } from './cursos/etiquetasBhtml/etiquetasBhtml.cursos';
import { SintaxisHtmlPage } from './cursos/sintaxisHtml/sintaxisHtml.cursos';
import { LoginPage } from './login/login.page';
import { ActUsuarioPage } from './main/actUsuario/actUsuario.pages';
import { MainPage } from './main/main.page';
import { RegisterPage } from './register/register.page';
import { TeamPage } from './team/team.page';
import { VCorreoPage } from './vCorreo/vCorreo.page';

const routes: Routes = [
  {
    path: '',
    //component: LogoPage,
    children: [
        {  path: 'register',  component:RegisterPage}, //Se declara la clase
        {  path: 'main',      component:MainPage}, //Se declara la clase
        {  path: 'cursos',    component:CursosPage}, //Se declara la clase
        {  path: 'cRegister', component:CRegisterPage}, //Se declara la clase
        {  path: 'login',     component:LoginPage}, //Se declara la clase
        {  path: 'vCorreo',   component:VCorreoPage}, //Se declara la clase
        {  path: 'team',      component:TeamPage}, //Se declara la clase
        {  path: 'cursoCss',  component:CursoCssPage}, //Se declara la clase
        {  path: 'cursoHtml',  component:CursohtmlPage}, //Se declara la clase
        {  path: 'sintaxisHtml',  component:SintaxisHtmlPage}, //Se declara la clase
        {  path: 'estructuraHtml',  component:EstructuraHtmlPage}, //Se declara la clase
        {  path: 'EtiquetasBhtml',  component:EtiquetasBhtmlPage}, //Se declara la clase
        {  path: 'actUsuario',      component:ActUsuarioPage}, //Se declara la clase
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {} //Clase llamada PageRoutingModule
