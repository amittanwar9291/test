import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { GastrointestinalTractComponent } from './gastrointestinal-tract.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { GastricMassComponent } from './gastric-mass/gastric-mass.component';
import { PostoperativeGastricImagingComponent } from './postoperative-gastric-imaging/postoperative-gastric-imaging.component';
import { SegmentalBowelFindingsComponent } from './segmental-bowel-findings/segmental-bowel-findings.component';
import { IntestinalMassComponent } from './intestinal-mass/intestinal-mass.component';
import { BowelDiverticulaComponent } from './bowel-diverticula/bowel-diverticula.component';
import { AppendicitisComponent } from './appendicitis/appendicitis.component';
import { AppendagitisComponent } from './appendagitis/appendagitis.component';
import { MechanicalIleusComponent } from './mechanical-ileus/mechanical-ileus.component';
import { ParalyticIleusComponent } from './paralytic-ileus/paralytic-ileus.component';
import { HerniaComponent } from './hernia/hernia.component';
import { TabViewModule } from 'primeng/tabview';
import { GastricMassCharacterizationOneComponent } from './gastric-mass/gastric-mass-characterization-one/gastric-mass-characterization-one';
import { GastricMassDifferentialDiagnosisComponent } from './gastric-mass/differential-diagnosis/gastric-mass-differential-diagnosis.component';
import { SegmentalBowelCharacterizationOneComponent } from './segmental-bowel-findings/segmental-bowel-characterization-one/segmental-bowel-characterization-one.component';
import { SegmentalBowelDifferentialDiagnosisComponent } from './segmental-bowel-findings/segmental-bowel-differential-diagnosis/segmental-bowel-differential-diagnosis.component';
import { IntestinalMassLocalizationComponent } from './intestinal-mass/intestinal-mass-localization/intestinal-mass-localization.component';
import { IntestinalMassDifferentialDiagnosisComponent } from './intestinal-mass/intestinal-mass-differential-diagnosis/intestinal-mass-differential-diagnosis.component';
import { BowelDiverticulaCharacterizationOneComponent } from './bowel-diverticula/bowel-diverticula-characterization-one/bowel-diverticula-characterization-one.component';
import { HerniaLocalizationComponent } from './hernia/hernia-localization/hernia-localization.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { DropdownModule } from 'primeng/dropdown';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { AbdomenLocalizersModule } from '../shared/abdomen-localizers.module';
import { UploaderNgWrapperModule } from '@controls/uploader-ng-wrapper/uploader-ng-wrapper.module';
import { HerniaCharacterizationComponent } from './hernia/hernia-characterization/hernia-characterization.component';
import { BowelDiverticulaCharacterizationTwoComponent } from './bowel-diverticula/bowel-diverticula-characterization-two/bowel-diverticula-characterization-two.component';
import { GastricUlcerComponent } from './gastric-ulcer/gastric-ulcer.component';
import { GastricDiverticulumComponent } from './gastric-diverticulum/gastric-diverticulum.component';
import { AppendicitisCharacterizationOneComponent } from './appendicitis/appendicitis-characterization-one/appendicitis-characterization-one';
import { AppendicitisDifferentialDiagnosisComponent } from './appendicitis/differential-diagnosis/appendicitis-differential-diagnosis.component';
import { GastricMassCharacterizationTwoComponent } from './gastric-mass/gastric-mass-characterization-two/gastric-mass-characterization-two.component';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { IntestinalMassCharacterizationOneComponent } from './intestinal-mass/intestinal-mass-characterization-one/intestinal-mass-characterization-one.component';
import { IntestinalMassCharacterizationTwoComponent } from './intestinal-mass/intestinal-mass-characterization-two/intestinal-mass-characterization-two.component';
import { SegmentalBowelCharacterizationTwoComponent } from './segmental-bowel-findings/segmental-bowel-characterization-two/segmental-bowel-characterization-two.component';

@NgModule({
  declarations: [
    GastrointestinalTractComponent,
    GastricMassComponent,
    GastricUlcerComponent,
    GastricDiverticulumComponent,
    PostoperativeGastricImagingComponent,
    SegmentalBowelFindingsComponent,
    IntestinalMassComponent,
    BowelDiverticulaComponent,
    AppendicitisComponent,
    AppendagitisComponent,
    MechanicalIleusComponent,
    ParalyticIleusComponent,
    HerniaComponent,
    GastricMassCharacterizationOneComponent,
    GastricMassDifferentialDiagnosisComponent,
    SegmentalBowelCharacterizationOneComponent,
    SegmentalBowelDifferentialDiagnosisComponent,
    IntestinalMassLocalizationComponent,
    IntestinalMassDifferentialDiagnosisComponent,
    BowelDiverticulaCharacterizationOneComponent,
    HerniaLocalizationComponent,
    HerniaCharacterizationComponent,
    BowelDiverticulaCharacterizationTwoComponent,
    AppendicitisCharacterizationOneComponent,
    AppendicitisDifferentialDiagnosisComponent,
    GastricMassCharacterizationTwoComponent,
    IntestinalMassCharacterizationOneComponent,
    IntestinalMassCharacterizationTwoComponent,
    SegmentalBowelCharacterizationTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    FindingColumnModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    CheckboxModule,
    NumberInputModule,
    DropdownModule,
    ReferencePictureModule,
    AbdomenLocalizersModule,
    UploaderNgWrapperModule,
    SignalSliderModule
  ]
})
export class GastrointestinalTractModule {}
