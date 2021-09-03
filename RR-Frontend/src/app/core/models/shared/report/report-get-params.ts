import { LocalizerTypeEnum } from '@enums/shared/report/localizer-type.enum';

export class ReportGetParams {
  lang: string;
  reportTypeName: string;
  localizerType: LocalizerTypeEnum;
  icd10: boolean;
  referenceImage: boolean;
  reportId: string;
}
