import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PancreasComponent } from './pancreas.component';
import { FormsModule } from '@angular/forms';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { AcutePancreatitisComponent } from './acute-pancreatitis/acute-pancreatitis.component';
import { DiffuseParenchymalChangesComponent } from './diffuse-parenchymal-changes/diffuse-parenchymal-changes.component';
import { MassComponent } from './mass/mass.component';
import { AnatomicalVariantsAnomalyComponent } from './anatomical-variants-anomaly/anatomical-variants-anomaly.component';
import { PostinterventionalFindingsComponent } from './postinterventional-findings/postinterventional-findings.component';
import { ImpressionDiffDiagnosisComponent } from './acute-pancreatitis/impression-diff-diagnosis/impression-diff-diagnosis.component';
import { DifferentialDiagnosisComponent } from './mass/differential-diagnosis/differential-diagnosis.component';
import { MassCharacterizationOneComponent } from './mass/mass-characterization-one/mass-characterization-one.component';
import { MassCharacterizationTwoComponent } from './mass/mass-characterization-two/mass-characterization-two.component';
import { MassCharacterizationThreeComponent } from './mass/mass-characterization-three/mass-characterization-three.component';
import { AcuteCharacterizationOneComponent } from './acute-pancreatitis/acute-characterization-one/acute-characterization-one.component';
import { AcuteCharacterizationTwoComponent } from './acute-pancreatitis/acute-characterization-two/acute-characterization-two.component';
import { DiffuseCharacterizationOneComponent } from './diffuse-parenchymal-changes/diffuse-characterization-one/diffuse-characterization-one.component';
import { DiffuseCharacterizationTwoComponent } from './diffuse-parenchymal-changes/diffuse-characterization-two/diffuse-characterization-two.component';
import { DiffuseCharacterizationThreeComponent } from './diffuse-parenchymal-changes/diffuse-characterization-three/diffuse-characterization-three.component';
import { AcuteLocalizationComponent } from './acute-pancreatitis/acute-localization/acute-localization.component';
import { ExpansionInputsGroupModule } from '@controls/expansion-inputs-group/expansion-inputs-group.module';
import { DropdownModule } from 'primeng/dropdown';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

@NgModule({
  declarations: [
    PancreasComponent,
    AcutePancreatitisComponent,
    DiffuseParenchymalChangesComponent,
    MassComponent,
    AnatomicalVariantsAnomalyComponent,
    PostinterventionalFindingsComponent,
    ImpressionDiffDiagnosisComponent,
    DifferentialDiagnosisComponent,
    MassCharacterizationOneComponent,
    MassCharacterizationTwoComponent,
    MassCharacterizationThreeComponent,
    AcuteCharacterizationOneComponent,
    AcuteCharacterizationTwoComponent,
    DiffuseCharacterizationOneComponent,
    DiffuseCharacterizationTwoComponent,
    DiffuseCharacterizationThreeComponent,
    AcuteLocalizationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CommonImportsModule,
    FindingColumnModule,
    CheckboxModule,
    TranslateModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    MonthYearInputModule,
    ExpansionInputsGroupModule,
    DropdownModule,
    SignalSliderModule,
    NumberInputModule,
    ReferencePictureModule
  ]
})
export class PancreasModule {}
