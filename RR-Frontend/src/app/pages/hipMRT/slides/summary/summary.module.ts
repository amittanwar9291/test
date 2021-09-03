import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SummaryComponent } from './summary.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, FormsModule, RadioButtonModule, CheckboxModule, TranslateModule, CommonImportsModule],
  declarations: [SummaryComponent]
})
export class SummaryModule {}
