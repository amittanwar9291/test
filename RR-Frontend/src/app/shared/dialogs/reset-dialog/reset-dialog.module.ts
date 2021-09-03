import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetDialogComponent } from './reset-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [ResetDialogComponent]
})
export class ResetDialogModule {}
