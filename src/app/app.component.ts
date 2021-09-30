import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'HTML5  ',       url:'/pages/cursos',   icon: 'heart' },
    { title: 'Css  ',         url:'/pages/cursoCss', icon: 'extension-puzzle' }
  ];
  constructor() {}
}
