import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ExportDialogComponent } from './export-dialog.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { LoaderModule } from '@controls/loader/loader.module';

@NgModule({
  imports: [CommonModule, FormsModule, DynamicDialogModule, TranslateModule, DropdownModule, CheckboxModule, LoaderModule],
  declarations: [ExportDialogComponent],
  providers: [],
  exports: [ExportDialogComponent]
})
export class ExportDialogModule {}
