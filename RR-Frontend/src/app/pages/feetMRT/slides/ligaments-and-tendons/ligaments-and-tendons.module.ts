import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { LigamentaComponent } from './ligamenta/ligamenta.component';
import { TendiophatyComponent } from './tendiophaty/tendiophaty.component';
import { LigamentsAndTendonsComponent } from './ligaments-and-tendons.component';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { DropdownModule } from 'primeng/dropdown';
import { AchillesTendonComponent } from './tendiophaty/achilles-tendon/achilles-tendon.component';
import { TendonOfThePosteriorTibialisMuscleComponent } from './tendiophaty/tendon-of-the-posterior-tibialis-muscle/tendon-of-the-posterior-tibialis-muscle.component';
import { TendonOfMFlexorDigitorumLongusComponent } from './tendiophaty/tendon-of-m-flexor-digitorum-longus/tendon-of-m-flexor-digitorum-longus.component';
import { TendonOfMFlexorHallucisLongusComponent } from './tendiophaty/tendon-of-m-flexor-hallucis-longus/tendon-of-m-flexor-hallucis-longus.component';
import { TendonOfTheAnteriorTibialisMuscleComponent } from './tendiophaty/tendon-of-the-anterior-tibialis-muscle/tendon-of-the-anterior-tibialis-muscle.component';
import { TendonOfMPeroneusLongusBrevisComponent } from './tendiophaty/tendon-of-m-peroneus-longus-brevis/tendon-of-m-peroneus-longus-brevis.component';
import { FeetLocalizersModule } from '../../shared/feet-localizers.module';

@NgModule({
  declarations: [
    LigamentsAndTendonsComponent,
    LigamentaComponent,
    TendiophatyComponent,
    AchillesTendonComponent,
    TendonOfThePosteriorTibialisMuscleComponent,
    TendonOfMFlexorDigitorumLongusComponent,
    TendonOfMFlexorHallucisLongusComponent,
    TendonOfTheAnteriorTibialisMuscleComponent,
    TendonOfMPeroneusLongusBrevisComponent
  ],
  imports: [
    CommonModule,
    RadioButtonModule,
    FormsModule,
    TranslateModule,
    FindingColumnModule,
    CheckboxModule,
    CommonImportsModule,
    NumberInputModule,
    TabViewModule,
    DropdownModule,
    FeetLocalizersModule
  ]
})
export class LigamentsAndTendonsModule {}
