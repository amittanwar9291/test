import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { SequenceUiModel } from './sequence-ui.model';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<SequenceUiModel> {
  // Contrast medium custom controls
  isIntravenous: boolean;

  // Therapy column
  isFlowArtifacts: boolean;
  isSusceptibilityArtifacts: boolean;
  isTimingInadequate: boolean;
  isFailedSubtraction: boolean;
  isAliasing: boolean;
  imageQualityType: number;

  constructor() {
    super(SequenceUiModel);

    // Contrast medium custom controls
    this.isIntravenous = false;

    // Therapy column
    this.isFlowArtifacts = false;
    this.isSusceptibilityArtifacts = false;
    this.isTimingInadequate = false;
    this.isFailedSubtraction = false;
    this.isAliasing = false;
    this.imageQualityType = 0;
  }
}
