import { SequenceApiBaseModel } from '@models/shared/newTechnology/api/sequence-api-base.model';

export class SequenceApiModel extends SequenceApiBaseModel {
  // First column
  siliconeSensitive: boolean;
  siliconeSuppressing: boolean;

  // Second column
  isDynamicsFollowingGdApplication: boolean;
  isSubtraction: boolean;
  isLateStage: boolean;

  constructor() {
    super();

    // First column
    this.siliconeSensitive = false;
    this.siliconeSuppressing = false;

    // Second column
    this.isDynamicsFollowingGdApplication = false;
    this.isSubtraction = false;
    this.isLateStage = false;
  }
}
