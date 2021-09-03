import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AbdomenComponent } from './abdomen.component';
import { RenalArteryComponent } from './renal-artery/renal-artery.component';
import { KidneyVeinComponent } from './kidney-vein/kidney-vein.component';
import { MesentericVesselsComponent } from './mesenteric-vessels/mesenteric-vessels.component';
import { PortalVenousSystemComponent } from './portal-venous-system/portal-venous-system.component';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

@NgModule({
  declarations: [AbdomenComponent, RenalArteryComponent, KidneyVeinComponent, MesentericVesselsComponent, PortalVenousSystemComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    FindingColumnModule
  ]
})
export class AbdomenModule {}
