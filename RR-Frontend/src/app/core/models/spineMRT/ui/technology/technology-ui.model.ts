import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { SequenceUiModel } from './sequence-ui.model';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<SequenceUiModel> {
  // Sequences last column
  isPulsationOrBreathing: boolean;
  isArtifacts: boolean;
  isSusceptibilityArtifacts: boolean;

  constructor() {
    super(SequenceUiModel);

    // Sequences last column
    this.isPulsationOrBreathing = false;
    this.isArtifacts = false;
    this.isSusceptibilityArtifacts = false;
  }
}
