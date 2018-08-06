import { HomePage } from './../home/home';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  course = {
    'title': '',
    'price': '',
    'description': ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider,
    public toastrService: ToastrServiceProvider
  ) {
    this.course = this.navParams.get('course');
  }

  update(course) {
    this.firebaseService.update(course).then(d => {
      this.toastrService.show('Curso atualizado com sucesso!', 3000)
                        .present();

      this.navCtrl.setRoot(HomePage);
    });
  }

  remove(course) {
    this.firebaseService.remove(course).then(d => {
      this.toastrService.show('Curso removido com sucesso!', 3000)
                        .present();
      this.navCtrl.setRoot(HomePage);
    });
  }
}
