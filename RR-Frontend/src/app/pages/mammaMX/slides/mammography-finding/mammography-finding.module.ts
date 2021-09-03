import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { MammaSharedLocalizersModule } from '@sharedPages/mamma/localizers/mamma-shared-localizers.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { MammographyFindingComponent } from './mammography-finding.component';
import { ArchitecturalDistorsionComponent } from './architectural-distorsion/architectural-distorsion.component';
import { AsymmetryComponent } from './asymmetry/asymmetry.component';
import { CalcificationComponent } from './calcification/calcification.component';
import { MassComponent } from './mass/mass.component';
import { SkinLesionComponent } from './skin-lesion/skin-lesion.component';
import { SolitaryMammaryDuctDilatationComponent } from './solitary-mammary-duct-dilatation/solitary-mammary-duct-dilatation.component';
import { DepthSectionComponent } from './shared/depth-section/depth-section.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  declarations: [
    MammographyFindingComponent,
    ArchitecturalDistorsionComponent,
    AsymmetryComponent,
    CalcificationComponent,
    MassComponent,
    SkinLesionComponent,
    SolitaryMammaryDuctDilatationComponent,
    DepthSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    MammaSharedLocalizersModule,
    TranslateModule,
    CommonImportsModule,
    FindingColumnModule,
    NumberInputModule,
    DifferentialDiagnosisDropdownModule
  ]
})
export class MammographyFindingModule {}
