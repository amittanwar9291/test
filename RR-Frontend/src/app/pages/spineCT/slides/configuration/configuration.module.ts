import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { NumberInputModule } from '@controls/number-input/number-input.module';

import { SpineConfigurationFindingDropdownModule } from '../../../shared/spine/configuration/spine-configuration-finding-dropdown.module';
import { SpineSharedLocalizersModule } from '../../../shared/spine/localizers/spine-shared-localizers.module';
import { ConfigurationComponent } from './configuration.component';
import { CurvatureDisordersComponent } from './curvature-disorders/curvature-disorders.component';
import { ScoliosisComponent } from './scoliosis/scoliosis.component';
import { SpondylolisthesisComponent } from './spondylolisthesis/spondylolisthesis.component';
import { TransitionalVertebraComponent } from './transitional-vertebra/transitional-vertebra.component';
import { DropdownModule } from 'primeng/dropdown';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    CommonImportsModule,
    PresetListModule,
    SpineConfigurationFindingDropdownModule,
    NumberInputModule,
    SpineSharedLocalizersModule,
    DropdownModule,
    FindingColumnModule
  ],
  declarations: [
    ConfigurationComponent,
    CurvatureDisordersComponent,
    ScoliosisComponent,
    SpondylolisthesisComponent,
    TransitionalVertebraComponent
  ]
})
export class ConfigurationModule {}
