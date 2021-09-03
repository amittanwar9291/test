import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [SummaryComponent],
  imports: [CommonModule, FormsModule, CommonImportsModule, TranslateModule, RadioButtonModule, CheckboxModule]
})
export class SummaryModule {}
