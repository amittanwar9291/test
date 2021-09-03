import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { MultiValueDropdownComponent } from './multi-value-dropdown.component';
import { CommonImportsModule } from '../../common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, TranslateModule, DropdownModule, FormsModule, CommonModule, CommonImportsModule],
  declarations: [MultiValueDropdownComponent],
  exports: [MultiValueDropdownComponent]
})
export class MultiValueDropdownModule {}
