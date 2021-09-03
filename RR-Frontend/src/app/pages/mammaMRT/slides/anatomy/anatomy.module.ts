import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AnatomyComponent } from './anatomy.component';
import { MammaSharedLocalizersModule } from '../../../shared/mamma/localizers/mamma-shared-localizers.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MammaSharedLocalizersModule,
    DropdownModule,
    RadioButtonModule,
    TranslateModule,
    CommonImportsModule
  ],
  declarations: [AnatomyComponent]
})
export class AnatomyModule {}
