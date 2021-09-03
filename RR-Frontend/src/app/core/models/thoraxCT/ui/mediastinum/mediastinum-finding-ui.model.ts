import { MediastinumFindingBaseUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-base-ui.model';
import {
  AorticNodesTypeEnum,
  CardiovascularPulmonaryDiagnosisTypeEnum,
  ChronicThromboembolicTypeEnum,
  CurvatureOfInterventricularSeptumTypeEnum,
  DetailsPulmonaryHypertensionTypeEnum,
  EsuphagusTypeEnum,
  HeightInRelationTypeEnum,
  HilarLobarNodesTypeEnum,
  InferiorMediastinalNodesTypeEnum,
  LocalizationWithinVesselTypeEnum,
  LymphNodeStationsTypeEnum,
  LymphNodesTypeEnum,
  MassDetailsDiagnosisTypeEnum,
  MediastinumDiagnosisTypeEnum,
  MediastinumLocalizationTypeEnum,
  MediastinumTypeEnum,
  ParatrachealNodesTypeEnum,
  RightHeartStrainTypeEnum,
  TracheaTypeEnum,
  VascularExtentTypeEnum
} from '@enums/thoraxCT/mediastinum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { LungsModel } from '@models/thoraxCT/ui/thorax/lungs.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export class MediastinumFindingUiModel extends MediastinumFindingBaseUiModel {
  // commmon
  isThrombus: boolean;
  isSuspected: boolean;

  // Mediastinum
  mediastinumType: MediastinumTypeEnum;
  directionType: LocationTypeEnum;

  // LymphNodes
  lymphNodesType: LymphNodesTypeEnum;
  enlargedLymphNodesMaxDiameterSADInMm: number;
  lymphNodeStationsType: LymphNodeStationsTypeEnum;
  topMediastinalNodesType: LocationTypeEnum;
  paratrachealNodesType: ParatrachealNodesTypeEnum;
  aorticNodesType: AorticNodesTypeEnum;
  inferiorMediastinalNodesType: InferiorMediastinalNodesTypeEnum;
  hilarLobarNodesType: HilarLobarNodesTypeEnum;
  lymphNodesLocalizationType: LocationTypeEnum;
  enlargedLymphNodesCalcificationMaxDiameterSADInMm: number;
  isSuspect: boolean;
  isPreservedFattyHilum: boolean;
  isReferenceLesionAccToRECIST: boolean;
  isContinuous: boolean;

  // CardiovascularPulmonaryArteries
  lungsLocation: LungsModel;
  localizationWithinVesselType: LocalizationWithinVesselTypeEnum;
  isPoloMintSign: boolean;
  isCrumbsBiscuitSign: boolean;
  quantitativeWideCentralPulmonaryArteryInMm: number;
  quantitativeRVLVDiameterQuotient: number;
  quantitativeRVLVVolumeQuotient: number;
  quantitativePAAADiameterQuotient: number;
  curvatureOfInterventricularSeptumType: CurvatureOfInterventricularSeptumTypeEnum;
  isRemodeling: boolean;
  isIntravascularLigamentsAndNets: boolean;
  isPouchDefect: boolean;
  isSuddenChangeOfDiameter: boolean;
  isStrictures: boolean;
  isPoststenoticDilatation: boolean;
  isCollateralFlow: boolean;
  isMosaicPerfusion: boolean;
  isUpperLobeRight: boolean;
  isMiddleLobe: boolean;
  isLowerLobeRight: boolean;
  isUpperLobeLeft: boolean;
  isLingula: boolean;
  isLowerLobeLeft: boolean;
  diagnosisType: CardiovascularPulmonaryDiagnosisTypeEnum;
  rightHeartStrainType: RightHeartStrainTypeEnum;
  detailsPulmonaryHypertensionType: DetailsPulmonaryHypertensionTypeEnum;
  chronicThromboembolicType: ChronicThromboembolicTypeEnum;

  // CardiovascularHeart
  isRight: boolean;
  isRightAtriumEnlargement: boolean;
  isRightEnlargementOfTheVentricle: boolean;
  isRightMyocardialThickening: boolean;
  isVenousContrastAgentReflux: boolean;
  isLeft: boolean;
  isLeftAtriumEnlargement: boolean;
  isLeftEnlargementOfTheVentricle: boolean;
  isLeftMyocardialThickening: boolean;
  isCoronarySclerosis: boolean;
  isRCA: boolean;
  isLMA: boolean;
  isLCX: boolean;
  isLAD: boolean;
  isEffusion: boolean;
  effusionWidthMaxInMm: number;
  isMass: boolean;
  massDiameterMaxInMm: number;
  isPneumopericardium: boolean;
  isPericarditisConstrictiva: boolean;

  // CardiovascularThoracicAorta
  isVasosclerosis: boolean;
  isVascularDilatation: boolean;
  vascularExtentType: VascularExtentTypeEnum;
  isAorticRoot: boolean;
  isAortaAscendens: boolean;
  isAorticArch: boolean;
  isAortaDescendens: boolean;
  sizeDiameterMaxInMm: number;

  // Mass
  descriptionType: DescriptionTypeEnum;
  extentSizeInMm: number;
  extentSecondPlaneInMm: number;
  extentThirdPlaneInMm: number;
  differentialDiagnosis01: MediastinumDiagnosisTypeEnum;
  differentialDiagnosis02: MediastinumDiagnosisTypeEnum;
  isSubordinated: boolean;
  differentialDiagnosis03: MediastinumDiagnosisTypeEnum;
  caudalExtensionInMmDiagnosis01: number;
  caudalExtensionInMmDiagnosis02: number;
  caudalExtensionInMmDiagnosis03: number;

  // Esuphagus
  esuphagusType: EsuphagusTypeEnum;
  localizationType: MediastinumLocalizationTypeEnum;
  spaceClaimMaxWallThicknessInMm: number;
  maximumCraniocaudalExtensionInMm: number;
  isUpsideDownStomach: boolean;

  // Trachea
  tracheaType: TracheaTypeEnum;
  tracheaShiftType: LocationTypeEnum;
  heightInRelationType: HeightInRelationTypeEnum;
  minDiameterAxial: number;
  minDiameterCraniocaudal: number;
  isTracheomalaciaCollapseInExpiration: boolean;
  massDetailsMaxDiameterInMm: number;
  massDetailsDiagnosisType: MassDetailsDiagnosisTypeEnum;

  constructor() {
    super();

    this.isThrombus = false;
    this.isSuspected = false;

    // Mediastinum
    this.mediastinumType = MediastinumTypeEnum.None;
    this.directionType = LocationTypeEnum.None;

    // Lymph nodes
    this.lymphNodesType = LymphNodesTypeEnum.None;
    this.enlargedLymphNodesMaxDiameterSADInMm = null;
    this.lymphNodeStationsType = LymphNodeStationsTypeEnum.None;
    this.topMediastinalNodesType = LocationTypeEnum.None;
    this.paratrachealNodesType = ParatrachealNodesTypeEnum.None;
    this.aorticNodesType = AorticNodesTypeEnum.None;
    this.inferiorMediastinalNodesType = InferiorMediastinalNodesTypeEnum.None;
    this.hilarLobarNodesType = HilarLobarNodesTypeEnum.None;
    this.lymphNodesLocalizationType = LocationTypeEnum.None;
    this.enlargedLymphNodesCalcificationMaxDiameterSADInMm = null;
    this.isSuspect = false;
    this.isPreservedFattyHilum = false;
    this.isReferenceLesionAccToRECIST = false;
    this.isContinuous = false;

    // CardiovascularPulmonaryArteries
    this.lungsLocation = new LungsModel();
    this.localizationWithinVesselType = LocalizationWithinVesselTypeEnum.None;
    this.isPoloMintSign = false;
    this.isCrumbsBiscuitSign = false;
    this.quantitativeWideCentralPulmonaryArteryInMm = null;
    this.quantitativeRVLVDiameterQuotient = null;
    this.quantitativeRVLVVolumeQuotient = null;
    this.quantitativePAAADiameterQuotient = null;
    this.curvatureOfInterventricularSeptumType = CurvatureOfInterventricularSeptumTypeEnum.None;
    this.isRemodeling = false;
    this.isIntravascularLigamentsAndNets = false;
    this.isPouchDefect = false;
    this.isSuddenChangeOfDiameter = false;
    this.isStrictures = false;
    this.isPoststenoticDilatation = false;
    this.isCollateralFlow = false;
    this.isMosaicPerfusion = false;
    this.isUpperLobeRight = false;
    this.isMiddleLobe = false;
    this.isLowerLobeRight = false;
    this.isUpperLobeLeft = false;
    this.isLingula = false;
    this.isLowerLobeLeft = false;
    this.diagnosisType = CardiovascularPulmonaryDiagnosisTypeEnum.None;
    this.rightHeartStrainType = RightHeartStrainTypeEnum.None;
    this.detailsPulmonaryHypertensionType = DetailsPulmonaryHypertensionTypeEnum.None;
    this.chronicThromboembolicType = ChronicThromboembolicTypeEnum.None;

    // CardiovascularHeart
    this.isRight = false;
    this.isRightAtriumEnlargement = false;
    this.isRightEnlargementOfTheVentricle = false;
    this.isRightMyocardialThickening = false;
    this.isVenousContrastAgentReflux = false;
    this.isLeft = false;
    this.isLeftAtriumEnlargement = false;
    this.isLeftEnlargementOfTheVentricle = false;
    this.isLeftMyocardialThickening = false;
    this.isCoronarySclerosis = false;
    this.isRCA = false;
    this.isLMA = false;
    this.isLCX = false;
    this.isLAD = false;
    this.isEffusion = false;
    this.effusionWidthMaxInMm = null;
    this.isMass = false;
    this.massDiameterMaxInMm = null;
    this.isPneumopericardium = false;
    this.isPericarditisConstrictiva = false;

    // CardiovascularThoracicAorta
    this.isVasosclerosis = false;
    this.isVascularDilatation = false;
    this.vascularExtentType = VascularExtentTypeEnum.None;
    this.isAorticRoot = false;
    this.isAortaAscendens = false;
    this.isAorticArch = false;
    this.isAortaDescendens = false;
    this.sizeDiameterMaxInMm = null;

    // Mass
    this.descriptionType = DescriptionTypeEnum.None;
    this.extentSizeInMm = null;
    this.extentSecondPlaneInMm = null;
    this.extentThirdPlaneInMm = null;
    this.differentialDiagnosis01 = MediastinumDiagnosisTypeEnum.None;
    this.differentialDiagnosis02 = MediastinumDiagnosisTypeEnum.None;
    this.isSubordinated = false;
    this.differentialDiagnosis03 = MediastinumDiagnosisTypeEnum.None;
    this.caudalExtensionInMmDiagnosis01 = null;
    this.caudalExtensionInMmDiagnosis02 = null;
    this.caudalExtensionInMmDiagnosis03 = null;

    // Esuphagus
    this.esuphagusType = EsuphagusTypeEnum.None;
    this.localizationType = MediastinumLocalizationTypeEnum.None;
    this.spaceClaimMaxWallThicknessInMm = null;
    this.maximumCraniocaudalExtensionInMm = null;
    this.isUpsideDownStomach = false;

    // Trachea
    this.tracheaType = TracheaTypeEnum.None;
    this.tracheaShiftType = LocationTypeEnum.None;
    this.heightInRelationType = HeightInRelationTypeEnum.None;
    this.minDiameterAxial = null;
    this.minDiameterCraniocaudal = null;
    this.isTracheomalaciaCollapseInExpiration = false;
    this.massDetailsMaxDiameterInMm = null;
    this.massDetailsDiagnosisType = MassDetailsDiagnosisTypeEnum.None;
  }
}
