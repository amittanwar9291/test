import { SellarRegionFindingBaseUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-base-ui.model';

export class SellarRegionFindingUiModel extends SellarRegionFindingBaseUiModel {
  extensionSize: number;
  extensionSize2ndPlane: number;
  extensionSize3rdPlane: number;

  constructor() {
    super();
    this.extensionSize = null;
    this.extensionSize2ndPlane = null;
    this.extensionSize3rdPlane = null;
  }
}
