import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';

import { SequenceApiModel } from './sequence-api.model';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<SequenceApiModel> {
  // Contrast medium custom controls
  isAutomatedCAInjection: boolean;
  isComputerAidedAnalysisOfCADynamics: boolean;

  // Sequences last column
  isPulsationOrBreathing: boolean;
  isSusceptibilityArtifacts: boolean;
  isIncorrectSubtraction: boolean;

  constructor() {
    super();

    // Contrast medium custom controls
    this.isAutomatedCAInjection = false;
    this.isComputerAidedAnalysisOfCADynamics = false;

    // Sequences last column
    this.isPulsationOrBreathing = false;
    this.isSusceptibilityArtifacts = false;
    this.isIncorrectSubtraction = false;
  }
}
