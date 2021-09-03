import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifferentialDiagnosisDropdownComponent } from './differential-diagnosis-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { CommonImportsModule } from '../../common-imports/common-imports.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DifferentialDiagnosisDropdownComponent],
  exports: [DifferentialDiagnosisDropdownComponent],
  imports: [CommonModule, DropdownModule, CommonImportsModule, FormsModule, TranslateModule]
})
export class DifferentialDiagnosisDropdownModule {}
