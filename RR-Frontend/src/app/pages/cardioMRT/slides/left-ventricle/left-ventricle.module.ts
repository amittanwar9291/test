import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CardioLocalizersModule } from '../../shared/cardio-localizers.module';

import { LeftVentricleComponent } from './left-ventricle.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { CardioFourCirclesComponent } from './cardio-four-circles/cardio-four-circles.component';
import { CardioThreeCirclesComponent } from './cardio-three-circles/cardio-three-circles.component';
import { CardioLocalizerEditDialogsModule } from './cardio-edit-dialogs/cardio-localizer-edit-dialogs.module';
import { TabViewModule } from 'primeng/tabview';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    CheckboxModule,
    DropdownModule,
    RadioButtonModule,
    CardioLocalizersModule,
    CommonImportsModule,
    CardioLocalizerEditDialogsModule,
    TabViewModule,
    ReferencePictureModule,
    NumberInputModule
  ],
  declarations: [LeftVentricleComponent, CardioFourCirclesComponent, CardioThreeCirclesComponent]
})
export class LeftVentricleModule {}
