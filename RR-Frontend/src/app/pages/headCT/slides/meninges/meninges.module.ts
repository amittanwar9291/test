import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeningesComponent } from './meninges.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { MassComponent } from './mass/mass.component';
import { DiffuseChangesComponent } from './diffuse-changes/diffuse-changes.component';
import { SubduralHematomaComponent } from './subdural-hematoma/subdural-hematoma.component';
import { EpiduralHematomaComponent } from './epidural-hematoma/epidural-hematoma.component';
import { TabViewModule } from 'primeng/tabview';
import { MassLocalizationComponent } from './mass/mass-localization/mass-localization.component';
import { MassCharacterizationOneComponent } from './mass/mass-characterization-one/mass-characterization-one.component';
import { MassCharacterizationTwoComponent } from './mass/mass-characterization-two/mass-characterization-two.component';
import { MassDifferentialDiagnosisComponent } from './mass/mass-differential-diagnosis/mass-differential-diagnosis.component';
import { DiffuseChangesLocalizationComponent } from './diffuse-changes/diffuse-changes-localization/diffuse-changes-localization.component';
import { DiffuseChangesCharacterizationComponent } from './diffuse-changes/diffuse-changes-characterization/diffuse-changes-characterization.component';
import { DiffuseChangesDifferentialDiagnosisComponent } from './diffuse-changes/diffuse-changes-differential-diagnosis/diffuse-changes-differential-diagnosis.component';
import { SubduralHematomaCharacterizationOneComponent } from './subdural-hematoma/subdural-hematoma-characterization-one/subdural-hematoma-characterization-one.component';
import { SubduralHematomaCharacterizationTwoComponent } from './subdural-hematoma/subdural-hematoma-characterization-two/subdural-hematoma-characterization-two.component';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    MeningesComponent,
    MassComponent,
    DiffuseChangesComponent,
    SubduralHematomaComponent,
    EpiduralHematomaComponent,
    MassLocalizationComponent,
    MassCharacterizationOneComponent,
    MassCharacterizationTwoComponent,
    MassDifferentialDiagnosisComponent,
    DiffuseChangesLocalizationComponent,
    DiffuseChangesCharacterizationComponent,
    DiffuseChangesDifferentialDiagnosisComponent,
    SubduralHematomaCharacterizationOneComponent,
    SubduralHematomaCharacterizationTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    TranslateModule,
    RadioButtonModule,
    FindingColumnModule,
    TabViewModule,
    CheckboxModule,
    NumberInputModule,
    ReferencePictureModule,
    DifferentialDiagnosisDropdownModule,
    DropdownModule
  ]
})
export class MeningesModule {}
