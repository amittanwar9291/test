import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class FindingWithDescriptionType extends FindingBase {
  descriptionType: DescriptionTypeEnum;
  findingType: any;
}
