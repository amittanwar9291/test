import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';

export class SequenceUiModel extends SequenceUiBaseModel {
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
