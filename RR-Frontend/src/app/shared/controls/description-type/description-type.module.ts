import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RadioButtonModule } from 'primeng/radiobutton';

import { CommonImportsModule } from '../../common-imports/common-imports.module';
import { DescriptionTypeComponent } from './description-type.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, RadioButtonModule, FormsModule, CommonImportsModule, TranslateModule],
  declarations: [DescriptionTypeComponent],
  exports: [DescriptionTypeComponent]
})
export class DescriptionTypeModule {}
