import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SavePage } from '../save/save';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private courses;

  constructor(
    public navCtrl: NavController,
    public dbService: FirebaseServiceProvider
  ) {
    this.courses = this.dbService.getAll();
  }

  add(){
      this.navCtrl.push(SavePage);
  }

  goToSingle(course) {
    this.navCtrl.push(EditPage, {
      'course': course
    });
  }
}
