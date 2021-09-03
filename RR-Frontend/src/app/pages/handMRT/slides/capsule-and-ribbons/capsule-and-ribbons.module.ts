import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapsuleAndRibbonsComponent } from './capsule-and-ribbons.component';
import { LigamentLesionsOfTheFingersComponent } from './ligament-lesions-of-the-fingers/ligament-lesions-of-the-fingers.component';
import { TFCCLesionComponent } from './TFCC-lesion/TFCC-lesion.component';
import { RuptureOfLunotriquetrumComponent } from './rupture-of-lunotriquetrum/rupture-of-lunotriquetrum.component';
import { RuptureOfScapholunatumComponent } from './rupture-of-scapholunatum/rupture-of-scapholunatum.component';
import { RuptureOfExtrinsicLigamentsComponent } from './rupture-of-extrinsic-ligaments/rupture-of-extrinsic-ligaments.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { D1Component } from './ligament-lesions-of-the-fingers/D1/D1.component';
import { D2toD5Component } from './ligament-lesions-of-the-fingers/D2toD5/D2toD5.component';

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
  declarations: [
    CapsuleAndRibbonsComponent,
    LigamentLesionsOfTheFingersComponent,
    TFCCLesionComponent,
    RuptureOfLunotriquetrumComponent,
    RuptureOfScapholunatumComponent,
    D1Component,
    D2toD5Component,
    RuptureOfExtrinsicLigamentsComponent
  ]
})
export class CapsuleAndRibbonsModule {}
