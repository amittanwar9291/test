import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoIconComponent } from '@controls/info-icon/info-icon.component';
import { InfoDialogComponent } from '../../dialogs/info-dialog/info-dialog.component';
import { InfoDialogModule } from '../../dialogs/info-dialog/info-dialog.module';

import { DiagnoseArticleListDialogComponent } from '../../dialogs/diagnose-article-list-dialog/diagnose-article-list-dialog.component';
import { DiagnoseArticleListDialogModule } from '../../dialogs/diagnose-article-list-dialog/diagnose-article-list-dialog.module';

@NgModule({
  declarations: [InfoIconComponent],
  imports: [CommonModule, InfoDialogModule, DiagnoseArticleListDialogModule],
  exports: [InfoIconComponent],
  entryComponents: [InfoDialogComponent, DiagnoseArticleListDialogComponent]
})
export class InfoIconModule {}
