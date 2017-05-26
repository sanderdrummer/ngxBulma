import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuModalComponent} from './bu-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BuModalComponent
  ],
  declarations: [BuModalComponent]
})
export class BuModalModule {
}
