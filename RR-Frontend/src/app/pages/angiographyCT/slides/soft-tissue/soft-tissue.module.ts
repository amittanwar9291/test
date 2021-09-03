import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftTissueComponent } from './soft-tissue.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { SupraaorticComponent } from './supraaortic.component/supraaortic.component';
import { ThoracicComponent } from './thoracic.component/thoracic.component';
import { AbdominalComponent } from './abdominal.component/abdominal.component';
import { ExtremitiesComponent } from './extremities.component/extremities.component';
import { LymphadenopathyComponent } from './lymphadenopathy.component/lymphadenopathy.component';
import { DropdownModule } from 'primeng/dropdown';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { SpineSharedLocalizersModule } from '@sharedPages/spine/localizers/spine-shared-localizers.module';
import { SpineLocalizersModule } from '../../../spineMRT/shared/spine-localizers.module';
import { ThoraxSharedLocalizersModule } from '@sharedPages/thorax/localizers/thorax-shared-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    FindingColumnModule,
    DropdownModule,
    SpineSharedLocalizersModule,
    SpineLocalizersModule,
    ThoraxSharedLocalizersModule
  ],
  declarations: [
    SoftTissueComponent,
    SupraaorticComponent,
    ThoracicComponent,
    AbdominalComponent,
    ExtremitiesComponent,
    LymphadenopathyComponent
  ]
})
export class SoftTissueModule {}
