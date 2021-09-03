import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { CommonImportsModule } from '../../../common-imports/common-imports.module';

import { ProtocolsFindingColumnComponent } from '@commonTemplates/technology/acquisitions/protocols-finding-column/protocols-finding-column.component';
import { CardsNavigationModule } from '@commonTemplates/technology/cards-navigation/cards-navigation.module';

import { AcquisitionsFindingColumnComponent } from '@commonTemplates/technology/acquisitions/acquisitions-finding-column/acquisitions-finding-column.component';

import { ThoraxCTAcquisitionsComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/thoraxCT-acquisitions/thoraxCT-acquisitions.component';
import { FirstColComponent as ThoraxCTFirstColComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/thoraxCT-acquisitions/first-col/first-col.component';
import { SecondColComponent as ThoraxCTSecondColComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/thoraxCT-acquisitions/second-col/second-col.component';

import { AngiographyCTAcquisitionsComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/angiographyCT-acquisitions/angiographyCT-acquisitions.component';
import { FirstColComponent as AngiographyCTFirstColComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/angiographyCT-acquisitions/first-col/first-col.component';
import { SecondColComponent as AngiographyCTSecondColComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/angiographyCT-acquisitions/second-col/second-col.component';

import { SpineCTAcquisitionsComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/spineCT-acquisitions/spineCT-acquisitions.component';
import { FirstColComponent as SpineCTFirstColComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/spineCT-acquisitions/first-col/first-col.component';
import { SecondColComponent as SpineCTSecondColComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/spineCT-acquisitions/second-col/second-col.component';

import { HeadCTAcquisitionsComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/headCT-acquisitions/headCT-acquisitions.component';
import { FirstColComponent as HeadCTFirstColComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/headCT-acquisitions/first-col/first-col.component';
import { SecondColComponent as HeadCTSecondColComponent } from '@commonTemplates/technology/acquisitions/acquisition-templates/headCT-acquisitions/second-col/second-col.component';

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
    NumberInputModule,
    TabViewModule,
    CardsNavigationModule
  ],
  declarations: [
    AcquisitionsFindingColumnComponent,
    ProtocolsFindingColumnComponent,
    ThoraxCTAcquisitionsComponent,
    ThoraxCTFirstColComponent,
    ThoraxCTSecondColComponent,
    AngiographyCTAcquisitionsComponent,
    AngiographyCTFirstColComponent,
    AngiographyCTSecondColComponent,
    SpineCTAcquisitionsComponent,
    SpineCTFirstColComponent,
    SpineCTSecondColComponent,
    HeadCTAcquisitionsComponent,
    HeadCTFirstColComponent,
    HeadCTSecondColComponent
  ],
  exports: [
    ProtocolsFindingColumnComponent,
    AcquisitionsFindingColumnComponent,
    ThoraxCTAcquisitionsComponent,
    AngiographyCTAcquisitionsComponent,
    SpineCTAcquisitionsComponent,
    HeadCTAcquisitionsComponent
  ]
})
export class AcquisitionsModule {}
