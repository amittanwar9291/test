import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { SternumFractureTypeEnum } from '@enums/thoraxCT/bones/sternum-fracture-type.enum';
import { ManubriumTypeEnum } from '@enums/thoraxCT/bones/manubrium-type.enum';
import { BodySternumTypeEnum } from '@enums/thoraxCT/bones/body-sternum-type.enum';
import { XiphoidTypeEnum } from '@enums/thoraxCT/bones/xiphoid-type.enum';

@Component({
  selector: 'rr-fracture-sternum',
  templateUrl: './fracture-sternum.component.html',
  styleUrls: ['./fracture-sternum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureSternumComponent {
  @Input() model: BonesFindingUiModel;

  sternumFractureTypeEnum = SternumFractureTypeEnum;
  manubriumTypeEnum = ManubriumTypeEnum;
  bodySternumTypeEnum = BodySternumTypeEnum;
  xiphoidTypeEnum = XiphoidTypeEnum;
}
