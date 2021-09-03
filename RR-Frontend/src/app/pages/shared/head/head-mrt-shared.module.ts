import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArterialTerritoriesLocalizerSimpleComponent } from './arterial-territories-localizer/arterial-territories-localizer-simple/arterial-territories-localizer-simple.component';
import { ArterialTerritoriesLocalizerComplexComponent } from './arterial-territories-localizer/arterial-territories-localizer-complex/arterial-territories-localizer-complex.component';
import { TranslateModule } from '@ngx-translate/core';
import { CerebralVenousThrombosisLocalizerSimpleComponent } from './cerebral-venous-thrombosis-localizer/cerebral-venous-thrombosis-localizer-simple/cerebral-venous-thrombosis-localizer-simple.component';
import { CerebralVenousThrombosisLocalizerComplexComponent } from './cerebral-venous-thrombosis-localizer/cerebral-venous-thrombosis-localizer-complex/cerebral-venous-thrombosis-localizer-complex.component';
import { CortexLocalizerComplexComponent } from './cortex-localizer/cortex-localizer-complex/cortex-localizer-complex.component';
import { CortexLocalizerSimpleComponent } from './cortex-localizer/cortex-localizer-simple/cortex-localizer-simple.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { BasalGangliaLocationsSimpleComponent } from './basal-ganglia-locations/basal-ganglia-locations-simple/basal-ganglia-locations-simple.component';
import { BasalGangliaLocationsComplexComponent } from './basal-ganglia-locations/basal-ganglia-locations-complex/basal-ganglia-locations-complex.component';

@NgModule({
  declarations: [
    ArterialTerritoriesLocalizerSimpleComponent,
    ArterialTerritoriesLocalizerComplexComponent,
    BasalGangliaLocationsSimpleComponent,
    BasalGangliaLocationsComplexComponent,
    CortexLocalizerComplexComponent,
    CortexLocalizerSimpleComponent,
    CerebralVenousThrombosisLocalizerSimpleComponent,
    CerebralVenousThrombosisLocalizerComplexComponent
  ],
  exports: [
    ArterialTerritoriesLocalizerSimpleComponent,
    ArterialTerritoriesLocalizerComplexComponent,
    BasalGangliaLocationsSimpleComponent,
    BasalGangliaLocationsComplexComponent,
    CortexLocalizerComplexComponent,
    CortexLocalizerSimpleComponent,
    CerebralVenousThrombosisLocalizerSimpleComponent,
    CerebralVenousThrombosisLocalizerComplexComponent
  ],
  imports: [CommonModule, TranslateModule, CommonImportsModule]
})
export class HeadMRTSharedModule {}
