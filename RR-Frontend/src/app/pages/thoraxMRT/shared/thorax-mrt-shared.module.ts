import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorphologyEditorDialogComponent } from './morphology/morphology-editor-dialog/morphology-editor-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { MorphologySimpleComponent } from './morphology/morphology-simple/morphology-simple.component';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';

@NgModule({
  declarations: [MorphologyEditorDialogComponent, MorphologySimpleComponent],
  exports: [MorphologyEditorDialogComponent, MorphologySimpleComponent],
  imports: [CommonModule, TranslateModule, CommonImportsModule]
})
export class ThoraxMrtSharedModule {}
