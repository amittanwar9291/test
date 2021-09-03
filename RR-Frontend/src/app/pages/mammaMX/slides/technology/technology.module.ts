import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TechnologyComponent } from './technology.component';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { MammaSharedLocalizersModule } from '../../../shared/mamma/localizers/mamma-shared-localizers.module';

@NgModule({
  declarations: [TechnologyComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    CommonImportsModule,
    MammaSharedLocalizersModule,
    FindingColumnModule,
    NumberInputModule
  ]
})
export class TechnologyModule {}
