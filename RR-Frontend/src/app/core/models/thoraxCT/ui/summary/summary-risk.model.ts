import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { NoduleRiskTypeEnum } from '@enums/thoraxCT/summary/nodule-risk-type.enum';

export class SummaryRiskModel {
  age: number;
  sex: GenderTypeEnum;
  isPositiveHistoryOfLungCancer: boolean;
  isEmphysema: boolean;
  isSpiculation: boolean;

  noduleSize: number;
  noduleType: NoduleRiskTypeEnum;
  noduleCount: number;
  isNoduleInUpperLung: boolean;
}
