import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { RightVentricleComponent } from './right-ventricle.component';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, PresetListModule, CheckboxModule, RadioButtonModule, CommonImportsModule],
  declarations: [RightVentricleComponent]
})
export class RightVentricleModule {}
