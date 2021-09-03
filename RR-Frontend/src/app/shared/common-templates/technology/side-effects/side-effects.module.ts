import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

import { CommonImportsModule } from '../../../common-imports/common-imports.module';
import { SideEffectsFindingColumnComponent } from './side-effects-finding-column/side-effects-finding-column.component';
import { SideEffectComponent } from './side-effect/side-effect.component';

@NgModule({
  imports: [
    CommonImportsModule,
    TranslateModule,
    FindingColumnModule,
    FormsModule,
    DynamicComponentWrapperModule,
    CommonModule,
    NumberInputModule,
    DropdownModule,
    CheckboxModule
  ],
  declarations: [SideEffectsFindingColumnComponent, SideEffectComponent],
  exports: [SideEffectsFindingColumnComponent, SideEffectComponent]
})
export class SideEffectsModule {}
