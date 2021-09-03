import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';
import { SequenceUiModel } from '@models/hipMRT/ui/technology/sequence-ui.model';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<SequenceUiModel> {
  // Contrast medium custom controls
  isIntravenous: boolean;
  isIndirectArthrography: boolean;
  isIntraarticular: boolean;
  dilutionAmount: number;

  // Therapy column
  isMagicAngleArtifact: boolean;
  isSusceptibilityArtifacts: boolean;

  constructor() {
    super();

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
