import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';
import { SequenceApiModel } from './sequence-api.model';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<SequenceApiModel> {
  // Contrast medium custom controls
  isIntravenous: boolean;

  // Therapy column
  isFlowArtifacts: boolean;
  isSusceptibilityArtifacts: boolean;
  isTimingInadequate: boolean;
  isFailedSubtraction: boolean;
  isAliasing: boolean;
  imageQualityType: string;

  constructor() {
    super();

    // Contrast medium custom controls
    this.isIntravenous = false;

    // Therapy column
    this.isFlowArtifacts = false;
    this.isSusceptibilityArtifacts = false;
    this.isTimingInadequate = false;
    this.isFailedSubtraction = false;
    this.isAliasing = false;
    this.imageQualityType = 'None';
  }
}
