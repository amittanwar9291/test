import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';
import { SequenceApiModel } from './sequence-api.model';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<SequenceApiModel> {
  // First column
  isArmPositionABER: boolean;

  // Contrast medium custom controls
  isIntravenous: boolean;
  isIndirectArthrography: boolean;
  isIntraarticular: boolean;
  dilutionAmount: number;

  // Sequences last column
  isMagicAngleArtifact: boolean;
  isSusceptibilityArtifacts: boolean;

  constructor() {
    super();

    // First column
    this.isArmPositionABER = false;

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
