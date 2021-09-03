import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { AorticArchSmallLocalizerComponent, AorticArchBigLocalizerComponent } from './index';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [TranslateModule, CommonModule, CommonImportsModule],
  declarations: [AorticArchSmallLocalizerComponent, AorticArchBigLocalizerComponent],
  exports: [AorticArchSmallLocalizerComponent, AorticArchBigLocalizerComponent]
})
export class AorticModule {}
