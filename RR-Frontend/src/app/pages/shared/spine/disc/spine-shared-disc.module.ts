import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { DiscSectorSelectComponent } from './disc-sector-select/disc-sector-select.component';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule],
  declarations: [DiscSectorSelectComponent],
  exports: [DiscSectorSelectComponent]
})
export class SpineSharedDiscModule {}
