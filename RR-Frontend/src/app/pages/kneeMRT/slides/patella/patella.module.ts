import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { PatellaComponent } from './patella.component';
import { AnatomicalVariantsComponent } from './anatomical-variants/anatomical-variants.component';
import { RetropatellarChondropathyComponent } from './retropatellar-chondropathy/retropatellar-chondropathy.component';
import { RuptureMedialRetinaculumComponent } from './rupture-medial-retinaculum/rupture-medial-retinaculum.component';
import { OsteochondrosisDissecansComponent } from './osteochondrosis-dissecans/osteochondrosis-dissecans.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    CommonImportsModule,
    NumberInputModule,
    FindingColumnModule
  ],
  declarations: [
    PatellaComponent,
    AnatomicalVariantsComponent,
    RetropatellarChondropathyComponent,
    RuptureMedialRetinaculumComponent,
    OsteochondrosisDissecansComponent
  ]
})
export class PatellaModule {}
