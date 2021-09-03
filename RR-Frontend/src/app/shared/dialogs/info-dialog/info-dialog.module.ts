import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDialogComponent } from './info-dialog.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [InfoDialogComponent],
  imports: [CommonModule, PdfViewerModule]
})
export class InfoDialogModule {}
