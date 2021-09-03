import { HandDetails } from '@models/handMRT/ui/hand/localizers/hand-details.model';
import { QuantityTypeEnum } from '@enums/handMRT/soft-tissue/quantity-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HandJoints } from '@models/handMRT/ui/hand/localizers/hand-joints.model';
import { SoftTissueDifferentialDiagnosisTypeEnum } from '@enums/handMRT/soft-tissue/soft-tissue-differential-diagnosis-type.enum';
import { SoftTissueFindingBaseUiModel } from './soft-tissue-finding-base-ui.model';

export class SoftTissueFindingUiModel extends SoftTissueFindingBaseUiModel {
  descriptionType: DescriptionTypeEnum;

  handLocationsLocalizer: HandDetails;
  handJointsLocalizer: HandJoints;
  quantityType: QuantityTypeEnum;

  maxDiameterInMm: number;
  diameterInMm: number;
  size: number;
  secondPlane: number;
  thirdPlane: number;

  constructor() {
    super();

    this.descriptionType = DescriptionTypeEnum.None;

    this.handLocationsLocalizer = new HandDetails();
    this.handJointsLocalizer = new HandJoints();
    this.quantityType = QuantityTypeEnum.None;

    this.maxDiameterInMm = null;
    this.diameterInMm = null;
    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;
  }
}
