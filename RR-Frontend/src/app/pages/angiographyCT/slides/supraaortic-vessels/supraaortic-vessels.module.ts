import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupraaorticVesselsComponent } from './supraaortic-vessels.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CerebralVeinsComponent } from './cerebral-veins/cerebral-veins.component';
import { ArteryMultiComponent } from './artery-multi/artery-multi.component';
import { AnatomicVariantsComponent } from './anatomic-variants/anatomic-variants.component';
import { AngiographySharedLocalizersModule } from '@sharedPages/angiography/localizers/angiography-shared-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    InfoIconModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    FindingColumnModule,
    AngiographySharedLocalizersModule
  ],
  declarations: [SupraaorticVesselsComponent, CerebralVeinsComponent, ArteryMultiComponent, AnatomicVariantsComponent]
})
export class SupraaorticVesselsModule {}
