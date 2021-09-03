import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { KneeLocalizersModule } from '../../shared/knee-localizers.module';
import { OsteochondralInterfaceComponent } from './osteochondral-interface.component';
import { OsteoarthrosisComponent } from './osteoarthrosis/osteoarthrosis.component';
import { TraumaChondralLesionComponent } from './trauma-chondral-lesion/trauma-chondral-lesion.component';
import { TraumaSubchondralFractureComponent } from './trauma-subchondral-fracture/trauma-subchondral-fracture.component';
import { TraumaSubchondralInsufficiencyFractureComponent } from './trauma-subchondral-insufficiency-fracture/trauma-subchondral-insufficiency-fracture.component';
import { TraumaOsteochondralFractureComponent } from './trauma-osteochondral-fracture/trauma-osteochondral-fracture.component';
import { OsteochondrosisDissecansComponent } from './osteochondrosis-dissecans/osteochondrosis-dissecans.component';
import { AvascularNecrosisComponent } from './avascular-necrosis/avascular-necrosis.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    FindingColumnModule,
    KneeLocalizersModule,
    CommonImportsModule,
    InfoIconModule,
    NumberInputModule
  ],
  declarations: [
    OsteochondralInterfaceComponent,
    OsteoarthrosisComponent,
    TraumaChondralLesionComponent,
    TraumaSubchondralFractureComponent,
    TraumaSubchondralInsufficiencyFractureComponent,
    TraumaOsteochondralFractureComponent,
    OsteochondrosisDissecansComponent,
    AvascularNecrosisComponent
  ]
})
export class OsteochondralInterfaceModule {}
