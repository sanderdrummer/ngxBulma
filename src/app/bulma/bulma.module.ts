import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuModalModule} from './bu-modal/bu-modal.module';
import {FieldComponent} from './bu-form/field/field.component';
import {ComboBoxComponent} from './bu-form/combo-box/combo-box.component';
import {BuFormModule} from './bu-form/bu-form.module';

@NgModule({
  imports: [
    CommonModule,
    BuModalModule,
    BuFormModule
  ],
  declarations: [],
  exports: [BuModalModule, ComboBoxComponent, FieldComponent]
})
export class BulmaModule { }
