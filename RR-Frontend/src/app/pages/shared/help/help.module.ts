import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { TranslateModule } from '@ngx-translate/core';
import { VideoTutorial01DialogModule } from 'app/shared/dialogs/video-tutorial01-dialog/video-tutorial01-dialog.module';
import { VideoTutorial02DialogModule } from 'app/shared/dialogs/video-tutorial02-dialog/video-tutorial02-dialog.module';

@NgModule({
  imports: [CommonModule, TranslateModule, VideoTutorial01DialogModule, VideoTutorial02DialogModule],
  declarations: [HelpComponent],
  exports: [HelpComponent]
})
export class HelpModule {}
