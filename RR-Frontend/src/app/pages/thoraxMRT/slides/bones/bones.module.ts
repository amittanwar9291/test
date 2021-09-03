import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonesComponent } from './bones.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TranslateModule } from '@ngx-translate/core';
import { SpineSharedLocalizersModule } from '@sharedPages/spine/localizers/spine-shared-localizers.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { ClavicleFractureComponent } from './clavicle-fracture/clavicle-fracture.component';
import { ScapularFractureComponent } from './scapular-fracture/scapular-fracture.component';
import { RibFractureComponent } from './rib-fracture/rib-fracture.component';
import { SternalFractureComponent } from './sternal-fracture/sternal-fracture.component';
import { SpinalFractureComponent } from './spinal-fracture/spinal-fracture.component';
import { MassTabsComponent } from './mass-tabs/mass-tabs.component';
import { CharacterizationOneTabComponent } from './mass-tabs/characterization-one-tab/characterization-one-tab.component';
import { CharacterizationTwoTabComponent } from './mass-tabs/characterization-two-tab/characterization-two-tab.component';
import { CharacterizationThreeTabComponent } from './mass-tabs/characterization-three-tab/characterization-three-tab.component';
import { DifferentialDiagnosisTabComponent } from './mass-tabs/differential-diagnosis-tab/differential-diagnosis-tab.component';
import { TabViewModule } from 'primeng/tabview';
import { ThoraxCTLocalizersModule } from '../../../thoraxCT/shared/thoraxCT-localizers.module';
import { CheckboxModule } from 'primeng/checkbox';
import { ThoraxSharedLocalizersModule } from '@sharedPages/thorax/localizers/thorax-shared-localizers.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

@NgModule({
  declarations: [
    BonesComponent,
    ClavicleFractureComponent,
    ScapularFractureComponent,
    RibFractureComponent,
    SternalFractureComponent,
    SpinalFractureComponent,
    MassTabsComponent,
    CharacterizationOneTabComponent,
    CharacterizationTwoTabComponent,
    CharacterizationThreeTabComponent,
    DifferentialDiagnosisTabComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    RadioButtonModule,
    TranslateModule,
    SpineSharedLocalizersModule,
    FindingColumnModule,
    TabViewModule,
    ThoraxCTLocalizersModule,
    CheckboxModule,
    ThoraxSharedLocalizersModule,
    DifferentialDiagnosisDropdownModule,
    NumberInputModule,
    SignalSliderModule,
    ReferencePictureModule
  ]
})
export class BonesModule {}
