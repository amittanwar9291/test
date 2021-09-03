import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ElbowSimpleComponent } from './elbow-simple/elbow-simple.component';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';

@NgModule({
  imports: [CommonModule, RadioButtonModule, FormsModule, TranslateModule, CommonImportsModule],
  declarations: [ElbowSimpleComponent],
  exports: [ElbowSimpleComponent]
})
export class ElbowLocalizersModule {}
