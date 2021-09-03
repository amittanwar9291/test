import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { UploaderModule } from '@controls/uploader/uploader.module';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { AtrialSeptalDefectComponent } from './congenital-heart-disease/atrial-septal-defect/atrial-septal-defect.component';
import { CongenitalHeartDiseaseComponent } from './congenital-heart-disease/congenital-heart-disease.component';
import { EbsteinsAnomalyComponent } from './congenital-heart-disease/ebsteins-anomaly/ebsteins-anomaly.component';
import { FlapsComponent } from './flaps.component';
import { HeartValvesComponent } from './heart-valves/heart-valves.component';
import { AortaAscendensComponent } from './measured-values/aorta-ascendens/aorta-ascendens.component';
import { PulmonaryArteryComponent } from './measured-values/pulmonary-artery/pulmonary-artery.component';
import { MitralValveComponent } from './measured-values/mitral-valve/mitral-valve.component';
import { MeasuredValuesComponent } from './measured-values/measured-values.component';
import { OneChamberHeartComponent } from './congenital-heart-disease/one-chamber-heart/one-chamber-heart.component';
import { TetralogyOfFallotComponent } from './congenital-heart-disease/tetralogy-of-fallot/tetralogy-of-fallot.component';
import { TranspositionOfTheGreatArteriesComponent } from './congenital-heart-disease/transposition-of-the-great-arteries/transposition-of-the-great-arteries.component';
import { AorticValveComponent } from './heart-valves/aortic-valve/aortic-valve.component';
import { MitralValveComponent as HeartValvesMitralValveComponent } from './heart-valves/mitral-valve/mitral-valve.component';
import { PulmonaryValveComponent } from './heart-valves/pulmonary-valve/pulmonary-valve.component';
import { TricuspidValveComponent } from './heart-valves/tricuspid-valve/tricuspid-valve.component';
import { VentricleSeptalDefectComponent } from './congenital-heart-disease/ventricle-septal-defect/ventricle-septal-defect.component';
import { UploaderNgWrapperModule } from '@controls/uploader-ng-wrapper/uploader-ng-wrapper.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    RadioButtonModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    TabViewModule,
    UploaderModule,
    FindingColumnModule,
    DropdownModule,
    UploaderNgWrapperModule
  ],
  declarations: [
    FlapsComponent,
    AortaAscendensComponent,
    PulmonaryArteryComponent,
    MitralValveComponent,
    MeasuredValuesComponent,
    HeartValvesComponent,
    CongenitalHeartDiseaseComponent,
    AorticValveComponent,
    HeartValvesMitralValveComponent,
    PulmonaryValveComponent,
    TricuspidValveComponent,
    AtrialSeptalDefectComponent,
    VentricleSeptalDefectComponent,
    TetralogyOfFallotComponent,
    TranspositionOfTheGreatArteriesComponent,
    EbsteinsAnomalyComponent,
    OneChamberHeartComponent
  ]
})
export class FlapsModule {}
