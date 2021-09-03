import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology.component';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { FormsModule } from '@angular/forms';
import { TechnologyCommonTemplatesModule } from '@commonTemplates/technology/technology-common-templates.module';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';

@NgModule({
  imports: [
    CommonModule,
    CommonImportsModule,
    FormsModule,
    TechnologyCommonTemplatesModule,
    CheckboxModule,
    TranslateModule,
    SliderNumberInputModule
  ],
  declarations: [TechnologyComponent]
})
export class TechnologyModule {}
