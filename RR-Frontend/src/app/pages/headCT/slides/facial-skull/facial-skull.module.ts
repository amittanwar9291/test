import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacialSkullComponent } from './facial-skull.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

@NgModule({
  declarations: [FacialSkullComponent],
  imports: [CommonModule, FormsModule, CommonImportsModule]
})
export class FacialSkullModule {}
