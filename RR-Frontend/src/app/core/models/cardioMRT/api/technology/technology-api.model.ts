import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';

import { SequenceApiModel } from './sequence-api.model';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<SequenceApiModel> {
  // Contrast medium custom controls
  fractionationType: string;

  // Sequences last column
  pharmacologicalStressType: string;
  dobutamineInfusionDose: number;
  isSusceptibilityArtifacts: boolean;
  isDarkRimArtifact: boolean;
  imageQualityType: string;

  constructor() {
    super();

    // Contrast medium custom controls
    this.fractionationType = 'None';

    // Sequences last column
    this.pharmacologicalStressType = 'None';
    this.dobutamineInfusionDose = null;
    this.isSusceptibilityArtifacts = false;
    this.isDarkRimArtifact = false;
    this.imageQualityType = 'None';
  }
}
