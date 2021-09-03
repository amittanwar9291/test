import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PelvicFloorComponent } from './pelvic-floor.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';

import { MorphologyComponent } from './morphology/morphology.component';
import { OrganProlapseComponent } from './organ-prolapse/organ-prolapse.component';
import { DyssynergicDefecationAnismComponent } from './dyssynergic-defecation-anism/dyssynergic-defecation-anism.component';
import { AnteriorCompartmentComponent } from './organ-prolapse/anterior-compartment/anterior-compartment.component';
import { MediumCompartmentComponent } from './organ-prolapse/medium-compartment/medium-compartment.component';
import { CulDeSacComponent } from './organ-prolapse/cul-de-sac/cul-de-sac.component';
import { PosteriorCompartmentComponent } from './organ-prolapse/posterior-compartment/posterior-compartment.component';
import { MainFeaturesComponent } from './morphology/main-features/main-features.component';
import { MLevatorComponent } from './morphology/m-levator/m-levator.component';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { PelvicFloorDysfunctionComponent } from './pelvic-floor-dysfunction/pelvic-floor-dysfunction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    TabViewModule,
    CheckboxModule,
    DropdownModule,
    NumberInputModule,
    SliderNumberTripleInputModule,
    FindingColumnModule,
    InfoIconModule
  ],
  declarations: [
    PelvicFloorComponent,
    MorphologyComponent,
    OrganProlapseComponent,
    PelvicFloorDysfunctionComponent,
    DyssynergicDefecationAnismComponent,
    AnteriorCompartmentComponent,
    MediumCompartmentComponent,
    CulDeSacComponent,
    PosteriorCompartmentComponent,
    MainFeaturesComponent,
    MLevatorComponent
  ]
})
export class PelvicFloorModule {}
