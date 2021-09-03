import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { HandSimpleComponent } from '../shared';
import { HandDetailsSmallComponent } from './hand-details/small/hand-details-small.component';
import { HandDetailsLargeComponent } from './hand-details/large/hand-details-large.component';
import { HandJointsSmallComponent } from './hand-joints/small/hand-joints-small.component';
import { HandJointsLargeComponent } from './hand-joints/large/hand-joints-large.component';
import { WristSmallComponent } from './wrist-small/wrist-small.component';

@NgModule({
  imports: [CommonModule, RadioButtonModule, FormsModule, TranslateModule, CommonImportsModule, InfoIconModule],
  declarations: [
    HandSimpleComponent,
    HandDetailsSmallComponent,
    HandDetailsLargeComponent,
    HandJointsSmallComponent,
    HandJointsLargeComponent,
    WristSmallComponent
  ],
  exports: [
    HandSimpleComponent,
    HandDetailsSmallComponent,
    HandDetailsLargeComponent,
    HandJointsSmallComponent,
    HandJointsLargeComponent,
    WristSmallComponent
  ]
})
export class HandLocalizersModule {}
