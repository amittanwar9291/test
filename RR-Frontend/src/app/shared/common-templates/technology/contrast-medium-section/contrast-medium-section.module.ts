import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { ContrastMediumSectionComponent } from '@commonTemplates/technology/contrast-medium-section/contrast-medium-section.component';
import { CommonImportsModule } from '../../../common-imports/common-imports.module';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SideEffectsModule } from '@commonTemplates/technology/side-effects/side-effects.module';

@NgModule({
  declarations: [ContrastMediumSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    DropdownModule,
    CheckboxModule,
    NumberInputModule,
    SideEffectsModule
  ],
  exports: [ContrastMediumSectionComponent]
})
export class ContrastMediumSectionModule {}
