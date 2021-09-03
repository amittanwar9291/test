import { AxialDeviationTypeEnum } from '@enums/neckMRT/bones/axis-deviation';
import { ModicClassificationTypeEnum } from '@enums/neckMRT/bones/erosive-osteochondrosis';
import { ExtensionReferenceSpinalCanalTypeEnum, PathologyTypeEnum } from '@enums/neckMRT/bones/intervertebral-disc';
import { CharacterizationTypeEnum, MyelonDifferentialDiagnosisTypeEnum } from '@enums/neckMRT/bones/myelon';
import { OsteomyelitisDifferentialDiagnosisTypeEnum } from '@enums/neckMRT/bones/osteomyelitis';
import { HistologyKnownTypeEnum, LocalSpreadTypeEnum, DifferentialDiagnosisTypeEnum } from '@enums/neckMRT/bones/spatial-neoplasm';

import { BonesFindingBaseApiModel } from '@models/neckMRT/api/bones/bones-finding-base-api.model';

export class BonesFindingApiModel extends BonesFindingBaseApiModel {
  // common
  spineLocations: string;
  isMaxilla: boolean;
  isMandible: boolean;
  isCondylarProcess: boolean;
  isRight: boolean;
  isLeft: boolean;
  isAbscess: boolean;
  isOsTemporale: boolean;
  isOsSphenoidale: boolean;
  isOsEthmoidale: boolean;
  isMaxillaPalatineProcess: boolean;
  isMaxillaAlveolarProcess: boolean;
  isRamusMandibulae: boolean;
  isCoronoideusProcess: boolean;
  isMandibleAlveolarProcess: boolean;
  sizeInMm: number;
  isSubordinate: boolean;

  // ExternalMaterial
  isSpondylodesis: boolean;
  spondylodesisSpineLocations: string;
  spondylodesisTraumaLocations: string;
  isOsteosynthesis: boolean;
  osteosynthesisSpineLocations: string;
  isIntervertebralDiscProthesis: boolean;
  prothesisSpineLocations: string;
  isVertebroplasty: boolean;
  vertebroplastySpineLocations: string;

  // AxisDeviation
  axialDeviationType: AxialDeviationTypeEnum;

  // IntervertebralDisc
  pathologyType: PathologyTypeEnum;
  maxDiameterInMm: number;
  extensionReferenceSpinalCanalType: ExtensionReferenceSpinalCanalTypeEnum;
  sagittalWidthOfCanalInMm: number;
  isHighGradeCSF: boolean;
  isMyelonCompression: boolean;
  isNarrowingOfTheIntervertebral: boolean;
  isBroadbased: boolean;
  isOsteophyteFormation: boolean;
  isMigrationCranial: boolean;
  isMigrationCaudal: boolean;

  // ErosiveOsteochondrosis
  modicClassificationType: ModicClassificationTypeEnum;

  // Spondylodiscitis
  isIncreasedSizeOfDisc: boolean;
  isT2wHyperintensityOfDisc: boolean;
  isContrastEnhancement: boolean;
  isEndplateEdema: boolean;
  isErosionsOfTheEndplates: boolean;
  isVertebraEdema: boolean;
  isOsteomyelitis: boolean;
  spineAxialLocations: string;
  isParavertebralinflammatoryReaction: boolean;

  // Myelon
  isIncreasedT2Signal: boolean;
  characterizationType: CharacterizationTypeEnum;
  extensionCraniocaudalInMm: number;
  extensionSagittalInMm: number;
  spinalCanalLocations: string;
  myelonDifferentialDiagnosis1: MyelonDifferentialDiagnosisTypeEnum;
  myelonDifferentialDiagnosis2: MyelonDifferentialDiagnosisTypeEnum;

  // BoneMarrowEdema
  isMaxillaRight: boolean;
  isMaxillaLeft: boolean;
  isMandibleRight: boolean;
  isMandibleLeft: boolean;
  isCondylarProcessRight: boolean;
  isCondylarProcessLeft: boolean;
  isManubriumSterni: boolean;
  isSkullBase: boolean;
  isVertebra: boolean;
  isTendinitisCalcareaLongus: boolean;
  isTendinitisRight: boolean;
  isTendinitisLeft: boolean;

  // Osteomyelitis
  isNasalSeptum: boolean;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  isPeripheralContrastEnhancement: boolean;
  isOverOneLesionOfSameEntity: boolean;
  isNecrosis: boolean;
  isMultiple: boolean;
  osteomyelitisDifferentialDiagnosis: OsteomyelitisDifferentialDiagnosisTypeEnum;

  // SpatialNeoplasm
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  isSpine: boolean;
  isFacialSkeleton: boolean;
  isCartilage: boolean;
  isPosteriorCranialFossa: boolean;
  isOsIncisivum: boolean;
  isOsPalatinum: boolean;
  isVomer: boolean;
  isSuperiorNasalConcha: boolean;
  isMiddleNasalConcha: boolean;
  isInferiorNasalConcha: boolean;
  isOsHyoideum: boolean;
  isThyroidCartilage: boolean;
  isCricoidCartilage: boolean;
  isArytenoidCartilage: boolean;
  isOsOccipitale: boolean;
  isClivus: boolean;
  localSpreadType: LocalSpreadTypeEnum;
  isSuspicionOf: boolean;
  spatialNeoplasmDifferentialDiagnosisType1: DifferentialDiagnosisTypeEnum;
  spatialNeoplasmDifferentialDiagnosisType2: DifferentialDiagnosisTypeEnum;
  spatialNeoplasmDifferentialDiagnosisType3: DifferentialDiagnosisTypeEnum;
  isWithinThePrimaryAffectedBone: boolean;

  constructor() {
    super();

    // common
    this.spineLocations = 'None';
    this.isMaxilla = false;
    this.isMandible = false;
    this.isCondylarProcess = false;
    this.isRight = false;
    this.isLeft = false;
    this.isAbscess = false;
    this.isOsTemporale = false;
    this.isOsSphenoidale = false;
    this.isOsEthmoidale = false;
    this.isMaxillaPalatineProcess = false;
    this.isMaxillaAlveolarProcess = false;
    this.isRamusMandibulae = false;
    this.isCoronoideusProcess = false;
    this.isMandibleAlveolarProcess = false;
    this.sizeInMm = null;
    this.isSubordinate = false;

    // ExternalMaterial
    this.isSpondylodesis = false;
    this.spondylodesisSpineLocations = 'None';
    this.spondylodesisTraumaLocations = 'None';
    this.isOsteosynthesis = false;
    this.osteosynthesisSpineLocations = 'None';
    this.isIntervertebralDiscProthesis = false;
    this.prothesisSpineLocations = 'None';
    this.isVertebroplasty = false;
    this.vertebroplastySpineLocations = 'None';

    // AxisDeviation
    this.axialDeviationType = AxialDeviationTypeEnum.None;

    // IntervertebralDisc
    this.pathologyType = PathologyTypeEnum.None;
    this.maxDiameterInMm = null;
    this.extensionReferenceSpinalCanalType = ExtensionReferenceSpinalCanalTypeEnum.None;
    this.sagittalWidthOfCanalInMm = null;
    this.isHighGradeCSF = false;
    this.isMyelonCompression = false;
    this.isNarrowingOfTheIntervertebral = false;
    this.isBroadbased = false;
    this.isOsteophyteFormation = false;
    this.isMigrationCranial = false;
    this.isMigrationCaudal = false;

    // ErosiveOsteochondrosis
    this.modicClassificationType = ModicClassificationTypeEnum.None;

    // Spondylodiscitis
    this.isIncreasedSizeOfDisc = false;
    this.isT2wHyperintensityOfDisc = false;
    this.isContrastEnhancement = false;
    this.isEndplateEdema = false;
    this.isErosionsOfTheEndplates = false;
    this.isVertebraEdema = false;
    this.isOsteomyelitis = false;
    this.spineAxialLocations = 'None';
    this.isParavertebralinflammatoryReaction = false;

    // Myelon
    this.isIncreasedT2Signal = false;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.extensionCraniocaudalInMm = null;
    this.extensionSagittalInMm = null;
    this.spinalCanalLocations = 'None';
    this.myelonDifferentialDiagnosis1 = MyelonDifferentialDiagnosisTypeEnum.None;
    this.myelonDifferentialDiagnosis2 = MyelonDifferentialDiagnosisTypeEnum.None;

    // BoneMarrowEdema
    this.isMaxillaRight = false;
    this.isMaxillaLeft = false;
    this.isMandibleRight = false;
    this.isMandibleLeft = false;
    this.isCondylarProcessRight = false;
    this.isCondylarProcessLeft = false;
    this.isManubriumSterni = false;
    this.isSkullBase = false;
    this.isVertebra = false;
    this.isTendinitisCalcareaLongus = false;
    this.isTendinitisRight = false;
    this.isTendinitisLeft = false;

    // Osteomyelitis
    this.isNasalSeptum = false;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.isPeripheralContrastEnhancement = false;
    this.isOverOneLesionOfSameEntity = false;
    this.isNecrosis = false;
    this.isMultiple = false;
    this.osteomyelitisDifferentialDiagnosis = OsteomyelitisDifferentialDiagnosisTypeEnum.None;

    // SpatialNeoplasm
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.isSpine = false;
    this.isFacialSkeleton = false;
    this.isCartilage = false;
    this.isPosteriorCranialFossa = false;
    this.isOsIncisivum = false;
    this.isOsPalatinum = false;
    this.isVomer = false;
    this.isSuperiorNasalConcha = false;
    this.isMiddleNasalConcha = false;
    this.isInferiorNasalConcha = false;
    this.isOsHyoideum = false;
    this.isThyroidCartilage = false;
    this.isCricoidCartilage = false;
    this.isArytenoidCartilage = false;
    this.isOsOccipitale = false;
    this.isClivus = false;
    this.localSpreadType = LocalSpreadTypeEnum.None;
    this.isSuspicionOf = false;
    this.spatialNeoplasmDifferentialDiagnosisType1 = DifferentialDiagnosisTypeEnum.None;
    this.spatialNeoplasmDifferentialDiagnosisType2 = DifferentialDiagnosisTypeEnum.None;
    this.spatialNeoplasmDifferentialDiagnosisType3 = DifferentialDiagnosisTypeEnum.None;
    this.isWithinThePrimaryAffectedBone = false;
  }
}
