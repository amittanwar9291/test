import { KneeClassification } from '@models/kneeMRT/ui/knee/knee-classification.model';
import { KneeCross } from '@models/kneeMRT/ui/knee/knee-cross.model';
import { FindingBase } from '@models/shared/finding/finding.base';
import { FileUiModel } from '@models/shared/uploader/file-ui.model';

import {
  RibbonsFindingTypeEnum,
  TearClassificationEnum,
  DislocationEnum,
  FlapTearTypeEnum,
  BucketHandleTearEnum,
  MeasurementEnum,
  DiscoidMeniscusTypeEnum,
  DetailEnum,
  BandPortionEnum,
  DetailLocalizationEnum,
  InjuryKindEnum,
  InjuryTypeEnum,
  BundleTypeEnum,
  TransplantDetailEnum
} from '@enums/kneeMRT/ribbons';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';

export class RibbonsFindingUiModel extends FindingBase {
  findingType: RibbonsFindingTypeEnum;

  // common
  meniscusLocalization1: KneeCross;
  isArcuateSign: boolean;
  isPullOutPosterolateralCapsule: boolean;
  isPosteriorCruciateLigament: boolean;
  isSegondFracture: boolean;
  isAvulsionTibia: boolean;
  isRuptureOfAnteriorCruciateLigament: boolean;
  isAvulsionFrakturFibula: boolean;

  // inner/outer meniscus degeneration
  referencePicture: ReferencePictureUiModel;
  gradeClassification: KneeClassification;
  tearClassification: TearClassificationEnum;
  isSuperiorArticularSurface: boolean;
  isInferiorArticularSurface: boolean;
  dislocation: DislocationEnum;
  flapTearType: FlapTearTypeEnum;
  bucketHandleTear: BucketHandleTearEnum;
  isChondropathyAssociated: boolean;
  isChondropathyTibial: boolean;
  isChondropathyFemoral: boolean;
  isCMOedemaSubchondralAssociated: boolean;
  isCMOedemaTibial: boolean;
  isCMOedemaFemoral: boolean;
  isSubchondralSclerosisAssociated: boolean;
  isSubchondralTibial: boolean;
  isSubchondralFemoral: boolean;
  isMeniscalExtrusionSubluxation: boolean;
  isDegenerationRearAttachment: boolean;
  isMeniscalCyst: boolean;
  meniscusDiameterMM: number;
  measurement: MeasurementEnum;
  isMeniscocapsularSeparation: boolean;
  isLigmeniskotibial: boolean;
  isMeniscofemoralFascicle: boolean;
  isMeniscPosterLigamWrisberg: boolean;
  isMeniscAnteriusLigamHumphry: boolean;
  meniscotibialLigamentum: boolean;

  // inner/outer meniscus variant
  isDiscoidMeniscus: boolean;
  discoidMeniscusType: DiscoidMeniscusTypeEnum;
  isDislocated: boolean;
  isThickeningLigMeniscofemoralPosterius: boolean;
  isParsIntermediaWavyRepresentation: boolean;
  isPhysiologicalT2Hyperintensity: boolean;
  meniscusLocalization2: KneeCross;
  isMeniscalOssile: boolean;
  isAbsentMeniscus: boolean;
  isSignificantVolumeDeclineIM: boolean;
  isSignificantVolumeDeclineEM: boolean;

  // medial/lateral collateral ligaments
  detail: DetailEnum;
  isBursitisBetweenDeepAndMidLayers: boolean;
  bandPortion: BandPortionEnum;
  detailLocalization: DetailLocalizationEnum;
  isRetracted: boolean;
  dimensionGrad2: number;
  dimensionGrad3: number;
  isDistortionGrade1Injury: boolean;
  isLateralCollateralLigament: boolean;
  isTractusIliotibialis: boolean;
  isBicepsFemorisTendon: boolean;
  isLiggPopliteofibulare: boolean;
  isLigMeniscopliteale: boolean;

  // anterior/posterior ligament
  injuryType: InjuryTypeEnum;
  ruptureKind: InjuryKindEnum;
  isFreshTotalSignalIncreased: boolean;
  isFreshTotalThickening: boolean;
  isFreshTotalContusionOrBoneMarrowEdema: boolean;
  isFreshTotalLatFemoralCondyleVentral: boolean;
  isFreshTotalAnterolateralTibialPlateau: boolean;
  isFreshTotalAnterolateralTibialPlateauDorsal: boolean;
  isFreshTotalBonyAvulsion: boolean;
  isFreshTotalFracture: boolean;
  isFreshTotalFrakturLatFemoralCondyleVentral: boolean;
  isFreshTotalFrakturLatTibialPlateauDorsal: boolean;
  isTibialEminence: boolean;
  isFreshTotalProximaleFibula: boolean;
  isAvulsionFibula: boolean;
  isFreshTotalLateralTibialPlateau: boolean;
  isFreshTotalSubluxationTibiaAnteriorOver5mm: boolean;
  isBucklingOfThePCL: boolean;
  bundleType: BundleTypeEnum;
  isFreshPartialPoplitealTendonRupture: boolean;
  isFreshTotalLatFemoralCondyle: boolean;
  isFreshTotalProximaleFibula1: boolean;
  isFreshTotalLateralTibialPlateau1: boolean;
  isFreshTotalMedialTibialPlateau: boolean;
  isFreshPartialThickening: boolean;
  isFreshPartialSignalIncrease: boolean;
  isFreshPartialMiddleThird: boolean;
  isFreshPartialroximalThird: boolean;
  isFreshPartialDistalThird: boolean;
  isChronicSignalIncreased: boolean;
  isChronicThickening: boolean;
  isChronicSynovialization: boolean;
  isChronicGanglionCyst: boolean;
  chronicDimensionMM: number;
  transplantDetail: TransplantDetailEnum;
  isTunnelCyst: boolean;
  isTunnelCystTibial: boolean;
  isTunnelCystFemoral: boolean;

  constructor() {
    super();

    this.findingType = RibbonsFindingTypeEnum.None;

    // common
    this.meniscusLocalization1 = new KneeCross();
    this.isArcuateSign = false;
    this.isPullOutPosterolateralCapsule = false;
    this.isPosteriorCruciateLigament = false;
    this.isSegondFracture = false;
    this.isAvulsionTibia = false;
    this.isRuptureOfAnteriorCruciateLigament = false;
    this.isAvulsionFrakturFibula = false;

    // inner/outer meniscus degeneration
    this.referencePicture = new ReferencePictureUiModel();
    this.gradeClassification = new KneeClassification();
    this.tearClassification = TearClassificationEnum.None;
    this.isSuperiorArticularSurface = false;
    this.isInferiorArticularSurface = false;
    this.dislocation = DislocationEnum.None;
    this.flapTearType = FlapTearTypeEnum.None;
    this.bucketHandleTear = BucketHandleTearEnum.None;
    this.isChondropathyAssociated = false;
    this.isChondropathyTibial = false;
    this.isChondropathyFemoral = false;
    this.isCMOedemaSubchondralAssociated = false;
    this.isCMOedemaTibial = false;
    this.isCMOedemaFemoral = false;
    this.isSubchondralSclerosisAssociated = false;
    this.isSubchondralTibial = false;
    this.isSubchondralFemoral = false;
    this.isMeniscalExtrusionSubluxation = false;
    this.isDegenerationRearAttachment = false;
    this.isMeniscalCyst = false;
    this.meniscusDiameterMM = null;
    this.measurement = MeasurementEnum.None;
    this.isMeniscocapsularSeparation = false;
    this.isLigmeniskotibial = false;
    this.isMeniscofemoralFascicle = false;
    this.isMeniscPosterLigamWrisberg = false;
    this.isMeniscAnteriusLigamHumphry = false;
    this.meniscotibialLigamentum = false;

    // inner/outer meniscus variant
    this.isDiscoidMeniscus = false;
    this.discoidMeniscusType = DiscoidMeniscusTypeEnum.None;
    this.isDislocated = false;
    this.isThickeningLigMeniscofemoralPosterius = false;
    this.isParsIntermediaWavyRepresentation = false;
    this.isPhysiologicalT2Hyperintensity = false;
    this.meniscusLocalization2 = new KneeCross();
    this.isMeniscalOssile = false;
    this.isAbsentMeniscus = false;
    this.isSignificantVolumeDeclineIM = false;
    this.isSignificantVolumeDeclineEM = false;

    // medial/lateral collateral ligaments
    this.detail = DetailEnum.None;
    this.isBursitisBetweenDeepAndMidLayers = false;
    this.bandPortion = BandPortionEnum.None;
    this.detailLocalization = DetailLocalizationEnum.None;
    this.isRetracted = false;
    this.dimensionGrad2 = null;
    this.dimensionGrad3 = null;
    this.isDistortionGrade1Injury = false;
    this.isLateralCollateralLigament = false;
    this.isTractusIliotibialis = false;
    this.isBicepsFemorisTendon = false;
    this.isLiggPopliteofibulare = false;
    this.isLigMeniscopliteale = false;

    // anterior/posterior ligament
    this.injuryType = InjuryTypeEnum.None;
    this.ruptureKind = InjuryKindEnum.None;
    this.isFreshTotalSignalIncreased = false;
    this.isFreshTotalThickening = false;
    this.isFreshTotalContusionOrBoneMarrowEdema = false;
    this.isFreshTotalLatFemoralCondyleVentral = false;
    this.isFreshTotalAnterolateralTibialPlateau = false;
    this.isFreshTotalAnterolateralTibialPlateauDorsal = false;
    this.isFreshTotalBonyAvulsion = false;
    this.isFreshTotalFracture = false;
    this.isFreshTotalFrakturLatFemoralCondyleVentral = false;
    this.isFreshTotalFrakturLatTibialPlateauDorsal = false;
    this.isTibialEminence = false;
    this.isFreshTotalProximaleFibula = false;
    this.isAvulsionFibula = false;
    this.isFreshTotalLateralTibialPlateau = false;
    this.isFreshTotalSubluxationTibiaAnteriorOver5mm = false;
    this.isBucklingOfThePCL = false;
    this.bundleType = BundleTypeEnum.None;
    this.isFreshPartialPoplitealTendonRupture = false;
    this.isFreshTotalLatFemoralCondyle = false;
    this.isFreshTotalProximaleFibula1 = false;
    this.isFreshTotalLateralTibialPlateau1 = false;
    this.isFreshTotalMedialTibialPlateau = false;
    this.isFreshPartialThickening = false;
    this.isFreshPartialSignalIncrease = false;
    this.isFreshPartialMiddleThird = false;
    this.isFreshPartialroximalThird = false;
    this.isFreshPartialDistalThird = false;
    this.isChronicSignalIncreased = false;
    this.isChronicThickening = false;
    this.isChronicSynovialization = false;
    this.isChronicGanglionCyst = false;
    this.chronicDimensionMM = null;
    this.transplantDetail = TransplantDetailEnum.None;
    this.isTunnelCyst = false;
    this.isTunnelCystTibial = false;
    this.isTunnelCystFemoral = false;
  }
}
