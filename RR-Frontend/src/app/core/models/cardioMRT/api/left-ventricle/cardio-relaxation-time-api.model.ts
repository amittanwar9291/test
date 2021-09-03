import { RelaxationTimeTypeEnum } from '@enums/cardioMRT/left-ventricle/relaxation-time-type.enum';
import { MeasureType } from '@enums/cardioMRT/left-ventricle/measure-type.enum';
import { SeverityType } from '@enums/cardioMRT/left-ventricle/severity-type.enum';
import { ModelBase } from '@models/model-base';

export class CardioRelaxationTimeApiModel extends ModelBase {
  measureType: MeasureType;
  qualitativeType: RelaxationTimeTypeEnum;
  severityType: string;
  valueMyocardiumInMs: number;
  referenceValueMyocardiumInMs: number;
  valueBloodInMs: number;

  isLVTotal: boolean;
  ecv: number;

  localizer: string;

  constructor() {
    super();
    this.measureType = MeasureType.None;
    this.qualitativeType = RelaxationTimeTypeEnum.None;
    this.valueMyocardiumInMs = null;
    this.referenceValueMyocardiumInMs = null;
    this.valueBloodInMs = null;
    this.isLVTotal = false;
    this.ecv = null;
    this.localizer = 'None';
    this.severityType = SeverityType.None;
  }
}
