import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { LungParenchymaComponent } from './lung-parenchyma.component';
import { CysticFibrosisComponent } from './cystic-fibrosis/cystic-fibrosis.component';
import { LungParenchymaPathologyComponent } from './lung-parenchyma-pathology/lung-parenchyma-pathology.component';

import { DropdownModule } from 'primeng/dropdown';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { ThoraxSharedLocalizersModule } from '@sharedPages/thorax/localizers/thorax-shared-localizers.module';
import { ThoraxMrtSharedModule } from '../../shared/thorax-mrt-shared.module';
@NgModule({
  declarations: [LungParenchymaComponent, LungParenchymaPathologyComponent, CysticFibrosisComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    PresetListModule,
    CommonImportsModule,
    InfoIconModule,
    NumberInputModule,
    TabViewModule,
    DropdownModule,
    FindingColumnModule,
    ReferencePictureModule,
    DifferentialDiagnosisDropdownModule,
    ThoraxSharedLocalizersModule,
    ThoraxMrtSharedModule
  ]
})
export class LungParenchymaModule {}
