import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { UploaderModule } from '@controls/uploader/uploader.module';
import { DescriptionTypeModule } from '@controls/description-type/description-type.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

import { DiagnosisComponent } from './diagnosis.component';
import { MammaSharedLocalizersModule } from '@sharedPages/mamma/localizers/mamma-shared-localizers.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FocalPointComponent } from './focal-point/focal-point.component';
import { FocusFociComponent } from './focus-foci/focus-foci.component';
import { NonSpatialRequirementComponent } from './non-spatial-requirement/non-spatial-requirement.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    DropdownModule,
    DescriptionTypeModule,
    MammaSharedLocalizersModule,
    FindingColumnModule,
    CommonImportsModule,
    NumberInputModule,
    SignalSliderModule,
    UploaderModule,
    InfoIconModule,
    ReferencePictureModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [DiagnosisComponent, FocalPointComponent, FocusFociComponent, NonSpatialRequirementComponent]
})
export class DiagnosisModule {}
