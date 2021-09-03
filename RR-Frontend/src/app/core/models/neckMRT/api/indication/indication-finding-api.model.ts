import { FindingBase } from '@models/shared/finding/finding.base';
import {
  IndicationTypeEnum,
  AbscessTypeEnum,
  ArterialPathologyTypeEnum,
  GoiterTypeEnum,
  MetabolismTypeEnum,
  TumorEntityTypeEnum,
  DetailsTypeEnum
} from '@enums/neckMRT/indication';

export class IndicationFindingApiModel extends FindingBase {
  indicationType: IndicationTypeEnum;
  isRight: boolean;
  isLeft: boolean;
  isSolidFood: boolean;
  isLiquids: boolean;
  isStatusPostAspiration: boolean;
  goiterType: GoiterTypeEnum;
  metabolismType: MetabolismTypeEnum;
  isNasopharynx: boolean;
  isOropharynx: boolean;
  isHypopharynx: boolean;
  isLarynx: boolean;
  isParotidSpace: boolean;
  tumorEntityType: TumorEntityTypeEnum;
  detailsType: DetailsTypeEnum;
  monthOfPostoperativeImaging: number;
  yearOfPostoperativeImaging: number;
  abscessType: AbscessTypeEnum;
  arterialPathologyType: ArterialPathologyTypeEnum;

  constructor() {
    super();
    this.indicationType = IndicationTypeEnum.None;
    this.isRight = false;
    this.isLeft = false;
    this.isSolidFood = false;
    this.isLiquids = false;
    this.isStatusPostAspiration = false;
    this.goiterType = GoiterTypeEnum.None;
    this.metabolismType = MetabolismTypeEnum.None;
    this.isNasopharynx = false;
    this.isOropharynx = false;
    this.isHypopharynx = false;
    this.isLarynx = false;
    this.isParotidSpace = false;
    this.tumorEntityType = TumorEntityTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;
    this.monthOfPostoperativeImaging = null;
    this.yearOfPostoperativeImaging = null;
    this.abscessType = AbscessTypeEnum.None;
    this.arterialPathologyType = ArterialPathologyTypeEnum.None;
  }
}
