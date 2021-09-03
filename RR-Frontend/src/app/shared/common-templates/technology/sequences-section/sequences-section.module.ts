import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { ResetButtonModule } from '@controls/reset-button/reset-button.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { CommonImportsModule } from '../../../common-imports/common-imports.module';

import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

import { SequencesSectionComponent } from '@commonTemplates/technology/sequences-section/sequences-section.component';
import { SequencesModule } from '@commonTemplates/technology/sequences/sequences.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    DropdownModule,
    CheckboxModule,
    NumberInputModule,
    ResetButtonModule,
    SequencesModule
  ],
  exports: [SequencesSectionComponent],
  declarations: [SequencesSectionComponent]
})
export class SequencesSectionModule {}
