import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavePage } from './save';

@NgModule({
  declarations: [
    SavePage,
  ],
  imports: [
    IonicPageModule.forChild(SavePage),
  ],
})
export class SavePageModule {}
