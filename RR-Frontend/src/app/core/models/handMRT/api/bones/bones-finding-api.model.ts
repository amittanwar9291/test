import {
  DorsomedialDrugTypeEnum,
  EtiologyDetailsTypeEnum,
  EtiologyTypeEnum,
  FacetTypeEnum,
  FractureClassificationTypeEnum,
  FractureFormNotSpecifiedTypeEnum,
  FractureFormScaphoideumTypeEnum,
  FractureFormSubTypeEnum,
  FractureFormTypeEnum,
  ImpactionImpingementSyndromeTypeEnum,
  LichtmanStagingSubTypeEnum,
  MinaarClassificationTypeEnum,
  PartitumTypeEnum,
  RadioulnarEarlyPhaseTypeEnum,
  RadioulnarImpingementTypeEnum,
  RadioulnarLatePhaseTypeEnum,
  ScaphoideumClassificationTypeEnum,
  ScaphoideumGradingTypeEnum,
  SignificanceTypeEnum,
  StagingTypeEnum,
  StandardVariantsTypeEnum,
  UlnocarpalEtiologyTypeEnum,
  HistologyTypeEnum,
  DifferentialDiagnoseTypeEnum,
  LocalExpansionTypeEnum
} from '@enums/handMRT/bones';
import { ArthritisDifferentialDiagnosisTypeEnum } from '@enums/handMRT/bones/arthritis/arthritis-differential-diagnosis-type.enum';
import { BoneMarrowEdemaDifferentialDiagnosisTypeEnum } from '@enums/handMRT/bones/bone-marrow-edema/bone-marrow-edema-differential-diagnosis-type.enum';
import { DistributionTypeEnum } from '@enums/handMRT/bones/bone-marrow-edema/distribution-type.enum';
import { OsteomyelitisDifferentialDiagnosisTypeEnum } from '@enums/handMRT/bones/osteomyelitis/osteomyelitis-differential-diagnosis-type.enum';
import { OsteomyelitisStageTypeEnum } from '@enums/handMRT/bones/osteomyelitis/osteomyelitis-stage-type.enum';
import { ScaphoidClassificationTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/scaphoid-classification-type.enum';
import { ScaphoidCystTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/scaphoid-cyst-type.enum';
import { ScaphoidOsteoarthritisTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/scaphoid-osteoarthritis-type.enum';
import { ScaphoidSclerosisTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/scaphoid-sclerosis-type.enum';
import { ScaphoidSnacTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/scaphoid-snac-type.enum';
import { VitalityTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/vitality-type.enum';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesFindingBaseApiModel } from './bones-finding-base-api.model';

export class BonesFindingApiModel extends BonesFindingBaseApiModel {
  descriptionType: DescriptionTypeEnum;
  involvedBonesLocalizer: string;
  handJointsLocalizer: string;
  involvedBonesType: string;
  isSecondary: boolean;
  isSuspected: boolean;
  isChondropathy: boolean;

  // Norm variants / anomalies
  standardVariantsType: StandardVariantsTypeEnum;
  isParatrapezium: boolean;
  isTrapeziumSecundarium: boolean;
  isStyloidum: boolean;
  isCapitatumSecundarium: boolean;
  isRadialeExternum: boolean;
  isCentrale: boolean;
  isTriangulare: boolean;
  isHypotriquetrum: boolean;
  isEpitrapezium: boolean;
  isTrapezoidesSecundarium: boolean;
  isOssiculumGruberi: boolean;
  isOsHamuliProprium: boolean;
  isVesalianum: boolean;
  isUlnareExternum: boolean;
  isParascaphoid: boolean;
  isHypolunatum: boolean;
  isEpilunatum: boolean;
  isEpipyramis: boolean;
  isLunula: boolean;
  etiologyType: EtiologyTypeEnum;
  minaarClassificationType: MinaarClassificationTypeEnum;
  etiologyDetailsType: EtiologyDetailsTypeEnum;
  partitumType: PartitumTypeEnum;
  facetType: FacetTypeEnum;
  isOsHematumBoneMarrowEdema: boolean;

  // Fracture
  fractureClassificationType: FractureClassificationTypeEnum;
  fractureFormType: FractureFormTypeEnum;
  fractureFormScaphoideumType: FractureFormScaphoideumTypeEnum;
  fractureFormNotSpecifiedType: FractureFormNotSpecifiedTypeEnum;
  fractureFormSubType: FractureFormSubTypeEnum;
  dorsomedialDrugType: DorsomedialDrugTypeEnum;

  // AvascularNecrosis
  scaphoideumClassificationType: ScaphoideumClassificationTypeEnum;
  scaphoideumGradingType: ScaphoideumGradingTypeEnum;
  lichtmanStagingType: StagingTypeEnum;
  lichtmanStagingSubType: LichtmanStagingSubTypeEnum;

  // Osteoarthritis
  isJointSpaceNarrowing: boolean;
  isSubchondralSclerosis: boolean;
  isOsteophyte: boolean;
  isSubchondralCyts: boolean;
  osteoarthritisSlacWristType: StagingTypeEnum;
  osteoarthritisSnacWristType: StagingTypeEnum;
  significanceType: SignificanceTypeEnum;
  isRemodellingAtIncisuraUlnaris: boolean;
  isIntraArticularBodies: boolean;
  isJoinSurfaceMoreThan20: boolean;
  isShortenedRadius: boolean;
  isDepressionOfJointSurface: boolean;
  isGapInJoinSurface: boolean;
  isPosttraumatic: boolean;
  eatonLitterStagingType: StagingTypeEnum;

  // ImpactionAndImpingementSyndrome
  impactionImpingementSyndromeType: ImpactionImpingementSyndromeTypeEnum;
  isArticularCartilageDamage: boolean;
  isIncreasedSubchondralSclerosis: boolean;
  isCystsFormation: boolean;
  isUlna: boolean;
  isOsLunatum: boolean;
  isOsTriquetrum: boolean;
  isTFCC: boolean;
  ulnocarpalEtiologyType: UlnocarpalEtiologyTypeEnum;
  isLunateNecrosis: boolean;
  isNegativeUlnarVariance: boolean;
  isSecondaryUlnarVariance: boolean;
  radioulnarImpingementType: RadioulnarImpingementTypeEnum;
  radioulnarEarlyPhaseType: RadioulnarEarlyPhaseTypeEnum;
  radioulnarLatePhaseType: RadioulnarLatePhaseTypeEnum;

  // ScaphoidPseudarthrosis
  vitalityType: VitalityTypeEnum;
  scaphoidPseudarthrosisClassificationType: ScaphoidClassificationTypeEnum;
  scaphoidCystType: ScaphoidCystTypeEnum;
  scaphoidSclerosisType: ScaphoidSclerosisTypeEnum;
  scaphoidOsteoarthritisType: ScaphoidOsteoarthritisTypeEnum;
  scaphoidSnacType: ScaphoidSnacTypeEnum;

  // Arthritis
  isJointEffusion: boolean;
  isSynovitis: boolean;
  isSynovitisWithPannus: boolean;
  isInflammatoryBoneMarrowEdema: boolean;
  isErosions: boolean;
  isProliferativeBoneChanges: boolean;
  isTenosynovitis: boolean;
  isBursitis: boolean;
  isDestructions: boolean;
  isMutilations: boolean;
  isAnkulosis: boolean;
  arthritisDifferentialDiagnosisType: ArthritisDifferentialDiagnosisTypeEnum;

  // Osteomyelitis
  osteomyelitisStageType: OsteomyelitisStageTypeEnum;
  isThinning: boolean;
  isDestruction: boolean;
  isIntraosseousAbscess: boolean;
  intraosseousSize: number;
  intraosseous2ndPlaneSize: number;
  intraosseous3rdPlaneSize: number;
  isPenumbraSign: boolean;
  isPeripheralContrast: boolean;
  isIntaosseousLasion: boolean;
  isSequester: boolean;
  sequesterSize: number;
  sequester2ndPlaneSize: number;
  sequester3rdPlaneSize: number;
  isNoContrastEnhancement: boolean;
  isSequesterLasion: boolean;
  isOsteolysis: boolean;
  isBoneApposition: boolean;
  isPeriostealThickening: boolean;
  isPeriostealRupture: boolean;
  isSubperiostealAbscess: boolean;
  subperiostealSize: number;
  osteomyelitisDifferentialDiagnosisType: OsteomyelitisDifferentialDiagnosisTypeEnum;

  // Bone marrow edema
  distributionType: DistributionTypeEnum;
  isThickenedSynovia: boolean;
  isSubchondralFracture: boolean;
  isCutisThickening: boolean;
  boneMarrowEdemaDifferentialDiagnosisType: BoneMarrowEdemaDifferentialDiagnosisTypeEnum;

  // Tumor
  // Tab 1
  isHistologyKnown: boolean;
  knownHistologyMalignancyType: HistologyTypeEnum;
  isDiaphyseal: boolean;
  extensionSize: number;
  extension2ndPlaneSize: number;
  extension3rdPlaneSize: number;
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  // Tab 2
  isGeographic: boolean;

  // Tab 3
  maxCartilageThicness: number;
  isAdjacentBoneInfiltration: boolean;
  isPathologicalFracture: boolean;
  isPathologicalFractureSuspected: boolean;
  isPerifocalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  localExpansionType: LocalExpansionTypeEnum;

  // Tab 4
  tumorDifferentialDiagnosis1Type: DifferentialDiagnoseTypeEnum;
  isDifferentialDiagnosisSuspected: boolean;
  tumorDifferentialDiagnosis2Type: DifferentialDiagnoseTypeEnum;
  tumorDifferentialDiagnosis3Type: DifferentialDiagnoseTypeEnum;
  isLesionSameEntity: boolean;
  isPrimarilyInvolvedBone: boolean;

  constructor() {
    super();
    this.descriptionType = DescriptionTypeEnum.None;
    this.involvedBonesLocalizer = 'None';
    this.handJointsLocalizer = 'None';
    this.involvedBonesType = 'None';
    this.isSecondary = false;
    this.isSuspected = false;
    this.isChondropathy = false;

    // Norm variants / anomalies
    this.standardVariantsType = StandardVariantsTypeEnum.None;
    this.isParatrapezium = false;
    this.isTrapeziumSecundarium = false;
    this.isStyloidum = false;
    this.isCapitatumSecundarium = false;
    this.isRadialeExternum = false;
    this.isCentrale = false;
    this.isTriangulare = false;
    this.isHypotriquetrum = false;
    this.isEpitrapezium = false;
    this.isTrapezoidesSecundarium = false;
    this.isOssiculumGruberi = false;
    this.isOsHamuliProprium = false;
    this.isVesalianum = false;
    this.isUlnareExternum = false;
    this.isParascaphoid = false;
    this.isHypolunatum = false;
    this.isEpilunatum = false;
    this.isEpipyramis = false;
    this.isLunula = false;
    this.etiologyType = EtiologyTypeEnum.None;
    this.minaarClassificationType = MinaarClassificationTypeEnum.None;
    this.etiologyDetailsType = EtiologyDetailsTypeEnum.None;
    this.partitumType = PartitumTypeEnum.None;
    this.facetType = FacetTypeEnum.None;
    this.isOsHematumBoneMarrowEdema = false;

    // Fracture
    this.fractureClassificationType = FractureClassificationTypeEnum.None;
    this.fractureFormType = FractureFormTypeEnum.None;
    this.fractureFormScaphoideumType = FractureFormScaphoideumTypeEnum.None;
    this.fractureFormNotSpecifiedType = FractureFormNotSpecifiedTypeEnum.None;
    this.fractureFormSubType = FractureFormSubTypeEnum.None;
    this.dorsomedialDrugType = DorsomedialDrugTypeEnum.None;

    // AvascularNecrosis
    this.scaphoideumClassificationType = ScaphoideumClassificationTypeEnum.None;
    this.scaphoideumGradingType = ScaphoideumGradingTypeEnum.None;
    this.lichtmanStagingType = StagingTypeEnum.None;
    this.lichtmanStagingSubType = LichtmanStagingSubTypeEnum.None;

    // Osteoarthritis
    this.isJointSpaceNarrowing = false;
    this.isSubchondralSclerosis = false;
    this.isOsteophyte = false;
    this.isSubchondralCyts = false;
    this.osteoarthritisSlacWristType = StagingTypeEnum.None;
    this.osteoarthritisSnacWristType = StagingTypeEnum.None;
    this.significanceType = SignificanceTypeEnum.None;
    this.isRemodellingAtIncisuraUlnaris = false;
    this.isIntraArticularBodies = false;
    this.isJoinSurfaceMoreThan20 = false;
    this.isShortenedRadius = false;
    this.isDepressionOfJointSurface = false;
    this.isGapInJoinSurface = false;
    this.isPosttraumatic = false;
    this.eatonLitterStagingType = StagingTypeEnum.None;

    // ImpactionAndImpingementSyndrome
    this.impactionImpingementSyndromeType = ImpactionImpingementSyndromeTypeEnum.None;
    this.isArticularCartilageDamage = false;
    this.isIncreasedSubchondralSclerosis = false;
    this.isCystsFormation = false;
    this.isUlna = false;
    this.isOsLunatum = false;
    this.isOsTriquetrum = false;
    this.isTFCC = false;
    this.ulnocarpalEtiologyType = UlnocarpalEtiologyTypeEnum.None;
    this.isLunateNecrosis = false;
    this.isNegativeUlnarVariance = false;
    this.isSecondaryUlnarVariance = false;
    this.radioulnarImpingementType = RadioulnarImpingementTypeEnum.None;
    this.radioulnarEarlyPhaseType = RadioulnarEarlyPhaseTypeEnum.None;
    this.radioulnarLatePhaseType = RadioulnarLatePhaseTypeEnum.None;

    // ScaphoidPseudarthrosis
    this.vitalityType = VitalityTypeEnum.None;
    this.scaphoidPseudarthrosisClassificationType = ScaphoidClassificationTypeEnum.None;
    this.scaphoidCystType = ScaphoidCystTypeEnum.None;
    this.scaphoidSclerosisType = ScaphoidSclerosisTypeEnum.None;
    this.scaphoidOsteoarthritisType = ScaphoidOsteoarthritisTypeEnum.None;
    this.scaphoidSnacType = ScaphoidSnacTypeEnum.None;

    // Arthritis
    this.isJointEffusion = false;
    this.isSynovitis = false;
    this.isSynovitisWithPannus = false;
    this.isInflammatoryBoneMarrowEdema = false;
    this.isErosions = false;
    this.isProliferativeBoneChanges = false;
    this.isTenosynovitis = false;
    this.isBursitis = false;
    this.isDestructions = false;
    this.isMutilations = false;
    this.isAnkulosis = false;
    this.arthritisDifferentialDiagnosisType = ArthritisDifferentialDiagnosisTypeEnum.None;

    // Osteomyelitis
    this.osteomyelitisStageType = OsteomyelitisStageTypeEnum.None;
    this.isThinning = false;
    this.isDestruction = false;
    this.isIntraosseousAbscess = false;
    this.intraosseousSize = null;
    this.intraosseous2ndPlaneSize = null;
    this.intraosseous3rdPlaneSize = null;
    this.isPenumbraSign = false;
    this.isPeripheralContrast = false;
    this.isIntaosseousLasion = false;
    this.isSequester = false;
    this.sequesterSize = null;
    this.sequester2ndPlaneSize = null;
    this.sequester3rdPlaneSize = null;
    this.isNoContrastEnhancement = false;
    this.isSequesterLasion = false;
    this.isOsteolysis = false;
    this.isBoneApposition = false;
    this.isPeriostealThickening = false;
    this.isPeriostealRupture = false;
    this.isSubperiostealAbscess = false;
    this.subperiostealSize = null;
    this.osteomyelitisDifferentialDiagnosisType = OsteomyelitisDifferentialDiagnosisTypeEnum.None;

    // Bone marrow edema
    this.distributionType = DistributionTypeEnum.None;
    this.isThickenedSynovia = false;
    this.isSubchondralFracture = false;
    this.isCutisThickening = false;
    this.boneMarrowEdemaDifferentialDiagnosisType = BoneMarrowEdemaDifferentialDiagnosisTypeEnum.None;

    // Tumor
    // Tab 1
    this.isHistologyKnown = false;
    this.knownHistologyMalignancyType = HistologyTypeEnum.None;
    this.isDiaphyseal = false;
    this.extensionSize = null;
    this.extension2ndPlaneSize = null;
    this.extension3rdPlaneSize = null;
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;

    // Tab 2
    this.isGeographic = false;

    // Tab 3
    this.maxCartilageThicness = null;
    this.isAdjacentBoneInfiltration = false;
    this.isPathologicalFracture = false;
    this.isPathologicalFractureSuspected = false;
    this.isPerifocalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.localExpansionType = LocalExpansionTypeEnum.None;

    // Tab 4
    this.tumorDifferentialDiagnosis1Type = DifferentialDiagnoseTypeEnum.None;
    this.isDifferentialDiagnosisSuspected = false;
    this.tumorDifferentialDiagnosis2Type = DifferentialDiagnoseTypeEnum.None;
    this.tumorDifferentialDiagnosis3Type = DifferentialDiagnoseTypeEnum.None;
    this.isLesionSameEntity = false;
    this.isPrimarilyInvolvedBone = false;
  }
}
