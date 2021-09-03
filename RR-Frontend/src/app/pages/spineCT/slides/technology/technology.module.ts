import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { TechnologyCommonTemplatesModule } from '@commonTemplates/technology/technology-common-templates.module';
import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    CommonImportsModule,
    PresetListModule,
    TechnologyCommonTemplatesModule,
    SliderNumberInputModule
  ],
  declarations: [TechnologyComponent]
})
export class TechnologyModule {}
