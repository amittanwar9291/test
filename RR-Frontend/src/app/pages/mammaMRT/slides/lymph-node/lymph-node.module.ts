import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { NumberInputModule } from '@controls/number-input/number-input.module';

import { LymphNodeComponent } from './lymph-node.component';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { MammaSharedLocalizersModule } from '../../../shared/mamma/localizers/mamma-shared-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    NumberInputModule,
    CommonImportsModule,
    MammaSharedLocalizersModule
  ],
  declarations: [LymphNodeComponent]
})
export class LymphNodeModule {}
