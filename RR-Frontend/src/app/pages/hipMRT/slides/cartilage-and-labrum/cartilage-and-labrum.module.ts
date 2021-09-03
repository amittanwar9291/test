import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import {
  SideComponent,
  LabrumComponent,
  CartilageLesionComponent,
  FemoroacetabularImpingmentComponent,
  CartilageAndLabrumComponent
} from '.';
import { HipLocalizersModule } from '../../shared/hip-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    TranslateModule,
    PresetListModule,
    CommonImportsModule,
    DynamicComponentWrapperModule,
    NumberInputModule,
    HipLocalizersModule,
    FindingColumnModule
  ],
  declarations: [CartilageAndLabrumComponent, SideComponent, LabrumComponent, CartilageLesionComponent, FemoroacetabularImpingmentComponent]
})
export class CartilageAndLabrumModule {}
