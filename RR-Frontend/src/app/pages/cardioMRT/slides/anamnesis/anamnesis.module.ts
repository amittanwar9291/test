import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { AnamnesisComponent } from './anamnesis.component';
import { AnamnesisTabComponent } from './anamnesis-tab/anamnesis-tab.component';
import { CoronaryHeartDiseaseComponent } from './anamnesis-tab/coronary-heart-disease/coronary-heart-disease.component';
import { ValveReplacementComponent } from './anamnesis-tab/valve-replacement/valve-replacement.component';
import { CardiovascularRiskTabComponent } from './cardiovascular-risk-tab/cardiovascular-risk-tab.component';
import { ScoreResultComponent } from './cardiovascular-risk-tab/score-result/score-result.component';

@NgModule({
  imports: [
    CommonModule,
    CommonImportsModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    MonthYearInputModule,
    NumberInputModule,
    FindingColumnModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule
  ],
  declarations: [
    AnamnesisComponent,
    AnamnesisTabComponent,
    CoronaryHeartDiseaseComponent,
    ValveReplacementComponent,
    CardiovascularRiskTabComponent,
    ScoreResultComponent
  ]
})
export class AnamnesisModule {}
