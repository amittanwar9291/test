import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { FormsModule } from '@angular/forms';
import { PresetListModule } from '@sharedPages/preset-list/preset-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    CommonImportsModule,
    NumberInputModule,
    InfoIconModule,
    DropdownModule
  ]
})
export class SummaryModule {}
