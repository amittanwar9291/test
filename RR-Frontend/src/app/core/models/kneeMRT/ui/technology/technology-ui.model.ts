import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';

import { SequenceUiModel } from './sequence-ui.model';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<SequenceUiModel> {
  // Contrast medium custom controls
  isIntravenous: boolean;
  isIndirectArthrography: boolean;
  isIntraarticular: boolean;
  dilutionAmount: number;

  // Sequences last column
  isSusceptibilityArtifacts: boolean;
  isMagicAngleArtifact: boolean;

  constructor() {
    super(SequenceUiModel);

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
