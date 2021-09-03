import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { AnamnesisComponent } from './anamnesis.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    RadioButtonModule,
    MonthYearInputModule,
    CommonImportsModule,
    InfoIconModule
  ],
  declarations: [AnamnesisComponent]
})
export class AnamnesisModule {}
