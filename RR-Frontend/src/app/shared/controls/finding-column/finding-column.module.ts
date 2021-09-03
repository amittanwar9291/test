import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MultiValueDropdownComponent } from '@controls/multi-value-dropdown/multi-value-dropdown.component';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { DescriptionTypeModule } from '@controls/description-type/description-type.module';
import { DescriptionTypeComponent } from '@controls/description-type/description-type.component';

import { DynamicContainerBaseComponent } from '@abstractions/dynamic-base/dynamic-container-base.component';
import { DynamicBaseComponent } from '@abstractions/dynamic-base/dynamic-base.component';
import { DynamicBaseModule } from '@abstractions/dynamic-base/dynamic-base.module';

import { NgxPaginationModule } from 'ngx-pagination';

import { FindingColumnComponent } from './finding-column.component';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

@NgModule({
  imports: [
    CommonModule,
    MultiValueDropdownModule,
    DynamicBaseModule,
    NgxPaginationModule,
    DescriptionTypeModule,
    FormsModule,
    CommonImportsModule
  ],
  declarations: [FindingColumnComponent],
  entryComponents: [MultiValueDropdownComponent, DynamicContainerBaseComponent, DynamicBaseComponent, DescriptionTypeComponent],
  exports: [FindingColumnComponent]
})
export class FindingColumnModule {}
