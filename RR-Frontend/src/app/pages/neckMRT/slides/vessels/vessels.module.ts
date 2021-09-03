import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VesselsComponent } from './vessels.component';
import { FormsModule } from '@angular/forms';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AxillaryArteryComponent } from './axillary-artery/axillary-artery.component';
import { BrachiocephalicTrunkComponent } from './brachiocephalic-trunk/brachiocephalic-trunk.component';
import { CerebralVeinsComponent } from './cerebral-veins/cerebral-veins.component';
import { CircleOfWillisComponent } from './circle-of-willis/circle-of-willis.component';
import { CommonCarotidArteryComponent } from './common-carotid-artery/common-carotid-artery.component';
import { ExternalCarotidArteryComponent } from './external-carotid-artery/external-carotid-artery.component';
import { InternalCarotidArteryComponent } from './internal-carotid-artery/internal-carotid-artery.component';
import { SubclavianArteryComponent } from './subclavian-artery/subclavian-artery.component';
import { VeinsComponent } from './veins/veins.component';
import { VertebralArteryComponent } from './vertebral-artery/vertebral-artery.component';
import { AngiographySharedLocalizersModule } from '@sharedPages/angiography/localizers/angiography-shared-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CommonImportsModule,
    FindingColumnModule,
    NumberInputModule,
    CheckboxModule,
    TranslateModule,
    AngiographySharedLocalizersModule
  ],
  declarations: [
    VesselsComponent,
    AxillaryArteryComponent,
    BrachiocephalicTrunkComponent,
    CerebralVeinsComponent,
    CircleOfWillisComponent,
    CommonCarotidArteryComponent,
    ExternalCarotidArteryComponent,
    InternalCarotidArteryComponent,
    SubclavianArteryComponent,
    VeinsComponent,
    VertebralArteryComponent
  ]
})
export class VesselsModule {}
