import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LymphNodesComponent } from './lymph-nodes.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { UploaderModule } from '@controls/uploader/uploader.module';
import { PelvisLocalizersModule } from '../../shared/pelvis.localizers.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

@NgModule({
  declarations: [LymphNodesComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    DropdownModule,
    InfoIconModule,
    NumberInputModule,
    CheckboxModule,
    UploaderModule,
    PelvisLocalizersModule,
    FindingColumnModule,
    ReferencePictureModule
  ]
})
export class LymphNodesModule {}
