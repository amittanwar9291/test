import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { CenterspecificPreferencesColumnComponent } from '@controls/centerspecific-preferences-column/centerspecific-preferences-column.component';
import { CenterspecificPreferencesInputModule } from '@controls/centerspecific-preferences-input/centerspecific-preferences-input.module';

import { CommonImportsModule } from '../../common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, FormsModule, CenterspecificPreferencesInputModule, NgxPaginationModule, CommonImportsModule],
  declarations: [CenterspecificPreferencesColumnComponent],
  exports: [CenterspecificPreferencesColumnComponent]
})
export class CenterspecificPreferencesColumnModule {}
