import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';

import { RadioButtonModule } from 'primeng/radiobutton';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { SpineConfigurationFindingDropdownComponent } from './spine-configuration-finding-dropdown.component';

@NgModule({
  imports: [FormsModule, TranslateModule, DynamicComponentWrapperModule, RadioButtonModule, CommonImportsModule],
  declarations: [SpineConfigurationFindingDropdownComponent],
  providers: [],
  exports: [SpineConfigurationFindingDropdownComponent]
})
export class SpineConfigurationFindingDropdownModule {}
