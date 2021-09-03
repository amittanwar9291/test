import { FindingBase } from '@models/shared/finding/finding.base';
import { CartilageAndLabrumLocalizerUiModel } from './cartilage-and-labrum-localizer-ui.model';

import {
  DegenerationTypeEnum,
  DifferentialDiagnosisEnum,
  EtiologyTypeEnum,
  FindingTypeEnum,
  FormTypeEnum,
  MorphologyTypeEnum,
  OuterbridgeClassificationTypeEnum,
  TraumaticTypeEnum
} from '@enums/hipMRT/cartilage-and-labrum';
import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';

export class CartilageAndLabrumFindingUiModel extends FindingBase {
  // Common
  findingType: FindingTypeEnum;
  sideType: DirectionTypeEnum;
  cartilageLocalizer: CartilageAndLabrumLocalizerUiModel;
  isAcetabulum: boolean;

  // Labrum
  isTear: boolean;
  formType: FormTypeEnum;
  isFurtherImageFeatures: boolean;
  isDegeneration: boolean;
  degenerationType: DegenerationTypeEnum;
  isParalabralCyst: boolean;
  maxSizeInMm?: number;
  differentialDiagnosis: DifferentialDiagnosisEnum;
  inclinationInDegrees?: number;
  isDysplasia: boolean;
  isFemoralHead: boolean;

  // FAI
  morphologyType: MorphologyTypeEnum;
  isCartilageLesionAnteriorSuperior: boolean;
  isChondrolabralSeparation: boolean;
  quantitativeAnalysisAlphaAngleInDegrees?: number;
  isDecreasedOffset: boolean;
  isAcetabularOvercoverage: boolean;
  isCartilageLesionPosteriorInferior: boolean;
  isHerniationPitAnterolateralFemoralNeck: boolean;
  isFluidIsointense: boolean;
  isPeripheralSclerosis: boolean;
  isBoneMarrowEdemaAtHeadNeckTransition: boolean;

  // Cartilage Lesion
  etiologyType: EtiologyTypeEnum;
  traumaticType: TraumaticTypeEnum;
  outerbridgeClassificationType: OuterbridgeClassificationTypeEnum;
  lengthMaxDiameterInMm?: number;
  isSubchondralCysts: boolean;
  isIntraArticularLooseBody: boolean;
  intraArticularLooseBodyMaxDiameterInMm?: number;
  isChondrocalcinosis: boolean;
  isFemur: boolean;

  constructor() {
    super();

    // Common
    this.findingType = FindingTypeEnum.None;
    this.sideType = DirectionTypeEnum.None;
    this.cartilageLocalizer = new CartilageAndLabrumLocalizerUiModel();
    this.isAcetabulum = false;

    // Labrum
    this.isTear = false;
    this.formType = FormTypeEnum.None;
    this.isFurtherImageFeatures = false;
    this.isDegeneration = false;
    this.degenerationType = DegenerationTypeEnum.None;
    this.isParalabralCyst = false;
    this.maxSizeInMm = null;
    this.differentialDiagnosis = DifferentialDiagnosisEnum.None;
    this.inclinationInDegrees = null;
    this.isDysplasia = false;
    this.isFemoralHead = false;

    // FAI
    this.morphologyType = MorphologyTypeEnum.None;
    this.isCartilageLesionAnteriorSuperior = false;
    this.isChondrolabralSeparation = false;
    this.quantitativeAnalysisAlphaAngleInDegrees = null;
    this.isDecreasedOffset = false;
    this.isAcetabularOvercoverage = false;
    this.isCartilageLesionPosteriorInferior = false;
    this.isHerniationPitAnterolateralFemoralNeck = false;
    this.isFluidIsointense = false;
    this.isPeripheralSclerosis = false;
    this.isBoneMarrowEdemaAtHeadNeckTransition = false;

    // Cartilage Lesion
    this.etiologyType = EtiologyTypeEnum.None;
    this.traumaticType = TraumaticTypeEnum.None;
    this.outerbridgeClassificationType = OuterbridgeClassificationTypeEnum.None;
    this.lengthMaxDiameterInMm = null;
    this.isSubchondralCysts = false;
    this.isIntraArticularLooseBody = false;
    this.intraArticularLooseBodyMaxDiameterInMm = null;
    this.isChondrocalcinosis = false;
    this.isFemur = false;
  }
}
