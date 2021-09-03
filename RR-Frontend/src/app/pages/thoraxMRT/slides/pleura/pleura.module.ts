import { ChestWallMainCharacteristicsComponent } from './chest-wall/chest-wall-main-characteristics/chest-wall-main-characteristics.component';
import { ChestWallDifferentialDiagnosisComponent } from './chest-wall/chest-wall-differential-diagnosis/chest-wall-differential-diagnosis.component';
import { ChestWallAdditionalCharacteristicsTwoComponent } from './chest-wall/chest-wall-additional-characteristics-two/chest-wall-additional-characteristics-two.component';
import { PneumothoraxComponent } from './pneumothorax/pneumothorax.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { PleuraComponent } from './pleura.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { PleuralEffusionComponent } from './pleural-effusion/pleural-effusion.component';
import { MainCharacteristicsTabComponent } from './pleural-thickening-mass/main-characteristics-tab/main-characteristics-tab.component';
import { AdditionalCharacteristicsTabComponent } from './pleural-thickening-mass/additional-characteristics-tab/additional-characteristics-tab.component';
import { DifferentialDiagnosisTabComponent } from './pleural-thickening-mass/differential-diagnosis-tab/differential-diagnosis-tab.component';
import { PleuralThickeningMassComponent } from './pleural-thickening-mass/pleural-thickening-mass.component';
import { LymphNodesComponent } from './lymph-nodes/lymph-nodes.component';
import { LiverGallBladderComponent } from './liver-gall-bladder/liver-gall-bladder.component';
import { PancreasComponent } from './pancreas/pancreas.component';
import { KidneyAdrenalGlandComponent } from './kidney-adrenal-gland/kidney-adrenal-gland.component';
import { SpleenLymphnodesHiatusherniaComponent } from './spleen-lymphnodes-hiatushernia/spleen-lymphnodes-hiatushernia.component';
import { AscitesComponent } from './ascites/ascites.component';
import { MammaComponent } from './mamma/mamma.component';
import { MammaSharedLocalizersModule } from '@sharedPages/mamma/localizers/mamma-shared-localizers.module';
import { ChestWallComponent } from './chest-wall/chest-wall.component';
import { ChestWallAdditionalCharacteristicsOneComponent } from './chest-wall/chest-wall-additional-characteristics-one/chest-wall-additional-characteristics-one.component';
import { SpineLocalizersModule } from 'app/pages/spineMRT/shared/spine-localizers.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { ThoraxSharedLocalizersModule } from '@sharedPages/thorax/localizers/thorax-shared-localizers.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

@NgModule({
  declarations: [
    PleuraComponent,
    PleuralEffusionComponent,
    MainCharacteristicsTabComponent,
    AdditionalCharacteristicsTabComponent,
    DifferentialDiagnosisTabComponent,
    PleuralThickeningMassComponent,
    PneumothoraxComponent,
    LymphNodesComponent,
    LiverGallBladderComponent,
    PancreasComponent,
    KidneyAdrenalGlandComponent,
    SpleenLymphnodesHiatusherniaComponent,
    AscitesComponent,
    MammaComponent,
    ChestWallComponent,
    ChestWallDifferentialDiagnosisComponent,
    ChestWallMainCharacteristicsComponent,
    ChestWallAdditionalCharacteristicsOneComponent,
    ChestWallAdditionalCharacteristicsTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    RadioButtonModule,
    FindingColumnModule,
    NumberInputModule,
    CheckboxModule,
    TabViewModule,
    DropdownModule,
    CommonImportsModule,
    InfoIconModule,
    DifferentialDiagnosisDropdownModule,
    MammaSharedLocalizersModule,
    SpineLocalizersModule,
    SignalSliderModule,
    ThoraxSharedLocalizersModule,
    ReferencePictureModule
  ]
})
export class PleuraModule {}
