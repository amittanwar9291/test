import { SpleenFindingBaseUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-base-ui.model';

export class SpleenFindingUiModel extends SpleenFindingBaseUiModel {
  // Common
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;

  constructor() {
    super();

    // Common
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
  }
}
