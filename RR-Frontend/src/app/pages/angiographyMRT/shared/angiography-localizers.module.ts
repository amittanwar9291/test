import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CloseButtonModule } from '@controls/close-button/close-button.module';
import { AngiographyManComponent } from './angiography-man/angiography-man.component';
import { CommonModule } from '@angular/common';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [TranslateModule, CloseButtonModule, CommonModule, CommonImportsModule],
  declarations: [AngiographyManComponent],
  exports: [AngiographyManComponent]
})
export class AngiographyLocalizersModule {}
