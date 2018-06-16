import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { SavePage } from '../pages/save/save';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SavePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDDHdOLJaSD7FGK7594_l13xA3_RAVi3zY",
      authDomain: "ionic3-firebase-8675a.firebaseapp.com",
      databaseURL: "https://ionic3-firebase-8675a.firebaseio.com",
      projectId: "ionic3-firebase-8675a",
      storageBucket: "ionic3-firebase-8675a.appspot.com",
      messagingSenderId: "746304527761"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SavePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
