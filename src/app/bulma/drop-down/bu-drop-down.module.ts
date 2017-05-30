import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropDownComponent} from './drop-down.component';
import {LayoutModule} from '../shared/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [DropDownComponent],
  exports: [DropDownComponent]

})
export class BuDropDownModule {
}
