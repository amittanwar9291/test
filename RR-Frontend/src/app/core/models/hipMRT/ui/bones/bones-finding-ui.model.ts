import { HipBonesUiModel } from '@models/hipMRT/ui/bones/hip-bones-ui.model';
import {
  FractureSpecificationTypeEnum,
  AcetabulumTypeEnum,
  AlignmentTypeEnum,
  PositioningTypeEnum,
  Fracture62A1TypeEnum,
  Fracture62A2TypeEnum,
  Fracture62A3TypeEnum,
  Fracture62ATypeEnum,
  Fracture62B1TypeEnum,
  Fracture62B2TypeEnum,
  Fracture62B3TypeEnum,
  Fracture62BTypeEnum,
  Fracture62CTypeEnum,
  FractureAO62ClassificationTypeEnum,
  Fracture31C1TypeEnum,
  Fracture31C2TypeEnum,
  Fracture31CTypeEnum,
  FractureAO31CClassificationTypeEnum,
  Fracture31B1TypeEnum,
  Fracture31B2TypeEnum,
  Fracture31BTypeEnum,
  FractureAO31BClassificationTypeEnum,
  ShearFractureTypeEnum,
  Fracture31A1TypeEnum,
  Fracture31A2TypeEnum,
  Fracture31A3TypeEnum,
  Fracture31ATypeEnum,
  Fracture32ATypeEnum,
  Fracture32BTypeEnum,
  Fracture32CTypeEnum,
  Fracture32TypeEnum,
  FractureAO31A32ClassificationTypeEnum,
  TrochantericAvulsionTearTypeEnum,
  Fracture61A1TypeEnum,
  Fracture61A2TypeEnum,
  Fracture61ATypeEnum,
  Fracture61B1TypeEnum,
  Fracture61B2TypeEnum,
  Fracture61B3TypeEnum,
  Fracture61BTypeEnum,
  Fracture61C1TypeEnum,
  Fracture61C2TypeEnum,
  Fracture61C3TypeEnum,
  Fracture61CTypeEnum,
  FractureAO61ClassificationTypeEnum,
  SacralFractureTypeEnum,
  ClassificationRohenaQuinquillaTypeEnum,
  ExpansionCoronalTypeEnum,
  ExpansionTypeEnum,
  PartTypeEnum,
  DistributionTypeEnum,
  BoneMarrowDifferentialDiagnosisTypeEnum,
  CoxarthrosisDifferentialDiagnosisTypeEnum,
  StimulatedBoneMarrowTypeEnum,
  SideTypeEnum,
  CorticalBoneTypeEnum,
  ARCOClassificationTypeEnum,
  AvescularDifferentialDiagnosisTypeEnum,
  DegreeTypeEnum,
  CartilageDistributionTypeEnum,
  GeneralTypeEnum,
  VallotonKellgrenMRadaptedTypeEnum,
  StageTypeEnum,
  OsteomyelitisDifferentialDiagnosisTypeEnum,
  MassOsteolysisDifferentialDiagnosisTypeEnum
} from '@enums/hipMRT/bones/';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { BonesFindingBaseUiModel } from './bones-finding-base-ui.model';

export class BonesFindingUiModel extends BonesFindingBaseUiModel {
  // Common
  hipSpecificLocalizations: HipBonesUiModel;
  fractureSpecificationType: FractureSpecificationTypeEnum;
  isLesionSame: boolean;
  isArticularEffusion: boolean;
  isOsteochondralFragment: boolean;

  // Alignment
  alignmentType: AlignmentTypeEnum;
  isRight: boolean;
  isLeft: boolean;
  positioningType: PositioningTypeEnum;
  isDysplasia: boolean;
  isFlattened: boolean;
  acetabulumType: AcetabulumTypeEnum;
  isEpiphysiolysis: boolean;
  isEpiphysealBoneMarrowEdema: boolean;
  isEnlargedEpiphysealPlate: boolean;
  isIrregularEpiphysealPlate: boolean;
  isCrushedPhysis: boolean;
  isDislocatedFemoralHead: boolean;

  // Fracture Femoral Shaft And Trochanter
  fractureClassificationType: FractureAO31A32ClassificationTypeEnum;
  fracture32Type: Fracture32TypeEnum;
  fracture32AType: Fracture32ATypeEnum;
  fracture32BType: Fracture32BTypeEnum;
  fracture32CType: Fracture32CTypeEnum;
  fracture31AType: Fracture31ATypeEnum;
  fracture31A1Type: Fracture31A1TypeEnum;
  trochantericAvulsionTearType: TrochantericAvulsionTearTypeEnum;
  fracture31A2Type: Fracture31A2TypeEnum;
  fracture31A3Type: Fracture31A3TypeEnum;

  // Fracture Femoral Neck
  fractureAO31BClassificationType: FractureAO31BClassificationTypeEnum;
  fracture31BType: Fracture31BTypeEnum;
  fracture31B1Type: Fracture31B1TypeEnum;
  fracture31B2Type: Fracture31B2TypeEnum;
  shearFractureType: ShearFractureTypeEnum;

  // Fracture Femoral Head
  fractureAO31CClassificationType: FractureAO31CClassificationTypeEnum;
  fracture31CType: Fracture31CTypeEnum;
  fracture31C1Type: Fracture31C1TypeEnum;
  fracture31C2Type: Fracture31C2TypeEnum;

  // Fracture Acetabulum
  fractureAO62ClassificationType: FractureAO62ClassificationTypeEnum;
  fracture62AType: Fracture62ATypeEnum;
  fracture62A1Type: Fracture62A1TypeEnum;
  fracture62A2Type: Fracture62A2TypeEnum;
  fracture62A3Type: Fracture62A3TypeEnum;
  fracture62BType: Fracture62BTypeEnum;
  fracture62B1Type: Fracture62B1TypeEnum;
  fracture62B2Type: Fracture62B2TypeEnum;
  fracture62B3Type: Fracture62B3TypeEnum;
  fracture62CType: Fracture62CTypeEnum;

  // Fracture Pelvis
  fractureAO61ClassificationType: FractureAO61ClassificationTypeEnum;
  fracture61AType: Fracture61ATypeEnum;
  fracture61A1Type: Fracture61A1TypeEnum;
  fracture61A2Type: Fracture61A2TypeEnum;
  fracture61BType: Fracture61BTypeEnum;
  fracture61B1Type: Fracture61B1TypeEnum;
  fracture61B2Type: Fracture61B2TypeEnum;
  isSymphysisDisruption: boolean;
  fracture61B3Type: Fracture61B3TypeEnum;
  fracture61CType: Fracture61CTypeEnum;
  fracture61C1Type: Fracture61C1TypeEnum;
  fracture61C2Type: Fracture61C2TypeEnum;
  furtherImageFeaturesType: string;
  fracture61C3Type: Fracture61C3TypeEnum;
  sacralFractureType: SacralFractureTypeEnum;

  // Stress Fracture
  partType: PartTypeEnum;
  expansionType: ExpansionTypeEnum;
  isPeriostealEdema: boolean;
  isT1wHypointenseLinePerpendicular: boolean;
  expansionCoronalType: ExpansionCoronalTypeEnum;
  expansionInMm: number;
  classificationRohenaQuinquillaType: ClassificationRohenaQuinquillaTypeEnum;

  // Subchondral Insufficiency Fracture
  isLinearSignalAlterationParallel: boolean;
  isT1wLowSignalArea: boolean;
  isArticularCorticalImpressionFracture: boolean;
  isSubchondralCleftWithFluid: boolean;
  maxDiameterInMm: number;
  isDislocated: boolean;
  isPerifocalContrastEnhancement: boolean;
  isTransientBoneMarrowEdema: boolean;

  // Bone Marrow Edema
  distributionType: DistributionTypeEnum;
  isThickenedSynoviaWithEdema: boolean;
  isSubchondralFracture: boolean;
  boneMarrowDifferentialDiagnosisType: BoneMarrowDifferentialDiagnosisTypeEnum;

  // Transient Bone Marrow Edema
  isSubchondralLesion: boolean;
  coxarthrosisDifferentialDiagnosisType: CoxarthrosisDifferentialDiagnosisTypeEnum;
  stimulatedBoneMarrowType: StimulatedBoneMarrowTypeEnum;

  // Avascular
  sideType: SideTypeEnum;
  isSubchondralLowSignalIntensity: boolean;
  isDoubleLineSignT2w: boolean;
  isMirroringArticularSurface: boolean;
  isAnterosuperior: boolean;
  isAdjacentBoneMarrowEdema: boolean;
  coronalMeasurementInDegrees: number;
  sagittalMeasurementInDegrees: number;
  corticalBoneType: CorticalBoneTypeEnum;
  isCoxarthrosis: boolean;
  arcoClassificationType: ARCOClassificationTypeEnum;
  avescularDifferentialDiagnosisType: AvescularDifferentialDiagnosisTypeEnum;

  // Coxarthrosis
  isFemur: boolean;
  isAcetabulum: boolean;
  isChondropathy: boolean;
  degreeType: DegreeTypeEnum;
  cartilageDistributionType: CartilageDistributionTypeEnum;
  isJointSpaceNarrowing: boolean;
  isSubchondralEdema: boolean;
  isOsteophytes: boolean;
  isSubchondralCystsgeodes: boolean;
  isGanglion: boolean;
  isSubchondralSclerosis: boolean;
  isSynovialCyst: boolean;
  maxSynovialCystDiameterInMm: number;
  maxGanglionDiameterInMm: number;
  isSynovitis: boolean;
  isParalabralCysts: boolean;
  isIntraarticularLoosebody: boolean;
  isQuantityOverOne: boolean;
  maxLoosebodyDiameterInMm: number;
  generalType: GeneralTypeEnum;
  vallotonKellgrenMRadaptedType: VallotonKellgrenMRadaptedTypeEnum;

  // Osteomyelitis
  stageType: StageTypeEnum;
  isThinningscalopping: boolean;
  isDestruction: boolean;
  isIntraosseousAbscessBrodieAbscess: boolean;
  abscessSizeInMm: number;
  abscessSecondSizeInMm: number;
  abscessThirdSizeInMm: number;
  isPenumbraSign: boolean;
  isPeripheralContrastEnhancement: boolean;
  isAbscessLesionSame: boolean;
  isSequester: boolean;
  sequesterSizeInMm: number;
  sequesterSecondSizeInMm: number;
  sequesterThirdSizeInMm: number;
  isNoContrastEnhancement: boolean;
  isSinusTractFistula: boolean;
  isSpongiosaLesionSame: boolean;
  isOsteolysis: boolean;
  isCloaca: boolean;
  isBoneApposition: boolean;
  isPeriostealThickening: boolean;
  isPeriostealRupture: boolean;
  isSubperiostealAbscess: boolean;
  subperiostealSizeInMm: number;
  osteomyelitisDifferentialDiagnosisType: OsteomyelitisDifferentialDiagnosisTypeEnum;

  // Osteitis
  isRightBoneMarrowEdemaOsPubis: boolean;
  isRightMuscleEdemaOfAdductor: boolean;
  isRightJointIrregularity: boolean;
  isRightSecondaryCleftSign: boolean;
  isRightEnthesiopathy: boolean;
  isLeftPubicBoneMarrowEdema: boolean;
  isLeftMuscleEdemaOfAdductor: boolean;
  isLeftJointIrregularity: boolean;
  isLeftSecondaryCleftSign: boolean;
  isLeftEnthesiopathy: boolean;

  // MassOrOsteolysis tab 1
  descriptionType: DescriptionTypeEnum;
  expansionSizeInMm: number;
  expansionSecondSizeInMm: number;
  expansionThirdSizeInMm: number;
  referencePicture: ReferencePictureUiModel;

  // MassOrOsteolysis tab 4
  differentialDiagnosis1: MassOsteolysisDifferentialDiagnosisTypeEnum;
  isSuspected: boolean;

  constructor() {
    super();

    // Common
    this.hipSpecificLocalizations = new HipBonesUiModel();
    this.fractureSpecificationType = FractureSpecificationTypeEnum.None;
    this.isLesionSame = false;
    this.isArticularEffusion = false;
    this.isOsteochondralFragment = false;

    // Alignment
    this.alignmentType = AlignmentTypeEnum.None;
    this.isRight = false;
    this.isLeft = false;
    this.positioningType = PositioningTypeEnum.None;
    this.isDysplasia = false;
    this.isFlattened = false;
    this.acetabulumType = AcetabulumTypeEnum.None;
    this.isEpiphysiolysis = false;
    this.isEpiphysealBoneMarrowEdema = false;
    this.isEnlargedEpiphysealPlate = false;
    this.isIrregularEpiphysealPlate = false;
    this.isCrushedPhysis = false;
    this.isDislocatedFemoralHead = false;

    // Fracture Femoral Shaft And Trochanter
    this.fractureClassificationType = FractureAO31A32ClassificationTypeEnum.None;
    this.fracture32Type = Fracture32TypeEnum.None;
    this.fracture32AType = Fracture32ATypeEnum.None;
    this.fracture32BType = Fracture32BTypeEnum.None;
    this.fracture32CType = Fracture32CTypeEnum.None;
    this.fracture31AType = Fracture31ATypeEnum.None;
    this.fracture31A1Type = Fracture31A1TypeEnum.None;
    this.trochantericAvulsionTearType = TrochantericAvulsionTearTypeEnum.None;
    this.fracture31A2Type = Fracture31A2TypeEnum.None;
    this.fracture31A3Type = Fracture31A3TypeEnum.None;

    // Fracture Femoral Neck
    this.fractureAO31BClassificationType = FractureAO31BClassificationTypeEnum.None;
    this.fracture31BType = Fracture31BTypeEnum.None;
    this.fracture31B1Type = Fracture31B1TypeEnum.None;
    this.fracture31B2Type = Fracture31B2TypeEnum.None;
    this.shearFractureType = ShearFractureTypeEnum.None;

    // Fracture Femoral Head
    this.fractureAO31CClassificationType = FractureAO31CClassificationTypeEnum.None;
    this.fracture31CType = Fracture31CTypeEnum.None;
    this.fracture31C1Type = Fracture31C1TypeEnum.None;
    this.fracture31C2Type = Fracture31C2TypeEnum.None;

    // Fracture Acetabulum
    this.fractureAO62ClassificationType = FractureAO62ClassificationTypeEnum.None;
    this.fracture62AType = Fracture62ATypeEnum.None;
    this.fracture62A1Type = Fracture62A1TypeEnum.None;
    this.fracture62A2Type = Fracture62A2TypeEnum.None;
    this.fracture62A3Type = Fracture62A3TypeEnum.None;
    this.fracture62BType = Fracture62BTypeEnum.None;
    this.fracture62B1Type = Fracture62B1TypeEnum.None;
    this.fracture62B2Type = Fracture62B2TypeEnum.None;
    this.fracture62B3Type = Fracture62B3TypeEnum.None;
    this.fracture62CType = Fracture62CTypeEnum.None;

    // Fracture Pelvis
    this.fracture61AType = Fracture61ATypeEnum.None;
    this.fracture61A1Type = Fracture61A1TypeEnum.None;
    this.fracture61A2Type = Fracture61A2TypeEnum.None;
    this.fracture61BType = Fracture61BTypeEnum.None;
    this.fractureAO61ClassificationType = FractureAO61ClassificationTypeEnum.None;
    this.fracture61B1Type = Fracture61B1TypeEnum.None;
    this.fracture61B2Type = Fracture61B2TypeEnum.None;
    this.isSymphysisDisruption = false;
    this.fracture61B3Type = Fracture61B3TypeEnum.None;
    this.fracture61CType = Fracture61CTypeEnum.None;
    this.fracture61C1Type = Fracture61C1TypeEnum.None;
    this.fracture61C2Type = Fracture61C2TypeEnum.None;
    this.furtherImageFeaturesType = 'None';
    this.fracture61C3Type = Fracture61C3TypeEnum.None;
    this.sacralFractureType = SacralFractureTypeEnum.None;

    // Stress Fracture
    this.partType = PartTypeEnum.None;
    this.expansionType = ExpansionTypeEnum.None;
    this.isPeriostealEdema = false;
    this.isT1wHypointenseLinePerpendicular = false;
    this.expansionCoronalType = ExpansionCoronalTypeEnum.None;
    this.expansionInMm = null;

    // Subchondral Insufficiency Fracture
    this.isLinearSignalAlterationParallel = false;
    this.isT1wLowSignalArea = false;
    this.isArticularCorticalImpressionFracture = false;
    this.isSubchondralCleftWithFluid = false;
    this.maxDiameterInMm = null;
    this.isDislocated = false;
    this.isPerifocalContrastEnhancement = false;
    this.isTransientBoneMarrowEdema = false;

    // Bone Marrow Edema
    this.distributionType = DistributionTypeEnum.None;
    this.isThickenedSynoviaWithEdema = false;
    this.isSubchondralFracture = false;
    this.boneMarrowDifferentialDiagnosisType = BoneMarrowDifferentialDiagnosisTypeEnum.None;

    // Transient Bone Marrow Edema
    this.isSubchondralLesion = false;
    this.coxarthrosisDifferentialDiagnosisType = CoxarthrosisDifferentialDiagnosisTypeEnum.None;
    this.stimulatedBoneMarrowType = StimulatedBoneMarrowTypeEnum.None;

    // Avascular
    this.sideType = SideTypeEnum.None;
    this.isSubchondralLowSignalIntensity = false;
    this.isDoubleLineSignT2w = false;
    this.isMirroringArticularSurface = false;
    this.isAnterosuperior = false;
    this.isAdjacentBoneMarrowEdema = false;
    this.coronalMeasurementInDegrees = null;
    this.sagittalMeasurementInDegrees = null;
    this.corticalBoneType = CorticalBoneTypeEnum.None;
    this.isCoxarthrosis = false;
    this.arcoClassificationType = ARCOClassificationTypeEnum.None;
    this.avescularDifferentialDiagnosisType = AvescularDifferentialDiagnosisTypeEnum.None;

    // Coxarthrosis
    this.isFemur = false;
    this.isAcetabulum = false;
    this.isChondropathy = false;
    this.degreeType = DegreeTypeEnum.None;
    this.cartilageDistributionType = CartilageDistributionTypeEnum.None;
    this.isJointSpaceNarrowing = false;
    this.isSubchondralEdema = false;
    this.isOsteophytes = false;
    this.isSubchondralCystsgeodes = false;
    this.isGanglion = false;
    this.isSubchondralSclerosis = false;
    this.isSynovialCyst = false;
    this.maxSynovialCystDiameterInMm = null;
    this.maxGanglionDiameterInMm = null;
    this.isSynovitis = false;
    this.isParalabralCysts = false;
    this.isIntraarticularLoosebody = false;
    this.isQuantityOverOne = false;
    this.maxLoosebodyDiameterInMm = null;
    this.generalType = GeneralTypeEnum.None;
    this.vallotonKellgrenMRadaptedType = VallotonKellgrenMRadaptedTypeEnum.None;

    // Osteomyelitis
    this.stageType = StageTypeEnum.None;
    this.isThinningscalopping = false;
    this.isDestruction = false;
    this.isIntraosseousAbscessBrodieAbscess = false;
    this.abscessSizeInMm = null;
    this.abscessSecondSizeInMm = null;
    this.abscessThirdSizeInMm = null;
    this.isPenumbraSign = false;
    this.isPeripheralContrastEnhancement = false;
    this.isAbscessLesionSame = false;
    this.isSequester = false;
    this.sequesterSizeInMm = null;
    this.sequesterSecondSizeInMm = null;
    this.sequesterThirdSizeInMm = null;
    this.isNoContrastEnhancement = false;
    this.isSinusTractFistula = false;
    this.isSpongiosaLesionSame = false;
    this.isOsteolysis = false;
    this.isCloaca = false;
    this.isBoneApposition = false;
    this.isPeriostealThickening = false;
    this.isPeriostealRupture = false;
    this.isSubperiostealAbscess = false;
    this.subperiostealSizeInMm = null;
    this.osteomyelitisDifferentialDiagnosisType = OsteomyelitisDifferentialDiagnosisTypeEnum.None;

    // Osteitis
    this.isRightBoneMarrowEdemaOsPubis = false;
    this.isRightMuscleEdemaOfAdductor = false;
    this.isRightJointIrregularity = false;
    this.isRightSecondaryCleftSign = false;
    this.isRightEnthesiopathy = false;
    this.isLeftPubicBoneMarrowEdema = false;
    this.isLeftMuscleEdemaOfAdductor = false;
    this.isLeftJointIrregularity = false;
    this.isLeftSecondaryCleftSign = false;
    this.isLeftEnthesiopathy = false;

    // MassOrOsteolysis tab 1
    this.descriptionType = DescriptionTypeEnum.None;
    this.expansionSizeInMm = null;
    this.expansionSecondSizeInMm = null;
    this.expansionThirdSizeInMm = null;
    this.referencePicture = new ReferencePictureUiModel();

    // MassOrOsteolysis tab 4
    this.differentialDiagnosis1 = MassOsteolysisDifferentialDiagnosisTypeEnum.None;
    this.isSuspected = false;
  }
}
