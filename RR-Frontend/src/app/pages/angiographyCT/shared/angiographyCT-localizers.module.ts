import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CloseButtonModule } from '@controls/close-button/close-button.module';
import { AngiographyctManComponent } from './angiographyCT-man/angiographyct-man.component';
import { CommonModule } from '@angular/common';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [TranslateModule, CloseButtonModule, CommonModule, CommonImportsModule],
  declarations: [AngiographyctManComponent],
  exports: [AngiographyctManComponent]
})
export class AngiographyCTLocalizersModule {}
