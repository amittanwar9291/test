import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';
import { SequenceApiModel } from './sequence-api.model';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<SequenceApiModel> {
  // Sequences last column
  isPulsationOrBreathing: boolean;
  isArtifacts: boolean;
  isSusceptibilityArtifacts: boolean;

  constructor() {
    super();

    // Sequences last column
    this.isPulsationOrBreathing = false;
    this.isArtifacts = false;
    this.isSusceptibilityArtifacts = false;
  }
}
