import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { SpineSharedLocalizersModule } from '@sharedPages/spine/localizers/spine-shared-localizers.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { BonesComponent } from './bones.component';
import { FractureC0Component } from './fracture/fracture-c0/fracture-c0.component';
import { FractureComponent } from './fracture/fracture.component';
import { DifferentialDiagnosisComponent } from './mass-spine/differential-diagnosis/differential-diagnosis.component';
import { FractureOsCoccygisComponent } from './fracture/fracture-os-coccygis/fracture-os-coccygis.component';
import { FractureOsSacrumComponent } from './fracture/fracture-os-sacrum/fracture-os-sacrum.component';
import { PathologyOfTheVertebralArchComponent } from './pathology-of-the-vertebral-arch/pathology-of-the-vertebral-arch.component';
import { FractureC1Component } from './fracture/fracture-c1/fracture-c1.component';
import { FractureC2Component } from './fracture/fracture-c2/fracture-c2.component';
import { FractureOtherComponent } from './fracture/fracture-other/fracture-other.component';
import { CharacterizationTwoComponent } from './mass-spine/characterization-two/characterization-two.component';
import { PosttherapeuticChangeComponent } from './posttherapeutic-change/posttherapeutic-change.component';
import { CharacterizationOneComponent } from './mass-spine/characterization-one/characterization-one.component';
import { MassSpineComponent } from './mass-spine/mass-spine.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    NumberInputModule,
    InfoIconModule,
    CommonImportsModule,
    PresetListModule,
    FindingColumnModule,
    TabViewModule,
    SpineSharedLocalizersModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    BonesComponent,
    FractureComponent,
    FractureC0Component,
    FractureC1Component,
    FractureC2Component,
    FractureOtherComponent,
    FractureOsSacrumComponent,
    FractureOsCoccygisComponent,
    PathologyOfTheVertebralArchComponent,
    PosttherapeuticChangeComponent,
    MassSpineComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialDiagnosisComponent
  ]
})
export class BonesModule {}
