import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { PericardiumVesselsComponent } from './pericardium-vessels.component';
import { PericardiumComponent } from './pericardium/pericardium.component';
import { MediastinalVesselsComponent } from './mediastinal-vessels/mediastinal-vessels.component';
import { OriginDetailsComponent } from './mediastinal-vessels/corona-anomaly/origin-details/origin-details.component';
import { DistalDetailsComponent } from './mediastinal-vessels/corona-anomaly/distal-detai;s/distal-details.component';
import { CoronaAnomalyComponent } from './mediastinal-vessels/corona-anomaly/corona-anomaly.component';
import { AortaComponent } from './mediastinal-vessels/aorta/aorta.component';
import { PulmonaryArteriesComponent } from './mediastinal-vessels/pulmonary-arteries/pulmonary-arteries.component';
import { PulmonaryVeinsComponent } from './mediastinal-vessels/pulmonary-veins/pulmonary-veins.component';
import { VenaCavaComponent } from './mediastinal-vessels/vena-cava/vena-cava.component';
import { LymphadenopathyComponent } from './mediastinum/lymphadenopathy/lymphadenopathy.component';
import { LungComponent } from './lung/lung.component';
import { UpperAbdomenComponent } from './upper-abdomen/upper-abdomen.component';
import { NeckComponent } from './neck/neck.component';
import { OsseousLesionComponent } from './osseous-lesion/osseous-lesion.component';
import { MassComponent } from './mediastinum/mass/mass.component';
import { MainCharacteristicComponent } from './mediastinum/mass/main-characteristic/main-characteristic.component';
import { DifferentialDiagnosisComponent } from './mediastinum/mass/differential-diagnosis/differential-diagnosis.component';
import { CardioLocalizersModule } from '../../shared/cardio-localizers.module';

@NgModule({
  declarations: [
    PericardiumVesselsComponent,
    PericardiumComponent,
    MediastinalVesselsComponent,
    CoronaAnomalyComponent,
    OriginDetailsComponent,
    DistalDetailsComponent,
    AortaComponent,
    PulmonaryArteriesComponent,
    PulmonaryVeinsComponent,
    VenaCavaComponent,
    LymphadenopathyComponent,
    UpperAbdomenComponent,
    NeckComponent,
    LungComponent,
    OsseousLesionComponent,
    MassComponent,
    MainCharacteristicComponent,
    DifferentialDiagnosisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    NumberInputModule,
    CheckboxModule,
    TabViewModule,
    SliderNumberTripleInputModule,
    InfoIconModule,
    DropdownModule,
    CommonImportsModule,
    FindingColumnModule,
    CardioLocalizersModule
  ]
})
export class PericardiumVesselsModule {}
