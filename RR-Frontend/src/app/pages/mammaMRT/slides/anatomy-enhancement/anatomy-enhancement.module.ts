import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';

import { NumberInputModule } from '@controls/number-input/number-input.module';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { AnatomyEnhancementComponent } from './anatomy-enhancement.component';
import { MammaSharedLocalizersModule } from '../../../shared/mamma/localizers/mamma-shared-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MammaSharedLocalizersModule,
    RadioButtonModule,
    TabViewModule,
    DropdownModule,
    TranslateModule,
    NumberInputModule,
    CommonImportsModule,
    CheckboxModule
  ],
  declarations: [AnatomyEnhancementComponent]
})
export class AnatomyEnhancementModule {}
