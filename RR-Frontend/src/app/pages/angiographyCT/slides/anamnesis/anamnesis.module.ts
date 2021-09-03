import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamnesisComponent } from './anamnesis.component';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { AnamnesisTabComponent } from './anamnesis-tab.component/anamnesis-tab.component';
import { PriorExamsComponent } from './prior-exams.component/prior-exams.component';
import { PriorInterventionsComponent } from './prior-interventions.component/prior-interventions.component';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { PavkComponent } from './anamnesis-tab.component/pavk.component/pavk.component';
import { AneurysmaComponent } from './anamnesis-tab.component/aneurysma.component/aneurysma.component';
import { CoronaryComponent } from './anamnesis-tab.component/coronary.component/coronary.component';
import { RiskComponent } from './anamnesis-tab.component/risk.component/risk.component';
import { AorticVaskulitisComponent } from './anamnesis-tab.component/aortic.vaskulitis.component/aortic.vaskulitis.component';
import { PenetratingIntramuralDissectionComponent } from './anamnesis-tab.component/penetrating.intramural.dissection.component/penetrating.intramural.dissection.component';
import { PtaLysisThoracotomyPacemakerComponent } from './prior-interventions.component/pta.lysis.thoracotomy.pacemaker.component/pta.lysis.thoracotomy.pacemaker.component';
import { ThrombectomyComponent } from './prior-interventions.component/thrombectomy.component/thrombectomy.component';
import { BypassComponent } from './prior-interventions.component/bypass.component/bypass.component';
import { EmbolisationComponent } from './prior-interventions.component/embolisation.component/embolisation.component';
import { PartialComponent } from './prior-interventions.component/partial.component/partial.component';
import { EndovascularComponent } from './prior-interventions.component/endovascular.component/endovascular.component';
import { ValveComponent } from './prior-interventions.component/valve.component/valve.component';
import { VitiumComponent } from './prior-interventions.component/vitium.component/vitium.component';
import { TransplantationComponent } from './prior-interventions.component/transplantation.component/transplantation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CommonImportsModule,
    CheckboxModule,
    MonthYearInputModule,
    NumberInputModule,
    TabViewModule,
    FindingColumnModule
  ],
  declarations: [
    AnamnesisComponent,
    AnamnesisTabComponent,
    PriorExamsComponent,
    PriorInterventionsComponent,
    PavkComponent,
    AneurysmaComponent,
    AorticVaskulitisComponent,
    PenetratingIntramuralDissectionComponent,
    CoronaryComponent,
    RiskComponent,
    PtaLysisThoracotomyPacemakerComponent,
    ThrombectomyComponent,
    BypassComponent,
    EmbolisationComponent,
    PartialComponent,
    EndovascularComponent,
    ValveComponent,
    VitiumComponent,
    TransplantationComponent
  ]
})
export class AnamnesisModule {}
