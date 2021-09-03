import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutrrComponent } from './aboutrr.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [AboutrrComponent],
  exports: [AboutrrComponent]
})
export class AboutrrModule {}
