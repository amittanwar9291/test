import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { LymphNodesComponent } from './lymph-nodes.component';
import { AxillaryLymphNodeComponent } from './axillary-lymph-node/axillary-lymph-node.component';
import { CervicalLymphNodeComponent } from './cervical-lymph-node/cervical-lymph-node.component';
import { IntramammaryLymphNodeComponent } from './intramammary-lymph-node/intramammary-lymph-node.component';
import { ParasternalLymphNodeComponent } from './parasternal-lymph-node/parasternal-lymph-node.component';
import { SupraclavicularLymphNodeComponent } from './supraclavicular-lymph-node/supraclavicular-lymph-node.component';
import { SideComponent } from './side/side.component';
import { SideSimpleComponent } from './side/side-simple/side-simple.component';
import { SideSimpleLeftComponent } from './side/side-simple/side-simple-left/side-simple-left.component';
import { SideSimpleRightComponent } from './side/side-simple/side-simple-right/side-simple-right.component';
import { SideWithClassificationComponent } from './side/side-with-classification/side-with-classification.component';
import { SideWithClassificationLeftComponent } from './side/side-with-classification/side-with-classification-left/side-with-classification-left.component';
import { SideWithClassificationRightComponent } from './side/side-with-classification/side-with-classification-right/side-with-classification-right.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    FindingColumnModule,
    NumberInputModule
  ],
  declarations: [
    LymphNodesComponent,
    AxillaryLymphNodeComponent,
    CervicalLymphNodeComponent,
    IntramammaryLymphNodeComponent,
    ParasternalLymphNodeComponent,
    SupraclavicularLymphNodeComponent,
    SideComponent,
    SideSimpleComponent,
    SideSimpleLeftComponent,
    SideSimpleRightComponent,
    SideWithClassificationComponent,
    SideWithClassificationLeftComponent,
    SideWithClassificationRightComponent
  ]
})
export class LymphNodesModule {}
