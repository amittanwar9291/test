import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CourseComponent } from './course.component/course.component';
import { ClassificationComponent } from './classification.component/classification.component';
import { LiradsComponent } from './lirads.component/lirads.component';
import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';

@NgModule({
  declarations: [SummaryComponent, CourseComponent, ClassificationComponent, LiradsComponent],
  imports: [
    CommonModule,
    PresetListModule,
    CommonImportsModule,
    TranslateModule,
    FormsModule,
    TabViewModule,
    CheckboxModule,
    DropdownModule,
    RadioButtonModule,
    SliderNumberInputModule
  ]
})
export class SummaryModule {}
