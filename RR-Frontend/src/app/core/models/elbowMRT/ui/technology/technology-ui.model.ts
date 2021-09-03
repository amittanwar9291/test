import { SequenceUiModel } from '@models/elbowMRT/ui/technology/sequence-ui.model';
import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<SequenceUiModel> {
  // Sequences first column custom controls
  isFABSPosition: boolean;

  // Contrast medium custom controls
  isIntravenous: boolean;
  isIndirectArthrography: boolean;
  isIntraarticular: boolean;
  dilutionAmount: number;

  // Sequences last column
  isMagicAngleArtifact: boolean;
  isSusceptibilityArtifacts: boolean;

  constructor() {
    super(SequenceUiModel);

    // Sequences first column custom controls
    this.isFABSPosition = false;

    // Contrast medium custom controls
    this.isIntravenous = false;
    this.isIndirectArthrography = false;
    this.isIntraarticular = false;
    this.dilutionAmount = null;

    // Sequences last column
    this.isMagicAngleArtifact = false;
    this.isSusceptibilityArtifacts = false;
  }
}
