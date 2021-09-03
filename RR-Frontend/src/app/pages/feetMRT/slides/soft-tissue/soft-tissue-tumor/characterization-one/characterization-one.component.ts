import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  DemarctionTypeEnum,
  FormTypeEnum,
  GrowthPatternsTypeEnum,
  HomogeneityTypeEnum,
  InterdigitalSpaceTypeEnum
} from '@enums/feetMRT/soft-tissue';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: SoftTissueFindingUiModel;

  demarctionTypeEnum: typeof DemarctionTypeEnum;
  homogeneityTypeEnum: typeof HomogeneityTypeEnum;
  formTypeEnum: typeof FormTypeEnum;
  growthPatternsTypeEnum: typeof GrowthPatternsTypeEnum;
  interdigitalSpaceTypeEnum: typeof InterdigitalSpaceTypeEnum;

  constructor() {
    this.demarctionTypeEnum = DemarctionTypeEnum;
    this.homogeneityTypeEnum = HomogeneityTypeEnum;
    this.formTypeEnum = FormTypeEnum;
    this.growthPatternsTypeEnum = GrowthPatternsTypeEnum;
    this.interdigitalSpaceTypeEnum = InterdigitalSpaceTypeEnum;
  }
}
