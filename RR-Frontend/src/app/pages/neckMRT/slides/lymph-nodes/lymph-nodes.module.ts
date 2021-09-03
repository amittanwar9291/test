import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LymphNodesComponent } from './lymph-nodes.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { LymphNodesFindingComponent } from './lymph-nodes-finding/lymph-nodes-finding.component';

@NgModule({
  declarations: [LymphNodesComponent, LymphNodesFindingComponent],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CommonImportsModule,
    FindingColumnModule,
    CheckboxModule,
    TranslateModule,
    NumberInputModule,
    ReferencePictureModule
  ]
})
export class LymphNodesModule {}
