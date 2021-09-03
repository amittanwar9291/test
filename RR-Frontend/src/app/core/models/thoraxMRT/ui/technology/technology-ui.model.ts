import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { SequenceUiModel } from './sequence-ui.model';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<SequenceUiModel> {
  isIntravenous: boolean;
  isSusceptibilityArtifacts: boolean;
  isPulsationOrBreathing: boolean;

  constructor() {
    super(SequenceUiModel);

    this.isIntravenous = false;
    this.isSusceptibilityArtifacts = false;
    this.isPulsationOrBreathing = false;
  }
}
