import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {
  private dbRef;

  constructor(public db: AngularFireDatabase) {
    this.dbRef = this.db.list('courses');
  }

  getAll() {
    return this.dbRef.snapshotChanges().map(data => {
      return data.map(d => ({key: d.key, ...d.payload.val()}));
    });
  }

  save(course: any) {
    return this.dbRef
           .push(course);
  }

  update(course) {
    return this.dbRef
           .update(course.key, course);
  }

  remove(course) {
    return this.dbRef
           .remove(course.key);
  }

}
