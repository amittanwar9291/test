import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';

import { SequenceApiModel } from './sequence-api.model';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<SequenceApiModel> {
  // Contrast medium custom controls
  isIntravenous: boolean;
  isIndirectArthrography: boolean;
  isIntraarticular: boolean;
  dilutionAmount: number;

  // Sequences last column
  isSusceptibilityArtifacts: boolean;
  isMagicAngleArtifact: boolean;

  constructor() {
    super();

    // Contrast medium custom controls
    this.isIntravenous = false;
    this.isIndirectArthrography = false;
    this.isIntraarticular = false;
    this.dilutionAmount = null;

    // Sequences last column
    this.isSusceptibilityArtifacts = false;
    this.isMagicAngleArtifact = false;
  }
}
