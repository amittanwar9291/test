import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclaimerDialogComponent } from './disclaimer-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [CommonModule, DynamicDialogModule, TranslateModule, FormsModule, DropdownModule, CheckboxModule],
  declarations: [DisclaimerDialogComponent],
  exports: [DisclaimerDialogComponent]
})
export class DisclaimerDialogModule {}
