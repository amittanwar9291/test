import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { PresetListModule } from '@sharedPages/preset-list/preset-list.module';
import { EvaluationComponent } from './evaluation.component';

@NgModule({
  declarations: [EvaluationComponent],
  imports: [CommonModule, FormsModule, TranslateModule, CheckboxModule, RadioButtonModule, CommonImportsModule, PresetListModule]
})
export class EvaluationModule {}
