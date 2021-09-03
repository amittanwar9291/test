import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';

import { SequenceUiModel } from './sequence-ui.model';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<SequenceUiModel> {
  // Contrast medium custom controls
  isAutomatedCAInjection: boolean;
  isComputerAidedAnalysisOfCADynamics: boolean;

  // Sequences last column
  isPulsationOrBreathing: boolean;
  isSusceptibilityArtifacts: boolean;
  isIncorrectSubtraction: boolean;

  constructor() {
    super(SequenceUiModel);

    // Contrast medium custom controls
    this.isAutomatedCAInjection = false;
    this.isComputerAidedAnalysisOfCADynamics = false;

    // Sequences last column
    this.isPulsationOrBreathing = false;
    this.isSusceptibilityArtifacts = false;
    this.isIncorrectSubtraction = false;
  }
}
