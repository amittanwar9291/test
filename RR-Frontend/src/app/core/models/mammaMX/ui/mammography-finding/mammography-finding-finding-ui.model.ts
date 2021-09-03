import { FindingBase } from '@models/shared/finding/finding.base';
import { BreastFullCrossShoulder } from '@models/shared/mamma/breast/breast-full-cross-shoulder';
import { MammographyFindingFindingBaseUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-base-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  AsymmetryType,
  HistologicallySecuredType,
  DepthType,
  DistributionType,
  MammographyFindingType
} from '@enums/mammaMX/mammography-finding/';

export class MammographyFindingFindingUiModel extends MammographyFindingFindingBaseUiModel {
  // Common
  // findingType: MammographyFindingType;
  descriptionType: DescriptionTypeEnum;
  breastLocation: BreastFullCrossShoulder;
  distanceToNippleInMm: number;
  isSkinRetraction: boolean;
  isNippleRetraction: boolean;
  isSkinThickening: boolean;
  isTrabecularThickening: boolean;
  isAxillaryLymphadenopathy: boolean;
  isArchitecturalDistorsion: boolean;
  isSuspicionOf: boolean;
  isSubordinate: boolean;
  isCalcification: boolean;
  largestDiameterInMm: number;
  layerRectangularInMm: number;
  depthType: DepthType;

  // Mass
  isHistologicallyConfirmed: boolean;
  histologicallySecuredType: HistologicallySecuredType;
  isCalcificationInTheLesion: boolean;
  calcificationInTheLesionType: string;
  massDifferentialDiagnosis1Type: string;
  massDifferentialDiagnosis2Type: string;
  massDifferentialDiagnosis3Type: string;

  // Calcification
  maxExpansionInMm: number;
  distributionType: DistributionType;
  calcificationFormType: string;
  calcificationDiagnosisType: string;

  // Architecture disturbance
  isAsymmetryWithoutEvidenceOfSuspiciousMasses: boolean;
  isAsymmetry: boolean;
  architectureDistorsionDiagnosis1Type: string;
  architectureDistorsionDiagnosis2Type: string;

  // Asymmetry
  asymmetryType: AsymmetryType;
  isOnlyVisibleInOne: boolean;
  isConcaveEdges: boolean;
  isMixedWithFat: boolean;
  isNoCentralHyperdensity: boolean;
  asymmetricDiagnosisType: string;

  // Skin lesion
  isSurroundingBrighteningHemair: boolean;
  skinLesionDiagnosis1Type: string;
  skinLesionDiagnosis2Type: string;
  isOverOneLesionOfTheSameEntity: boolean;

  // Solitary dilated gait
  solitaryMammaryDiagnosis1Type: string;
  solitaryMammaryDiagnosis2Type: string;

  constructor() {
    super();

    // Common
    // this.findingType = MammographyFindingType.None;
    this.descriptionType = DescriptionTypeEnum.None;
    this.breastLocation = new BreastFullCrossShoulder();
    this.distanceToNippleInMm = null;
    this.isSkinRetraction = false;
    this.isNippleRetraction = false;
    this.isSkinThickening = false;
    this.isTrabecularThickening = false;
    this.isAxillaryLymphadenopathy = false;
    this.isArchitecturalDistorsion = false;
    this.isSuspicionOf = false;
    this.isSubordinate = false;
    this.isCalcification = false;
    this.largestDiameterInMm = null;
    this.layerRectangularInMm = null;
    this.depthType = DepthType.None;

    // Mass
    this.isHistologicallyConfirmed = false;
    this.histologicallySecuredType = HistologicallySecuredType.None;
    this.isCalcificationInTheLesion = false;
    this.calcificationInTheLesionType = 'None';
    this.massDifferentialDiagnosis1Type = 'None';
    this.massDifferentialDiagnosis2Type = 'None';
    this.massDifferentialDiagnosis3Type = 'None';

    // Calcification
    this.maxExpansionInMm = null;
    this.distributionType = DistributionType.None;
    this.calcificationFormType = 'None';
    this.calcificationDiagnosisType = 'None';

    // Architecture disturbance
    this.isAsymmetryWithoutEvidenceOfSuspiciousMasses = false;
    this.isAsymmetry = false;
    this.architectureDistorsionDiagnosis1Type = 'None';
    this.architectureDistorsionDiagnosis2Type = 'None';

    // Asymmetry
    this.asymmetryType = AsymmetryType.None;
    this.isOnlyVisibleInOne = false;
    this.isConcaveEdges = false;
    this.isMixedWithFat = false;
    this.isNoCentralHyperdensity = false;
    this.asymmetricDiagnosisType = 'None';

    // Skin lesion
    this.isSurroundingBrighteningHemair = false;
    this.skinLesionDiagnosis1Type = 'None';
    this.skinLesionDiagnosis2Type = 'None';
    this.isOverOneLesionOfTheSameEntity = false;

    // Solitary dilated gait
    this.solitaryMammaryDiagnosis1Type = 'None';
    this.solitaryMammaryDiagnosis2Type = 'None';
  }
}
