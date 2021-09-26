import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class IonLoaderService {

  constructor(
    public loadingController: LoadingController
  ) { }

  dismissLoader() {
    throw new Error('Method not implemented.');
  }
  simpleLoader() {
    throw new Error('Method not implemented.');
  }
  autoLoader() {
    throw new Error('Method not implemented.');
  }


}
