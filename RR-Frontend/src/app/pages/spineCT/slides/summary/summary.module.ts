import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

@NgModule({
  declarations: [SummaryComponent],
  imports: [CommonModule, CheckboxModule, FormsModule, TranslateModule, CommonImportsModule, RadioButtonModule]
})
export class SummaryModule {}
