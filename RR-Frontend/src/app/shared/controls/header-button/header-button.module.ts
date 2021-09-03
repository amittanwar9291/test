import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderButtonComponent } from './header-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderButtonComponent],
  exports: [HeaderButtonComponent]
})
export class HeaderButtonModule {}
