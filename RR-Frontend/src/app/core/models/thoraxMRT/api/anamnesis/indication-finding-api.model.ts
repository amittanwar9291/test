import { FindingBase } from '@models/shared/finding/finding.base';
import { IndicationTypeEnum } from '@enums/thoraxMRT/anamnesis/indication-type.enum';
import { DetailsTypeEnum } from '@enums/thoraxMRT/anamnesis/details-type.enum';
import { ChestWallTypeEnum } from '@enums/thoraxMRT/anamnesis/chest-wall-type.enum';

export class IndicationFindingApiModel extends FindingBase {
  indicationFindingType: IndicationTypeEnum;
  detailsType: DetailsTypeEnum;
  chestWallType: ChestWallTypeEnum;
  isSternoclavicularJoint: boolean;
  isRight: boolean;
  isLeft: boolean;

  constructor() {
    super();
    this.indicationFindingType = IndicationTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;
    this.chestWallType = ChestWallTypeEnum.None;
    this.isSternoclavicularJoint = false;
    this.isRight = false;
    this.isLeft = false;
  }
}
