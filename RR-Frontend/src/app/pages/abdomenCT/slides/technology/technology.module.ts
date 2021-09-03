import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { TechnologyComponent } from './technology.component';
@NgModule({
  declarations: [TechnologyComponent],
  imports: [CommonModule, FormsModule, CommonImportsModule]
})
export class TechnologyModule {}
