import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';

import { CommonImportsModule } from '../../../common-imports/common-imports.module';
import { CardModule } from '../../card/card.module';
import { CmReinforcedCardComponent } from './cm-reinforced-card/cm-reinforced-card.component';
import { SequencesCardComponent } from './sequences-card/sequences-card.component';
import { CspNavCardComponent } from './csp-nav-card/csp-nav-card.component';

@NgModule({
  imports: [FormsModule, CommonImportsModule, TranslateModule, RadioButtonModule, CommonModule, CardModule],
  declarations: [CmReinforcedCardComponent, SequencesCardComponent, CspNavCardComponent],
  exports: [CmReinforcedCardComponent, SequencesCardComponent, CspNavCardComponent]
})
export class CardsNavigationModule {}
