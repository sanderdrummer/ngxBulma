import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { FieldComponent } from './field/field.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ComboBoxComponent, FieldComponent],
  exports: [ComboBoxComponent, FieldComponent]

})
export class BuFormModule { }
