import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';

import { DynamicContainerBaseComponent } from '@abstractions/dynamic-base/dynamic-container-base.component';
import { DynamicBaseComponent } from '@abstractions/dynamic-base/dynamic-base.component';

import { MultiValueDropdownComponent } from '@controls/multi-value-dropdown/multi-value-dropdown.component';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { UploaderModule } from '@controls/uploader/uploader.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { BonesComponent } from './bones.component';
import { FractureComponent } from './fracture/fracture.component';
import { PostTraumaticComponent } from './post-traumatic/post-traumatic.component';
import { BoneMarrowEdemaComponent } from './bone-marrow-edema/bone-marrow-edema.component';
import { CharacterizationOneComponent as BoneMorrowEdemaTab1 } from './bone-marrow-edema/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as BoneMorrowEdemaTab2 } from './bone-marrow-edema/characterization-two/characterization-two.component';
import { HumerusNecrosisComponent } from './humerus-necrosis/humerus-necrosis.component';
import { DegenerationComponent } from './degeneration/degeneration.component';
import { TumorComponent } from './tumor/tumor.component';
import { CharacterizationOneComponent as TumorTab1 } from './tumor/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as TumorTab2 } from './tumor/characterization-two/characterization-two.component';
import { CharacterizationThreeComponent as TumorTab3 } from './tumor/characterization-three/characterization-three.component';
import { CongenitalComponent } from './congenital/congenital.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    CheckboxModule,
    DropdownModule,
    RadioButtonModule,
    ScrollPanelModule,
    SignalSliderModule,
    CommonImportsModule,
    NumberInputModule,
    FindingColumnModule,
    TabViewModule,
    UploaderModule,
    ReferencePictureModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    BonesComponent,
    FractureComponent,
    PostTraumaticComponent,
    BoneMarrowEdemaComponent,
    BoneMorrowEdemaTab1,
    BoneMorrowEdemaTab2,
    HumerusNecrosisComponent,
    DegenerationComponent,
    TumorComponent,
    TumorTab1,
    TumorTab2,
    TumorTab3,
    CongenitalComponent
  ],
  entryComponents: [MultiValueDropdownComponent, DynamicContainerBaseComponent, DynamicBaseComponent]
})
export class BonesModule {}
