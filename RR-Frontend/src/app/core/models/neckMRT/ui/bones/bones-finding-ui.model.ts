import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';
import { AxialLocation } from '@models/shared/spine/localizers/axial-location.model';
import { SpinalCanalLocation } from '@models/shared/spine/localizers/spinal-canal-location.model';

import { AxialDeviationTypeEnum } from '@enums/neckMRT/bones/axis-deviation';
import { ModicClassificationTypeEnum } from '@enums/neckMRT/bones/erosive-osteochondrosis';
import { ExtensionReferenceSpinalCanalTypeEnum, PathologyTypeEnum } from '@enums/neckMRT/bones/intervertebral-disc';
import { CharacterizationTypeEnum, MyelonDifferentialDiagnosisTypeEnum } from '@enums/neckMRT/bones/myelon';
import { OsteomyelitisDifferentialDiagnosisTypeEnum } from '@enums/neckMRT/bones/osteomyelitis';
import { HistologyKnownTypeEnum, DifferentialDiagnosisTypeEnum } from '@enums/neckMRT/bones/spatial-neoplasm';

import { BonesFindingBaseUiModel } from '@models/neckMRT/ui/bones/bones-finding-base-ui.model';

export class BonesFindingUiModel extends BonesFindingBaseUiModel {
  // common
  isRight: boolean;
  isLeft: boolean;
  isAbscess: boolean;
  sizeInMm: number;
  isSubordinate: boolean;

  // ExternalMaterial
  isSpondylodesis: boolean;
  spondylodesisSpineLocations: SpineLocation;
  spondylodesisTraumaLocations: DiscGeneralLocationModel;
  isOsteosynthesis: boolean;
  osteosynthesisSpineLocations: SpineLocation;
  isIntervertebralDiscProthesis: boolean;
  prothesisSpineLocations: SpineLocation;
  isVertebroplasty: boolean;

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
  spineAxialLocations: AxialLocation;
  isParavertebralinflammatoryReaction: boolean;

  // Myelon
  isIncreasedT2Signal: boolean;
  characterizationType: CharacterizationTypeEnum;
  extensionCraniocaudalInMm: number;
  extensionSagittalInMm: number;
  spinalCanalLocations: SpinalCanalLocation; // TODO check localizer in SpineMRT 7 and ThoraxCT
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
  isSuspicionOf: boolean;
  spatialNeoplasmDifferentialDiagnosisType1: DifferentialDiagnosisTypeEnum;
  spatialNeoplasmDifferentialDiagnosisType2: DifferentialDiagnosisTypeEnum;
  spatialNeoplasmDifferentialDiagnosisType3: DifferentialDiagnosisTypeEnum;

  constructor() {
    super();

    // common
    this.isRight = false;
    this.isLeft = false;
    this.isAbscess = false;
    this.sizeInMm = null;
    this.isSubordinate = false;

    // ExternalMaterial
    this.isSpondylodesis = false;
    this.spondylodesisSpineLocations = new SpineLocation();
    this.spondylodesisTraumaLocations = new DiscGeneralLocationModel();
    this.isOsteosynthesis = false;
    this.osteosynthesisSpineLocations = new SpineLocation();
    this.isIntervertebralDiscProthesis = false;
    this.prothesisSpineLocations = new SpineLocation();
    this.isVertebroplasty = false;

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
    this.spineAxialLocations = new AxialLocation();
    this.isParavertebralinflammatoryReaction = false;

    // Myelon
    this.isIncreasedT2Signal = false;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.extensionCraniocaudalInMm = null;
    this.extensionSagittalInMm = null;
    this.spinalCanalLocations = new SpinalCanalLocation(); // TODO check localizer in SpineMRT 7 and ThoraxCT
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
    this.isSuspicionOf = false;
    this.spatialNeoplasmDifferentialDiagnosisType1 = DifferentialDiagnosisTypeEnum.None;
    this.spatialNeoplasmDifferentialDiagnosisType2 = DifferentialDiagnosisTypeEnum.None;
    this.spatialNeoplasmDifferentialDiagnosisType3 = DifferentialDiagnosisTypeEnum.None;
  }
}
