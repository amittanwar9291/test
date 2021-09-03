import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { FindingsVentriclesComponent } from './findings-ventricles.component';
import { MeasuredRvAtriumsComponent } from './measured-rv-atriums/measured-rv-atriums.component';
import { MeasuredValuesLvComponent } from './measured-values-lv/measured-values-lv.component';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { UploaderModule } from '@controls/uploader/uploader.module';
import { UploaderNgWrapperModule } from '@controls/uploader-ng-wrapper/uploader-ng-wrapper.module';
import { UploaderNgWrapperComponent } from '@controls/uploader-ng-wrapper/uploader-ng-wrapper.component';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

@NgModule({
  imports: [
    CommonModule,
    CommonImportsModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    RadioButtonModule,
    NumberInputModule,
    TabViewModule,
    CheckboxModule,
    UploaderNgWrapperModule,
    ReferencePictureModule
  ],
  declarations: [FindingsVentriclesComponent, MeasuredRvAtriumsComponent, MeasuredValuesLvComponent]
})
export class FindingsVentriclesModule {}
