import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { CartilageLigamentsCapsuleComponent } from './cartilage-ligaments-capsule.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { OsteochondralLesionComponent } from './osteochondral-lesion/osteochondral-lesion.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CartilageLesionComponent } from './cartilage-lesion/cartilage-lesion.component';
import { LigamentaComponent } from './ligamenta/ligamenta.component';
import { CapsuleComponent } from './capsule/capsule.component';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

@NgModule({
  declarations: [
    CartilageLigamentsCapsuleComponent,
    OsteochondralLesionComponent,
    CartilageLesionComponent,
    LigamentaComponent,
    CapsuleComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CommonImportsModule,
    InfoIconModule,
    NumberInputModule,
    RadioButtonModule,
    FormsModule,
    CheckboxModule,
    FindingColumnModule
  ]
})
export class CartilageLigamentsCapsuleModule {}
