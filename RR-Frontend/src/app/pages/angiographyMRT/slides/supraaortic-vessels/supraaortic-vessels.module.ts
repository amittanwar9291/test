import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { SupraaorticVesselsComponent } from './supraaortic-vessels.component';
import { CerebralVeinsComponent } from './cerebral-veins/cerebral-veins.component';
import { ArteryMultiComponent } from './artery-multi/artery-multi.component';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { AnatomicVariantsComponent } from './anatomic-variants/anatomic-variants.component';
import { AngiographySharedLocalizersModule } from '@sharedPages/angiography/localizers/angiography-shared-localizers.module';

@NgModule({
  declarations: [SupraaorticVesselsComponent, CerebralVeinsComponent, ArteryMultiComponent, AnatomicVariantsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    InfoIconModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    TabViewModule,
    FindingColumnModule,
    AngiographySharedLocalizersModule
  ]
})
export class SupraaorticVesselsModule {}
