import { CardioSingleColorLocalizer } from '@models/cardioMRT/ui/left-ventricle/cardio-single-color-localizer-ui.model';
import { RelaxationTimeTypeEnum } from '@enums/cardioMRT/left-ventricle/relaxation-time-type.enum';
import { MeasureType } from '@enums/cardioMRT/left-ventricle/measure-type.enum';
import { SeverityType } from '@enums/cardioMRT/left-ventricle/severity-type.enum';
import { ModelBase } from '@models/model-base';

export class CardioRelaxationTimeUiModel extends ModelBase {
  measureType: MeasureType;
  qualitativeType: RelaxationTimeTypeEnum;
  severityType: SeverityType;
  valueMyocardiumInMs: number;
  referenceValueMyocardiumInMs: number;
  valueBloodInMs: number;
  // helper property
  ecv: number;
  isLVTotal: boolean;

  localizer: CardioSingleColorLocalizer;

  constructor() {
    super();
    this.measureType = MeasureType.None;
    this.qualitativeType = RelaxationTimeTypeEnum.None;
    this.severityType = SeverityType.None;
    this.valueMyocardiumInMs = null;
    this.referenceValueMyocardiumInMs = null;
    this.valueBloodInMs = null;
    this.ecv = null;
    this.isLVTotal = false;
    this.localizer = new CardioSingleColorLocalizer();
  }
}
