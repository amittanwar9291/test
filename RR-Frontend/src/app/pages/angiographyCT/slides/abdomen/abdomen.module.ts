import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbdomenComponent } from './abdomen.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { RenalArteryComponent } from './renal-artery/renal-artery.component';
import { RenalVeinComponent } from './renal-vein/renal-vein.component';
import { MesentericVesselsComponent } from './mesenteric-vessels/mesenteric-vessels.component';
import { LiverVeinsComponent } from './liver-veins/liver-veins.component';
import { TabViewModule } from 'primeng/tabview';
import { LocalizationStenosisComponent } from './mesenteric-vessels/localization-stenosis/localization-stenosis.component';
import { AssociatedFindingsComponent } from './mesenteric-vessels/associated-findings/associated-findings.component';
import { DropdownModule } from 'primeng/dropdown';

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
    TabViewModule,
    DropdownModule
  ],
  declarations: [
    AbdomenComponent,
    RenalArteryComponent,
    RenalVeinComponent,
    MesentericVesselsComponent,
    LiverVeinsComponent,
    LocalizationStenosisComponent,
    AssociatedFindingsComponent
  ]
})
export class AbdomenModule {}
