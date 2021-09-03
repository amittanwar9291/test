import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicContainerBaseComponent } from '@abstractions/dynamic-base/dynamic-container-base.component';
import { DynamicBaseComponent } from '@abstractions/dynamic-base/dynamic-base.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicBaseComponent, DynamicContainerBaseComponent],
  exports: [DynamicBaseComponent, DynamicContainerBaseComponent]
})
export class DynamicBaseModule {}
