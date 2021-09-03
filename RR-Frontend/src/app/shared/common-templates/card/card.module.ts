import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { CommonImportsModule } from '../../common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, CommonImportsModule],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule {}
