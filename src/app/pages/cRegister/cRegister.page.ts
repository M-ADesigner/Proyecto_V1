import { Component } from '@angular/core';

@Component({
  selector: 'app-cRegister',
  templateUrl: 'cRegister.page.html',
  styleUrls: ['cRegister.page.scss'],
})
export class CRegisterPage {
  progress = 0;
  constructor() {
    setInterval( () => {
      this.progress += .1;
      }, 1000 );
  }
}
