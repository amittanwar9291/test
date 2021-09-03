import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { SpineLocalizersModule } from '../../shared/spine-localizers.module';
import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';

import { ConfigurationComponent } from './configuration.component';
import { DivergenceComponent } from './divergence/divergence.component';
import { SpondylolisthesisComponent } from './spondylolisthesis/spondylolisthesis.component';
import { ScoliosisComponent } from './scoliosis/scoliosis.component';
import { TransitionVariantComponent } from './transition-variant/transition-variant.component';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { SpineConfigurationFindingDropdownModule } from '../../../shared/spine/configuration/spine-configuration-finding-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    SpineLocalizersModule,
    NumberInputModule,
    DynamicComponentWrapperModule,
    InfoIconModule,
    CommonImportsModule,
    SpineConfigurationFindingDropdownModule,
    FindingColumnModule
  ],
  declarations: [ConfigurationComponent, DivergenceComponent, SpondylolisthesisComponent, ScoliosisComponent, TransitionVariantComponent]
})
export class ConfigurationModule {}
