import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NerveCompressionComponent } from './nerve-compression.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { CarpalTunnelSyndromeComponent } from './carpal-tunnel-syndrome/carpal-tunnel-syndrome.component';
import { UlnarTunelSyndromeComponent } from './ulnar-tunnel-syndrome/ulnar-tunnel-syndrome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    InfoIconModule,
    NumberInputModule,
    FindingColumnModule
  ],
  declarations: [NerveCompressionComponent, CarpalTunnelSyndromeComponent, UlnarTunelSyndromeComponent]
})
export class NerveCompressionModule {}
