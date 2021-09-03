import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';

import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { SpineSharedLocalizersModule } from 'app/pages/shared/spine/localizers/spine-shared-localizers.module';

import { SpineSharedDiscModule } from '@sharedPages/spine/disc/spine-shared-disc.module';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { BulgingDegenerationComponent } from './bulging-degeneration/bulging-degeneration.component';
import { ProtrusionExtrusionMigrationComponent } from './protrusion-extrusion-migration/protrusion-extrusion-migration.component';
import { FacetJointsComponent } from './facet-joints/facet-joints.component';
import { SpondylodiscitisComponent } from './spondylodiscitis/spondylodiscitis.component';
import { TraumaComponent } from './trauma/trauma.component';
import { RheumatoidDiseasesComponent } from './rheumatoid-diseases/rheumatoid-diseases.component';
import { DiscComponent } from './disc.component';
import { Tab1Component } from './protrusion-extrusion-migration/tab1/tab1.component';
import { Tab2Component } from './protrusion-extrusion-migration/tab2/tab2.component';

@NgModule({
  declarations: [
    DiscComponent,
    BulgingDegenerationComponent,
    ProtrusionExtrusionMigrationComponent,
    FacetJointsComponent,
    SpondylodiscitisComponent,
    TraumaComponent,
    RheumatoidDiseasesComponent,
    Tab1Component,
    Tab2Component
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    DynamicComponentWrapperModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    TranslateModule,
    NumberInputModule,
    TabViewModule,
    SliderNumberInputModule,
    InfoIconModule,
    DropdownModule,
    SpineSharedLocalizersModule,
    SpineSharedDiscModule,
    FindingColumnModule
  ]
})
export class DiscModule {}
