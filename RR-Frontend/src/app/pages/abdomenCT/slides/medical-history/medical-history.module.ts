import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { MedicalHistoryComponent } from './medical-history.component';
@NgModule({
  declarations: [MedicalHistoryComponent],
  imports: [CommonModule, FormsModule, CommonImportsModule]
})
export class MedicalHistoryModule {}
