import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaleSexComponent } from './male-sex.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { PenisTraumaComponent } from './penis-trauma/penis-trauma.component';
import { PenisInfectionComponent } from './penis-infection/penis-infection.component';
import { PenisMassComponent } from './penis-mass/penis-mass.component';
import { MainFeaturesComponent } from './penis-mass/main-features/main-features.component';
import { AdditionalFeaturesComponent } from './penis-mass/additional-features/additional-features.component';
import { DifferentialDiagnosisComponent } from './penis-mass/differential-diagnosis/differential-diagnosis.component';
import { ScrotumInfectionInflammationComponent } from './scrotum-infection-inflammation/scrotum-infection-inflammation.component';
import { ScrotumTraumaComponent } from './scrotum-trauma/scrotum-trauma.component';
import { ScrotumCryptorchidismComponent } from './scrotum-cryptorchidism/scrotum-cryptorchidism.component';
import { ScrotumMassComponent } from './scrotum-mass/scrotum-mass.component';
import { AdditionalFeaturesScrotumComponent } from './scrotum-mass/additional-features/additional-features-scrotum.component';
import { DifferentialDiagnosisScrotumComponent } from './scrotum-mass/differential-diagnosis/differential-diagnosis-scrotum.component';
import { MainFeaturesScrotumComponent } from './scrotum-mass/main-features/main-features-scrotum.component';
import { SeminalVesiclesMassComponent } from './seminal-vesicles-mass/seminal-vesicles-mass.component';
import { SeminalVesiclesMassDifferentialDiagnosisComponent } from './seminal-vesicles-mass/seminal-vesicles-mass-differential-diagnosis/seminal-vesicles-mass-differential-diagnosis.component';
import { SeminalVesiclesMassMainFeaturesComponent } from './seminal-vesicles-mass/seminal-vesicles-mass-main-features/seminal-vesicles-mass-main-features.component';
import { SeminalVesiclesInfectionInflammationComponent } from './seminal-vesicles-infection-inflammation/seminal-vesicles-infection-inflammation.component';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { TesticlesEpididymisComponent } from './scrotum-infection-inflammation/testicles-epididymis/testicles-epididymis.component';
import { SurroundingSoftTissueComponent } from './scrotum-infection-inflammation/surrounding-soft-tissue/surrounding-soft-tissue.component';
import { ScrotumDifferentialDiagnosisComponent } from './scrotum-infection-inflammation/differential-diagnosis/differential-diagnosis.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    DynamicComponentWrapperModule,
    InfoIconModule,
    NumberInputModule,
    TabViewModule,
    SignalSliderModule,
    TabViewModule,
    SliderNumberTripleInputModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    MaleSexComponent,
    PenisTraumaComponent,
    PenisInfectionComponent,
    PenisMassComponent,
    ScrotumInfectionInflammationComponent,
    MainFeaturesComponent,
    AdditionalFeaturesComponent,
    DifferentialDiagnosisComponent,
    ScrotumTraumaComponent,
    ScrotumCryptorchidismComponent,
    ScrotumMassComponent,
    AdditionalFeaturesScrotumComponent,
    DifferentialDiagnosisScrotumComponent,
    MainFeaturesScrotumComponent,
    SeminalVesiclesMassComponent,
    SeminalVesiclesMassDifferentialDiagnosisComponent,
    SeminalVesiclesMassMainFeaturesComponent,
    SeminalVesiclesInfectionInflammationComponent,
    TesticlesEpididymisComponent,
    SurroundingSoftTissueComponent,
    ScrotumDifferentialDiagnosisComponent
  ]
})
export class MaleSexModule {}
