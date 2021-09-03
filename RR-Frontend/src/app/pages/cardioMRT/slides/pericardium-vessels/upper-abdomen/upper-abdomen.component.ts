import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import {
  BenignTypeEnum,
  DiffuseLiverLesionTypeEnum,
  EnlargedAbdLymphNodesTypeEnum,
  GradingMaxTypeEnum,
  OtherFocalTypeEnum,
  UnknownTypeEnum
} from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-upper-abdomen',
  templateUrl: './upper-abdomen.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class UpperAbdomenComponent {
  @Input() model: PericardiumVesselsFindingUiModel;

  upperAbdomenValidationGroup =
    'isFocalLiverLesions isDiffuseLiverLesion isCholecystolithiasis isSplenomegaly isHiatalHernia isMassAdrenalGland isFocalLesionOfKidney isHydronephrosis isEnlargedAbdLymphNodes';

  otherFocalType: typeof OtherFocalTypeEnum;
  benignType: typeof BenignTypeEnum;
  diffuseLiverLesionType: typeof DiffuseLiverLesionTypeEnum;
  unknownType: typeof UnknownTypeEnum;
  gradingMaxType: typeof GradingMaxTypeEnum;
  enlargedAbdLymphNodesType: typeof EnlargedAbdLymphNodesTypeEnum;

  constructor() {
    this.otherFocalType = OtherFocalTypeEnum;
    this.benignType = BenignTypeEnum;
    this.diffuseLiverLesionType = DiffuseLiverLesionTypeEnum;
    this.unknownType = UnknownTypeEnum;
    this.gradingMaxType = GradingMaxTypeEnum;
    this.enlargedAbdLymphNodesType = EnlargedAbdLymphNodesTypeEnum;
  }
}
