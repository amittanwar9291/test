import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { KneeLocalizersModule } from '../../shared/knee-localizers.module';
import { DegenerationComponent } from './degeneration/degeneration.component';
import { CollateralLigamentsComponent } from './collateral-ligaments/collateral-ligaments.component';
import { CruciateLigamentComponent } from './cruciate-ligament/cruciate-ligament.component';
import { VariantComponent } from './variant/variant.component';
import { RibbonsComponent } from './ribbons.component';

import { DynamicBaseModule } from '@abstractions/dynamic-base/dynamic-base.module';

import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { UploaderModule } from '@controls/uploader/uploader.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { SliderInputModule } from '@controls/slider-input/slider-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    KneeLocalizersModule,
    MultiValueDropdownModule,
    DynamicBaseModule,
    InfoIconModule,
    CommonImportsModule,
    DynamicComponentWrapperModule,
    NumberInputModule,
    UploaderModule,
    FindingColumnModule,
    SliderInputModule,
    ReferencePictureModule
  ],
  declarations: [RibbonsComponent, VariantComponent, DegenerationComponent, CollateralLigamentsComponent, CruciateLigamentComponent]
})
export class RibbonsModule {}
