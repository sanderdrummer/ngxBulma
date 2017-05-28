import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuModalModule} from './bu-modal/bu-modal.module';

@NgModule({
  imports: [
    CommonModule,
    BuModalModule
  ],
  declarations: [],
  exports: [BuModalModule]
})
export class BulmaModule { }
