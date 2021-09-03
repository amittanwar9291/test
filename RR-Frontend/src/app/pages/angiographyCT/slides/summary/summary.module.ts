import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, RadioButtonModule, CommonImportsModule, CheckboxModule, NumberInputModule],
  declarations: [SummaryComponent]
})
export class SummaryModule {}
