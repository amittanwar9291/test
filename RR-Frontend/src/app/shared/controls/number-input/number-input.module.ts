import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NumberInputComponent } from '@controls/number-input/number-input.component';
import { CommonImportsModule } from '../../common-imports/common-imports.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';

@NgModule({
  imports: [CommonModule, FormsModule, CommonImportsModule, InfoIconModule],
  declarations: [NumberInputComponent],
  exports: [NumberInputComponent]
})
export class NumberInputModule {}
