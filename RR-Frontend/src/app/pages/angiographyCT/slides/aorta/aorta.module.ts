import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AortaComponent } from './aorta.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { AorticModule } from 'app/pages/angiographyCT/shared/aortic.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { AorticAbnormalitiesComponent } from './aortic-abnormalities/aortic-abnormalities.component';
import { ArterioscleroticChangesComponent } from './arteriosclerotic-changes/arteriosclerotic-changes.component';
import { AcuteAortaSyndromeComponent } from './acute-aorta-syndrome/acute-aorta-syndrome.component';
import { EndoleakComponent } from './endoleak/endoleak.component';
import { PreoperativeMeasurementsComponent } from './preoperative-measurements/preoperative-measurements.component';
import { AortitisComponent } from './aortitis/aortitis.component';
import { DilatationAortaComponent } from './dilatation-aorta/dilatation-aorta.component';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    AorticModule,
    FindingColumnModule,
    DropdownModule,
    TabViewModule
  ],
  declarations: [
    AortaComponent,
    AorticAbnormalitiesComponent,
    DilatationAortaComponent,
    ArterioscleroticChangesComponent,
    AcuteAortaSyndromeComponent,
    EndoleakComponent,
    PreoperativeMeasurementsComponent,
    AortitisComponent
  ]
})
export class AortaModule {}
