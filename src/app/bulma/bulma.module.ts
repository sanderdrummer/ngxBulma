import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuModalModule} from './bu-modal/bu-modal.module';
import {FieldComponent} from './bu-form/field/field.component';
import {ComboBoxComponent} from './bu-form/combo-box/combo-box.component';
import {BuFormModule} from './bu-form/bu-form.module';
import {StringFilterService} from './bu-form/shared/string-filter.service';
import {DropDownComponent} from './drop-down/drop-down.component';
import {BuDropDownModule} from './drop-down/bu-drop-down.module';

@NgModule({
  imports: [
    CommonModule,
    BuModalModule,
    BuFormModule,
    BuDropDownModule
  ],
  declarations: [],
  exports: [BuModalModule, ComboBoxComponent, FieldComponent, DropDownComponent],
  providers: [StringFilterService]
})
export class BulmaModule { }
