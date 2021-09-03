import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { DynamicContainerBaseComponent } from '@abstractions/dynamic-base/dynamic-container-base.component';
import { DynamicBaseComponent } from '@abstractions/dynamic-base/dynamic-base.component';

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { MultiValueDropdownComponent } from '@controls/multi-value-dropdown/multi-value-dropdown.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { UploaderModule } from '@controls/uploader/uploader.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { RotatorComponent } from './rotator.component';
import { AcJointComponent } from './ac-joint/ac-joint.component';
import { RotatorCuffComponent } from './rotator-cuff/rotator-cuff.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DropdownModule,
    RadioButtonModule,
    CheckboxModule,
    CommonImportsModule,
    NumberInputModule,
    InfoIconModule,
    FindingColumnModule,
    UploaderModule,
    ReferencePictureModule
  ],
  declarations: [RotatorComponent, AcJointComponent, RotatorCuffComponent],
  entryComponents: [MultiValueDropdownComponent, DynamicContainerBaseComponent, DynamicBaseComponent]
})
export class RotatorModule {}
