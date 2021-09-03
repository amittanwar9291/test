import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { CommonImportsModule } from '../../../common-imports/common-imports.module';

import { SequencesFindingColumnComponent } from './sequences-finding-column/sequences-finding-column.component';
import { SequencesBaseTemplateComponent } from './sequence-templates/sequences-base-template/sequences-base-template.component';
import { KneeMRTSequencesComponent } from './sequence-templates/kneeMRT-sequences/kneeMRT-sequences.component';
import { ShoulderMRTSequencesComponent } from './sequence-templates/shoulderMRT-sequences/shoulderMRT-sequences.component';
import { MammaMRTSequencesComponent } from './sequence-templates/mammaMRT-sequences/mammaMRT-sequences.component';
import { CardioMRTSequencesComponent } from './sequence-templates/cardioMRT-sequences/cardioMRT-sequences.component';
import { SpineMRTSequencesComponent } from './sequence-templates/spineMRT-sequences/spineMRT-sequences.component';
import { PelvisMRTSequencesComponent } from './sequence-templates/pelvisMRT-sequences/pelvisMRT-sequences.component';
import { ElbowMRTSequencesComponent } from './sequence-templates/elbowMRT-sequences/elbowMRT-sequences.component';
import { FeetMRTSequencesComponent } from './sequence-templates/feetMRT-sequences/feetMRT-sequences.component';
import { AbdomenMRTSequencesComponent } from '@commonTemplates/technology/sequences/sequence-templates/abdomenMRT-sequences/abdomenMRT-sequences.component';
import { HandMRTSequencesComponent } from '@commonTemplates/technology/sequences/sequence-templates/handMRT-sequences/handMRT-sequences.component';
import { HeadMRTSequencesComponent } from '@commonTemplates/technology/sequences/sequence-templates/headMRT-sequences/headMRT-sequences.component';
import { HipMRTSequencesComponent } from '@commonTemplates/technology/sequences/sequence-templates/hipMRT-sequences/hipMRT-sequences.component';
import { AngiographyMRTMethodsComponent } from '@commonTemplates/technology/sequences/sequence-templates/angiographyMRT-methods/angiographyMRT-methods.component';
import { ThoraxMRTSequencesComponent } from './sequence-templates/thoraxMRT-sequences/thoraxMRT-sequences.component';
import { NeckMRTSequencesComponent } from './sequence-templates/neckMRT-sequences/neckMRT-sequences.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    RadioButtonModule,
    CheckboxModule,
    CommonImportsModule,
    TranslateModule,
    FindingColumnModule,
    NumberInputModule
  ],
  declarations: [
    SequencesFindingColumnComponent,
    SequencesBaseTemplateComponent,
    CardioMRTSequencesComponent,
    KneeMRTSequencesComponent,
    PelvisMRTSequencesComponent,
    ShoulderMRTSequencesComponent,
    MammaMRTSequencesComponent,
    SpineMRTSequencesComponent,
    ElbowMRTSequencesComponent,
    FeetMRTSequencesComponent,
    HandMRTSequencesComponent,
    HeadMRTSequencesComponent,
    HipMRTSequencesComponent,
    AbdomenMRTSequencesComponent,
    AngiographyMRTMethodsComponent,
    ThoraxMRTSequencesComponent,
    NeckMRTSequencesComponent
  ],
  exports: [
    SequencesFindingColumnComponent,
    SequencesBaseTemplateComponent,
    CardioMRTSequencesComponent,
    KneeMRTSequencesComponent,
    PelvisMRTSequencesComponent,
    ShoulderMRTSequencesComponent,
    MammaMRTSequencesComponent,
    SpineMRTSequencesComponent,
    ElbowMRTSequencesComponent,
    FeetMRTSequencesComponent,
    HandMRTSequencesComponent,
    HeadMRTSequencesComponent,
    HipMRTSequencesComponent,
    AbdomenMRTSequencesComponent,
    AngiographyMRTMethodsComponent,
    ThoraxMRTSequencesComponent,
    NeckMRTSequencesComponent
  ]
})
export class SequencesModule {}
