import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list('courses').snapshotChanges().map(data => {
      return data.map(d => ({key: d.key, ...d.payload.val()}));
    });
  }

  save(course: any) {
    this.db.list('courses')
           .push(course)
           .then(r => console.log(r));
  }

}
