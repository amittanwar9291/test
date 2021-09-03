import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';

import { KneeSimpleComponent, KneeOsteoComponent, KneeClassificationComponent } from '../shared';
import { KneeCrossComponent } from './knee-cross/knee-cross.component';
import { KneeCompartmentComponent } from './knee-compartment/knee-compartment.component';
import { KneeDetailsExtendedLargeComponent } from './knee-details-extended/knee-details-extended-large/knee-details-extended-large.component';
import { KneeDetailsExtendedSmallComponent } from './knee-details-extended/knee-details-extended-small/knee-details-extended-small.component';
import { KneeDetailsSimpleLargeComponent } from './knee-details/knee-details-simple-large/knee-details-simple-large.component';
import { KneeDetailsSimpleSmallComponent } from './knee-details/knee-details-simple-small/knee-details-simple-small.component';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, RadioButtonModule, FormsModule, TranslateModule, CommonImportsModule],
  declarations: [
    KneeSimpleComponent,
    KneeCrossComponent,
    KneeOsteoComponent,
    KneeClassificationComponent,
    KneeCompartmentComponent,
    KneeDetailsExtendedLargeComponent,
    KneeDetailsExtendedSmallComponent,
    KneeDetailsSimpleLargeComponent,
    KneeDetailsSimpleSmallComponent
  ],
  exports: [
    KneeCrossComponent,
    KneeClassificationComponent,
    KneeSimpleComponent,
    KneeOsteoComponent,
    KneeCompartmentComponent,
    KneeDetailsExtendedLargeComponent,
    KneeDetailsExtendedSmallComponent,
    KneeDetailsSimpleLargeComponent,
    KneeDetailsSimpleSmallComponent
  ]
})
export class KneeLocalizersModule {}
