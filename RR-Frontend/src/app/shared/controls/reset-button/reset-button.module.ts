import { NgModule } from '@angular/core';
import { ResetButtonComponent } from '@controls/reset-button/reset-button.component';
import { CommonImportsModule } from '../../common-imports/common-imports.module';

@NgModule({
  imports: [CommonImportsModule],
  declarations: [ResetButtonComponent],
  exports: [ResetButtonComponent]
})
export class ResetButtonModule {}
