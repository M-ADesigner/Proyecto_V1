
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent
              , NotificationsComponent],
  entryComponents: [NotificationsComponent],
  imports: [BrowserModule
          , IonicModule.forRoot()
          , AppRoutingModule
          , HttpClientModule  ///Importamos el httpcliente
        ],
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
