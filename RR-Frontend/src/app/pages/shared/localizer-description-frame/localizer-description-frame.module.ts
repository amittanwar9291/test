import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizerDescriptionFrameComponent } from '@sharedPages/localizer-description-frame/localizer-description-frame.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LocalizerDescriptionFrameComponent],
  imports: [CommonModule, TranslateModule],
  exports: [LocalizerDescriptionFrameComponent]
})
export class LocalizerDescriptionFrameModule {}
