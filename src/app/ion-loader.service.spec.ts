import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class IonLoaderService {
  dismissLoader() {
    throw new Error('Method not implemented.');
  }
  simpleLoader() {
    throw new Error('Method not implemented.');
  }
  autoLoader() {
    throw new Error('Method not implemented.');
  }

  constructor(
    public loadingController: LoadingController
  ) { }

}
