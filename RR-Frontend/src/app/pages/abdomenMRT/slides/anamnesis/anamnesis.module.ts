import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PresetListModule } from '@sharedPages/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { AbdomenLocalizersModule } from '../shared/abdomen-localizers.module';
import { AnamnesisComponent } from './anamnesis.component';
import { IndicationFindingComponent } from './indication-finding/indication-finding.component';

@NgModule({
  declarations: [AnamnesisComponent, IndicationFindingComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    CommonImportsModule,
    MonthYearInputModule,
    FindingColumnModule,
    AbdomenLocalizersModule
  ]
})
export class AnamnesisModule {}
