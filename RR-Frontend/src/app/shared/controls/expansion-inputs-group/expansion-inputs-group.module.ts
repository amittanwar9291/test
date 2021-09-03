import { NgModule } from '@angular/core';

import { ExpansionInputsGroupComponent } from '@controls/expansion-inputs-group/expansion-inputs-group.component';
import { FormsModule } from '@angular/forms';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { CommonImportsModule } from '../../common-imports/common-imports.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [FormsModule, NumberInputModule, CommonImportsModule, TranslateModule, CommonModule],
  declarations: [ExpansionInputsGroupComponent],
  exports: [ExpansionInputsGroupComponent]
})
export class ExpansionInputsGroupModule {}
