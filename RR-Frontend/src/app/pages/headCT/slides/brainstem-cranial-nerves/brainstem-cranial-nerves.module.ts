import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrainstemCranialNervesComponent } from './brainstem-cranial-nerves.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

@NgModule({
  declarations: [BrainstemCranialNervesComponent],
  imports: [CommonModule, FormsModule, CommonImportsModule]
})
export class BrainstemCranialNervesModule {}
