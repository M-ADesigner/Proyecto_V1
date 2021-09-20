import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login',         url:        '/pages/login', icon: 'mail' },
    { title: 'Registrar',     url:        '/pages/register', icon: 'mail' },
    { title: 'confirrmacionCorreo  ',url: '/pages/vCorreo', icon: 'mail' },
    { title: 'confirmacion',  url:        '/pages/cRegister', icon: 'mail' },
    { title: 'Usuario  ',     url:        '/pages/main', icon: 'mail' },
    { title: 'Carro  ',       url:        '/pages/shop', icon: 'mail' },
    { title: 'team  ',        url:        '/pages/team', icon: 'mail' },

  ];
  constructor() {}
}
