import { SafePipe } from '@pipes/safe-pipe.pipe';
import { NgModule } from '@angular/core';
import { PageNumberPipe } from './page-number.pipe';

@NgModule({
  imports: [],
  declarations: [SafePipe],
  exports: [SafePipe]
})
export class PipeModule {}
