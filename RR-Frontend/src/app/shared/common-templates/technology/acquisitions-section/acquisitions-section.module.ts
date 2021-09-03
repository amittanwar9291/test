import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { ResetButtonModule } from '@controls/reset-button/reset-button.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { CommonImportsModule } from '../../../common-imports/common-imports.module';

import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

import { AcquisitionsSectionComponent } from '@commonTemplates/technology/acquisitions-section/acquisitions-section.component';
import { AcquisitionsModule } from '@commonTemplates/technology/acquisitions/acquisitions.module';

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
    AcquisitionsModule
  ],
  exports: [AcquisitionsSectionComponent],
  declarations: [AcquisitionsSectionComponent]
})
export class AcquisitionsSectionModule {}
