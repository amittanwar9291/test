import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';
import { SequenceApiModel } from './sequence-api.model';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<SequenceApiModel> {
  isIntravenous: boolean;
  isSusceptibilityArtifacts: boolean;
  isPulsationOrBreathing: boolean;
  constructor() {
    super();
    this.isIntravenous = false;
    this.isSusceptibilityArtifacts = false;
    this.isPulsationOrBreathing = false;
  }
}
