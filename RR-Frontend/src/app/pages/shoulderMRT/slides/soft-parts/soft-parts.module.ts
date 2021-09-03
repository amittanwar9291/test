import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';

import { SoftPartsComponent } from './soft-parts.component';
import { LymphNodesComponent } from './lymph-nodes/lymph-nodes.component';
import { MusculatureComponent } from './musculature/musculature.component';
import { SternoclavicularJointComponent } from './sternoclavicular-joint/sternoclavicular-joint.component';
import { PleuraComponent } from './pleura/pleura.component';
import { MuscularHaematomaComponent } from './musculature/muscular-haematoma/muscular-haematoma.component';
import { MuscleLesionComponent } from './musculature/muscle-lesion/muscle-lesion.component';
import { OtherFindingsComponent } from './musculature/other-findings/other-findings.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    ScrollPanelModule,
    FindingColumnModule,
    NumberInputModule,
    InfoIconModule,
    CommonImportsModule,
    TabViewModule,
    SliderNumberTripleInputModule
  ],
  declarations: [
    SoftPartsComponent,
    LymphNodesComponent,
    MusculatureComponent,
    SternoclavicularJointComponent,
    PleuraComponent,
    MuscularHaematomaComponent,
    MuscleLesionComponent,
    OtherFindingsComponent
  ]
})
export class SoftPartsModule {}
