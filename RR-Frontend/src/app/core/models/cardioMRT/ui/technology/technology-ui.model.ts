import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';

import { SequenceUiModel } from './sequence-ui.model';

import { PharmacologicalStressTypeEnum } from '@enums/cardioMRT';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<SequenceUiModel> {
  // Contrast medium custom controls
  fractionationType: string;

  // Sequences last column
  pharmacologicalStressType: PharmacologicalStressTypeEnum;
  dobutamineInfusionDose: number;
  isSusceptibilityArtifacts: boolean;
  isDarkRimArtifact: boolean;
  imageQualityType: number;

  constructor() {
    super(SequenceUiModel);

    // Contrast medium custom controls
    this.fractionationType = '0';

    // Sequences last column
    this.pharmacologicalStressType = PharmacologicalStressTypeEnum.None;
    this.dobutamineInfusionDose = null;
    this.isSusceptibilityArtifacts = false;
    this.isDarkRimArtifact = false;
    this.imageQualityType = 0;
  }
}
