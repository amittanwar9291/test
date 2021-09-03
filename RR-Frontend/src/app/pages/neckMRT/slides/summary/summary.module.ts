import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { SummaryComponent } from './summary.component';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { TnmClassificationComponent } from './tnm-classification/tnm-classification.component';

@NgModule({
  declarations: [SummaryComponent, TnmClassificationComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    CommonImportsModule,
    DropdownModule,
    FindingColumnModule
  ]
})
export class SummaryModule {}
