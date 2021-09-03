import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';

import { GenderSelectComponent } from './gender-select.component';
import { CommonImportsModule } from '../../../common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, FormsModule, CommonImportsModule, TranslateModule, RadioButtonModule],
  declarations: [GenderSelectComponent],
  exports: [GenderSelectComponent]
})
export class GenderSelectModule {}
