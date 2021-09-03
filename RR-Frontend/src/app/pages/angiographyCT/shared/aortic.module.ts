import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';
import { AorticArchBigLocalizerCtComponent } from './aortic-arch-localizer/big/aortic-arch-big-localizer.component';
import { AorticArchSmallCtLocalizerComponent } from './aortic-arch-localizer/small/aortic-arch-small-localizer.component';

@NgModule({
  imports: [TranslateModule, CommonModule, CommonImportsModule],
  declarations: [AorticArchSmallCtLocalizerComponent, AorticArchBigLocalizerCtComponent],
  exports: [AorticArchSmallCtLocalizerComponent, AorticArchBigLocalizerCtComponent]
})
export class AorticModule {}
