import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoronaryArteriesComponent } from './coronary-arteries.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CoronaryArterialDominanceComponent } from './coronary-arterial-dominance/coronary-arterial-dominance.component';
import { CoronaryAnomalyComponent } from './coronary-anomaly/coronary-anomaly.component';
import { CalcificationComponent } from './calcification/calcification.component';
import { StenosisOcclusionComponent } from './stenosis-occlusion/stenosis-occlusion.component';
import { ExtracoronaryIntracardiacFindingsComponent } from './extracoronary-intracardiac-findings/extracoronary-intracardiac-findings.component';
import { FollowUpAfterBypassComponent } from './follow-up-after-bypass/follow-up-after-bypass.component';
import { FollowUpAfterStentComponent } from './follow-up-after-stent/follow-up-after-stent.component';
import { DropdownModule } from 'primeng/dropdown';
import { SharedCoronaryArteryColumnsComponent } from './shared-coronary-artery-columns/shared-coronary-artery-columns.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    FindingColumnModule,
    DropdownModule
  ],
  declarations: [
    CoronaryArteriesComponent,
    CoronaryArterialDominanceComponent,
    CoronaryAnomalyComponent,
    CalcificationComponent,
    StenosisOcclusionComponent,
    ExtracoronaryIntracardiacFindingsComponent,
    FollowUpAfterBypassComponent,
    FollowUpAfterStentComponent,
    SharedCoronaryArteryColumnsComponent
  ]
})
export class CoronaryArteriesModule {}
