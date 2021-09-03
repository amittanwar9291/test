import {
  CalcificationsTypeEnum,
  DeformabilityCompressionTypeEnum,
  EchoPatternTypeEnum,
  MassDiagnosisTypeEnum,
  HistologicallySecuredTypeEnum,
  MovabilityTypeEnum,
  OrientationTypeEnum
} from '@enums/mammaMX/ultrasound-finding';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { UltrasoundFindingSubfindingBaseUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-base-ui.model';
import { BreastPizzaSlices } from '@models/shared/mamma/breast/breast-pizza-slices.model';

export class UltrasoundFindingSubfindingUiModel extends UltrasoundFindingSubfindingBaseUiModel {
  // Focus
  descriptionType: DescriptionTypeEnum;
  isHistologicallyConfirmed: boolean;
  histologicallySecuredType: HistologicallySecuredTypeEnum;
  location: BreastPizzaSlices;
  diameterInMm: number;
  sizeOfSecondLayerInMm: number;
  sizeOfThirdLayerInMm: number;
  distanceToNippleInMm: number;
  orientationType: OrientationTypeEnum;
  isIndistinct: boolean;
  isAngularMargins: boolean;
  isMicrolobulated: boolean;
  isSpiculated: boolean;
  echoPatternType: EchoPatternTypeEnum;
  deformabilityCompressionType: DeformabilityCompressionTypeEnum;
  movabilityType: MovabilityTypeEnum;
  differentialDiagnosis1: MassDiagnosisTypeEnum;
  isSuspectedOfDifferentialDiagnosis1: boolean;
  differentialDiagnosis2: MassDiagnosisTypeEnum;
  isSubordinated: boolean;

  // Calcification
  calcificationsType: CalcificationsTypeEnum;

  constructor() {
    super();

    // Focus
    this.descriptionType = DescriptionTypeEnum.None;
    this.isHistologicallyConfirmed = false;
    this.histologicallySecuredType = HistologicallySecuredTypeEnum.None;
    this.location = new BreastPizzaSlices();
    this.diameterInMm = null;
    this.sizeOfSecondLayerInMm = null;
    this.sizeOfThirdLayerInMm = null;
    this.distanceToNippleInMm = null;
    this.orientationType = OrientationTypeEnum.None;
    this.isIndistinct = false;
    this.isAngularMargins = false;
    this.isMicrolobulated = false;
    this.isSpiculated = false;
    this.echoPatternType = EchoPatternTypeEnum.None;
    this.deformabilityCompressionType = DeformabilityCompressionTypeEnum.None;
    this.movabilityType = MovabilityTypeEnum.None;
    this.differentialDiagnosis1 = MassDiagnosisTypeEnum.None;
    this.isSuspectedOfDifferentialDiagnosis1 = false;
    this.differentialDiagnosis2 = MassDiagnosisTypeEnum.None;
    this.isSubordinated = false;

    // Calcification
    this.calcificationsType = CalcificationsTypeEnum.None;
  }
}
