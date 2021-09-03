import { FacialSkullFindingBaseUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-base-ui.model';

export class FacialSkullFindingUiModel extends FacialSkullFindingBaseUiModel {
  maxDiameter: number;
  size: number;
  size2ndPlane: number;
  size3rdPlane: number;

  constructor() {
    super();
    this.maxDiameter = null;
    this.size = null;
    this.size2ndPlane = null;
    this.size3rdPlane = null;
  }
}
