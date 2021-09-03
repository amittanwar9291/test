import {
  DemarctionTypeEnum,
  FormTypeEnum,
  GrowthPatternsTypeEnum,
  HomogeneityTypeEnum,
  QuantitativeTypeEnum
} from '@enums/feetMRT/soft-tissue';
import { FindingBase } from '@models/shared/finding/finding.base';

export class SoftTissueFindingBaseApiModel extends FindingBase {
  findingType: string;
  differentialDiagnosis: string;

  demarcationType: DemarctionTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  formType: FormTypeEnum;
  quantitativeType: QuantitativeTypeEnum;
  growthPatternsType: GrowthPatternsTypeEnum;
  quantitativeHomogeneityType: HomogeneityTypeEnum;

  signalT1w: string;
  signalT2w: string;

  isBold: boolean;
  isCysts: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isSepts: boolean;
  isNecroses: boolean;
  isAccompanyingBursitis: boolean;
  isTumorCenterLiesPlantarOfTheLigMetatarsalTransversumProfundum: boolean;
  isSignalVoids: boolean;

  constructor() {
    super();

    this.findingType = 'None';
    this.differentialDiagnosis = 'None';
    this.isAccompanyingBursitis = false;
    this.signalT1w = 'None';
    this.signalT2w = 'None';
    this.quantitativeType = QuantitativeTypeEnum.None;
    this.demarcationType = DemarctionTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.isBold = false;
    this.isCysts = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isSepts = false;
    this.isNecroses = false;
    this.isSignalVoids = false;
    this.growthPatternsType = GrowthPatternsTypeEnum.None;
    this.quantitativeHomogeneityType = HomogeneityTypeEnum.None;
    this.isTumorCenterLiesPlantarOfTheLigMetatarsalTransversumProfundum = false;
  }
}
