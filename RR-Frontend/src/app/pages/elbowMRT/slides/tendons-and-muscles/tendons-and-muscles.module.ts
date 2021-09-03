import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';

import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

import { TendonsAndMusclesComponent } from './tendons-and-muscles.component';
import { EpicondylitisComponent } from './epicondylitis/epicondylitis.component';
import { LesionDistalBicepsTendonComponent } from './lesion-distal-biceps-tendon/lesion-distal-biceps-tendon.component';
import { LesionTricepsTendonComponent } from './lesion-triceps-tendon/lesion-triceps-tendon.component';
import { MusculatureComponent } from './musculature/musculature.component';

@NgModule({
  declarations: [
    TendonsAndMusclesComponent,
    EpicondylitisComponent,
    LesionDistalBicepsTendonComponent,
    LesionTricepsTendonComponent,
    MusculatureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    TabViewModule,
    SliderNumberTripleInputModule,
    FindingColumnModule,
    DropdownModule
  ]
})
export class TendonsAndMusclesModule {}
