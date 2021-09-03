import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  DegreeTypeEnum,
  CartilageDistributionTypeEnum,
  SideTypeEnum,
  GeneralTypeEnum,
  VallotonKellgrenMRadaptedTypeEnum
} from '@enums/hipMRT/bones';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-coxarthrosis',
  templateUrl: './coxarthrosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CoxarthrosisComponent {
  @Input() model: BonesFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  sideType = SideTypeEnum;
  degreeType = DegreeTypeEnum;
  cartilageDistributionType = CartilageDistributionTypeEnum;
  generalType = GeneralTypeEnum;
  vallotonKellgrenMRadaptedType = VallotonKellgrenMRadaptedTypeEnum;
}
