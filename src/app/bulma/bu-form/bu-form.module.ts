import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { FieldComponent } from './field/field.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BuDropDownModule} from '../drop-down/bu-drop-down.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BuDropDownModule
  ],
  declarations: [ComboBoxComponent, FieldComponent],
  exports: [ComboBoxComponent, FieldComponent]

})
export class BuFormModule { }
