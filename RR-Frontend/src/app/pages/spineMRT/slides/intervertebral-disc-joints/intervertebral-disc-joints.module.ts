import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervertebralDiscJointsComponent } from './intervertebral-disc-joints.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { AnnulusFissureComponent } from './annulus-fissure/annulus-fissure.component';
import { DegenerationComponent } from './degeneration/degeneration.component';
import { FacetJointArthrosisComponent } from './facet-joint-arthrosis/facet-joint-arthrosis.component';
import { ErosiveOsteochondrosisComponent } from './erosive-osteochondrosis/erosive-osteochondrosis.component';
import { InflammatoryComponent } from './inflammatory/inflammatory.component';
import { TraumaComponent } from './trauma/trauma.component';
import { RheumatismComponent } from './rheumatism/rheumatism.component';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SpineLocalizersModule } from '../../shared/spine-localizers.module';
import { TabViewModule } from 'primeng/tabview';
import { TabLocalizationPathologyComponent } from './rheumatism/tab-localization-pathology/tab-localization-pathology.component';
import { TabEnthsitisComponent } from './rheumatism/tab-enthsitis/tab-enthsitis.component';
import { TabDiscitisArthritisComponent } from './rheumatism/tab-discitis-arthritis/tab-discitis-arthritis.component';
import { TabArthritisComponent } from './rheumatism/tab-arthritis/tab-arthritis.component';
import { TabPeriostitisComponent } from './rheumatism/tab-periostitis/tab-periostitis.component';
import { TabEnthsitisDiscitisComponent } from './rheumatism/tab-enthsitis-discitis/tab-enthsitis-discitis.component';
import { TabArthritisPeriostitisComponent } from './rheumatism/tab-arthritis-periostitis/tab-arthritis-periostitis.component';
import { TabDifferentialDiagnosisComponent } from './rheumatism/tab-differential-diagnosis/tab-differential-diagnosis.component';
import { ProtrusionExtrusionMigrationSequestrationComponent } from './protrusion-extrusion-migration-sequestration/protrusion-extrusion-migration-sequestration.component';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    IntervertebralDiscJointsComponent,
    AnnulusFissureComponent,
    DegenerationComponent,
    FacetJointArthrosisComponent,
    ErosiveOsteochondrosisComponent,
    InflammatoryComponent,
    TraumaComponent,
    RheumatismComponent,
    TabLocalizationPathologyComponent,
    TabEnthsitisComponent,
    TabDiscitisArthritisComponent,
    TabArthritisComponent,
    TabPeriostitisComponent,
    TabEnthsitisDiscitisComponent,
    TabArthritisPeriostitisComponent,
    TabDifferentialDiagnosisComponent,
    ProtrusionExtrusionMigrationSequestrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    FindingColumnModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    SpineLocalizersModule,
    TabViewModule,
    ReferencePictureModule,
    DropdownModule
  ]
})
export class IntervertebralDiscJointsModule {}
