import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the ToastrServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastrServiceProvider {

  constructor(public toastCtrl: ToastController) {

  }

  show(msg, duration) {

    const toast = this.toastCtrl.create({
      message: msg,
      duration: duration
    });

    return toast;
  }
}
