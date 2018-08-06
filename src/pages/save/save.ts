import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';


/**
 * Generated class for the SavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {

  course = {
    'title': '',
    'price': '',
    'description' : ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dbService: FirebaseServiceProvider,
    public toastrService: ToastrServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavePage');
  }

  save(course) {
    this.dbService.save(course).then(d => {
      this.toastrService.show('Curso criado com sucesso!', 3000)
        .present();

      this.navCtrl.setRoot(HomePage);
    });
  }
}
