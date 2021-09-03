import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { DynamicBaseModule } from '@abstractions/dynamic-base/dynamic-base.module';
import { ExaminationFindingsSelectorComponent } from '@controls/examination-findings-selector/examination-findings-selector.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ExaminationFindingsSelectorComponent],
  imports: [CommonModule, FormsModule, RadioButtonModule, MultiValueDropdownModule, DynamicBaseModule, TranslateModule],
  exports: [ExaminationFindingsSelectorComponent]
})
export class ExaminationFindingsSelectorModule {}
