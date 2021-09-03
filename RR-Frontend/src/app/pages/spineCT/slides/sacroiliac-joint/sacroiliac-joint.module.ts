import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';

import { TranslateModule } from '@ngx-translate/core';

import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { SpineSharedLocalizersModule } from 'app/pages/shared/spine/localizers/spine-shared-localizers.module';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { SacroiliacJointComponent } from './sacroiliac-joint.component';
import { FindingComponent } from './finding/finding.component';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    CommonImportsModule,
    PresetListModule,
    DynamicComponentWrapperModule,
    SpineSharedLocalizersModule,
    DropdownModule,
    ReferencePictureModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [SacroiliacJointComponent, FindingComponent]
})
export class SacroiliacJointModule {}
