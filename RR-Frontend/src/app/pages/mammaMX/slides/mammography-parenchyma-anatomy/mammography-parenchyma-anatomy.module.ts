import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { MammaSharedLocalizersModule } from '@sharedPages/mamma/localizers/mamma-shared-localizers.module';
import { MammographyParenchymaAnatomyComponent } from './mammography-parenchyma-anatomy.component';

@NgModule({
  declarations: [MammographyParenchymaAnatomyComponent],
  imports: [CommonModule, FormsModule, RadioButtonModule, CheckboxModule, MammaSharedLocalizersModule, TranslateModule, CommonImportsModule]
})
export class MammographyParenchymaAnatomyModule {}
