import { CommonModule } from '@angular/common';
import { DiagnoseArticleListDialogComponent } from './diagnose-article-list-dialog.component';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [DiagnoseArticleListDialogComponent]
})
export class DiagnoseArticleListDialogModule {}
