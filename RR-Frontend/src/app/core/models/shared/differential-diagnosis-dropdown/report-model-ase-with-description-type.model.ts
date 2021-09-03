import { ReportModelBase } from '@models/report-model-base';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export class ReportModelBaseWithDescriptionType extends ReportModelBase {
  descriptionType: DescriptionTypeEnum;
}
