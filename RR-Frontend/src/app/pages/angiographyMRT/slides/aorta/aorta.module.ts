import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { AortaComponent } from './aorta.component';
import { AortenanomalienComponent } from './aortenanomalien/aortenanomalien.component';
import { AorticAneurysmComponent } from './aortic-aneurysm/aortic-aneurysm.component';
import { ArterioscleroticChangesComponent } from './arteriosclerotic-changes/arteriosclerotic-changes.component';
import { AcuteAorticSyndromeComponent } from './acute-aortic-syndrome/acute-aortic-syndrome.component';
import { AortitisComponent } from './aortitis/aortitis.component';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { AorticModule } from '../../shared/aortic.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AortaComponent,
    AortenanomalienComponent,
    AorticAneurysmComponent,
    ArterioscleroticChangesComponent,
    AcuteAorticSyndromeComponent,
    AortitisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    InfoIconModule,
    AorticModule,
    FindingColumnModule,
    DropdownModule,
    TabViewModule
  ]
})
export class AortaModule {}
