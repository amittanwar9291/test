import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { SequenceUiModel } from '@models/feetMRT/ui/technology/sequence-ui.model';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<SequenceUiModel> {
  // Contrast medium custom controls
  isIntravenous: boolean;
  isIndirectArthrography: boolean;
  isIntraarticular: boolean;
  dilutionAmount: number;

  // Therapy column
  isMagicAngleArtifact: boolean;
  isSusceptibilityArtifacts: boolean;

  constructor() {
    super(SequenceUiModel);

    // Contrast medium custom controls
    this.isIntravenous = false;
    this.isIndirectArthrography = false;
    this.isIntraarticular = false;
    this.dilutionAmount = null;

    // Therapy column
    this.isMagicAngleArtifact = false;
    this.isSusceptibilityArtifacts = false;
  }
}
