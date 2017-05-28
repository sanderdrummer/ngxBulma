import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComboBoxComponent, FieldComponent],
  exports: [ComboBoxComponent, FieldComponent]

})
export class BuFormModule { }
