import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SummaryComponent } from './summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    CommonImportsModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule
  ],
  declarations: [SummaryComponent]
})
export class SummaryModule {}
