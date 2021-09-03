import {
  DemarctionTypeEnum,
  DetailTypeEnum,
  DifferentialDiagnosisEnum,
  FindingTypeEnum,
  FormTypeEnum,
  GrowthPatternsTypeEnum,
  HomogeneityTypeEnum,
  InterdigitalSpaceTypeEnum,
  QuantitativeTypeEnum
} from '@enums/feetMRT/soft-tissue';
import { HistologyKnownTypeEnum } from '@enums/feetMRT/soft-tissue/histology-known-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class SoftTissueFindingBaseUiModel extends FindingBase {
  findingType: FindingTypeEnum;
  differentialDiagnosis: DifferentialDiagnosisEnum;

  quantitativeHomogeneityType: HomogeneityTypeEnum;
  quantitativeType: QuantitativeTypeEnum;
  demarcationType: DemarctionTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  formType: FormTypeEnum;
  growthPatternsType: GrowthPatternsTypeEnum;
  interdigitalSpaceType: InterdigitalSpaceTypeEnum;
  histologyKnownType: HistologyKnownTypeEnum;
  detailType: DetailTypeEnum;

  signalT1w: number;
  signalT2w: number;

  isAccompanyingBursitis: boolean;
  isBold: boolean;
  isCysts: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isSepts: boolean;
  isNecroses: boolean;
  isTumorCenterLiesPlantarOfTheLigMetatarsalTransversumProfundum: boolean;
  isSignalVoids: boolean;
  isHistologyKnown: boolean;
  isCutisThickening: boolean;
  isPressureCorrosionBone: boolean;
  isDiffusionRestriction: boolean;
  isInTheSepta: boolean;

  constructor() {
    super();

    this.findingType = FindingTypeEnum.None;
    this.differentialDiagnosis = DifferentialDiagnosisEnum.None;

    this.quantitativeType = QuantitativeTypeEnum.None;
    this.demarcationType = DemarctionTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.growthPatternsType = GrowthPatternsTypeEnum.None;
    this.quantitativeHomogeneityType = HomogeneityTypeEnum.None;
    this.interdigitalSpaceType = InterdigitalSpaceTypeEnum.None;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.detailType = DetailTypeEnum.None;

    this.signalT1w = null;
    this.signalT2w = null;

    this.isAccompanyingBursitis = false;
    this.isBold = false;
    this.isCysts = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isSepts = false;
    this.isNecroses = false;
    this.isSignalVoids = false;
    this.isTumorCenterLiesPlantarOfTheLigMetatarsalTransversumProfundum = false;
    this.isCutisThickening = false;
    this.isHistologyKnown = false;
    this.isPressureCorrosionBone = false;
    this.isDiffusionRestriction = false;
    this.isInTheSepta = false;
  }
}
