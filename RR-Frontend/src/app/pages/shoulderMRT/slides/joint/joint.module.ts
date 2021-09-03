import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { UploaderModule } from '@controls/uploader/uploader.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

import { JointComponent } from './joint.component';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { ArticularEffusionComponent } from './articular-effusion/articular-effusion.component';
import { CapsuleComponent } from './capsule/capsule.component';
import { BursitisComponent } from './bursitis/bursitis.component';
import { FreeJointBodyComponent } from './free-joint-body/free-joint-body.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    DynamicComponentWrapperModule,
    NumberInputModule,
    CommonImportsModule,
    FindingColumnModule,
    UploaderModule,
    ReferencePictureModule
  ],
  declarations: [JointComponent, ArticularEffusionComponent, CapsuleComponent, BursitisComponent, FreeJointBodyComponent]
})
export class JointModule {}
