import { FindingBase } from '@models/shared/finding/finding.base';
import { IntervertebralDiscJointsFindingTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints/intervertebral-disc-joints-finding-types.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import {
  AnderssonFractureTypesEnum,
  AtlantooccipitalDistanceTypesEnum,
  BulgingTypesEnum,
  CraniocaudalesLevelTypesEnum,
  DifferentialDiagnosisTypesEnum,
  EntheitisTypesEnum,
  ExpansionTypesEnum,
  FindingDetailTypesEnum,
  ModicClassificationTypesEnum,
  PathologyTypesEnum,
  NerveRootAffectionTypesEnum,
  SideTypesEnum,
  SpinalCanalStenosisTypesEnum,
  SpondylitisNumberTypesEnum,
  StenosisTypesEnum
} from '@enums/spineMRT/intervertebral-disc-joints';
import { AxialLocation } from '@models/shared/spine/localizers/axial-location.model';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { SpineDiscLocationModel } from '@models/shared/spine/localizers/spine-disc-location.model';

export class IntervertebralDiscJointsFindingUiModel extends FindingBase {
  // common
  findingType: IntervertebralDiscJointsFindingTypesEnum;
  spineLocation: SpineLocation;
  findingDetailType: FindingDetailTypesEnum;
  discLocation: SpineDiscLocationModel;
  expansionType: ExpansionTypesEnum;
  spinalCanalStenosisType: SpinalCanalStenosisTypesEnum;
  widthOfTheSpinalCanalInMm: number;
  nerveRootAffectionType: NerveRootAffectionTypesEnum;
  isNerveRootRight: boolean;
  isNerveRootLeft: boolean;
  stenosisType: StenosisTypesEnum;
  isStenosisRight: boolean;
  isStenosisLeft: boolean;
  isOsteophyteFormation: boolean;
  isAccompanyingOsteochondrosis: boolean;
  modicClassificationType: ModicClassificationTypesEnum;
  isAccompanyingFacetJointArthrosis: boolean;
  isAccompanyingFacetJointArthrosisLocalizationRight: boolean;
  isAccompanyingFacetJointArthrosisLocalizationLeft: boolean;
  isHypertrophy: boolean;
  isJointEffusion: boolean;
  isBoneMarrowEdema: boolean;
  isSynovialCyst: boolean;
  isSynovialCystRight: boolean;
  isSynovialCystLeft: boolean;
  maxDiameter: number;
  isDiameterMigrationSequester: boolean;
  diameterMigrationSequester: number;
  isCraniocaudalesLevel: boolean;
  craniocaudalesLevelType: CraniocaudalesLevelTypesEnum;
  isSecondary: boolean;

  // Degeneration
  isNarrowing: boolean;
  isT2SignalReductionOfTheIntervertebralDisc: boolean;
  isBulging: boolean;
  bulgingType: BulgingTypesEnum;
  sideType: SideTypesEnum;

  // FacetJointArthrosis
  isFacetJointArthrosisLocalizationRight: boolean;
  isFacetJointArthrosisLocalizationLeft: boolean;
  isForaminalStenosis: boolean;

  // Inflammatory
  isIncreasedSizeOfTheDisc: boolean;
  isT2wHyperintensityOfTheDisc: boolean;
  isContrastEnhancementOfTheDisc: boolean;
  isEpiduralInflammationOrAbscess: boolean;
  isExpansionInZDimension: boolean;
  expansionInZDimensionInMm: number;
  isEpiduralContrastEnhancement: boolean;
  spineAxialLocation: AxialLocation;
  isParavertebralInflammatoryResponse: boolean;
  isSoftTissueEdema: boolean;
  isAbscess: boolean;
  isEpidural: boolean;
  largestDiameterEpidural: number;
  isIntraspinal: boolean;
  largestDiameterIntraspinal: number;
  isActiveDiscitis: boolean;

  // Trauma
  isRuptureOfPosteriorLongitudinalLigament: boolean;
  isRuptureOfAnteriorLongitudinalLigament: boolean;
  isRuptureOfDiscusIntervertebralis: boolean;

  // Rheumatism
  pathologyType: PathologyTypesEnum;
  isEntheitis: boolean;
  isDiscitis: boolean;
  isArthritis: boolean;
  entheitisType: EntheitisTypesEnum;
  isSpondylitisAnterior: boolean;
  isAnteriorT1w: boolean;
  isAnteriorSTIR: boolean;
  isAnteriorContrastEnhancement: boolean;
  isSpondylitisPosterior: boolean;
  isPosteriorT1w: boolean;
  isPosteriorSTIR: boolean;
  isPosteriorContrastEnhancement: boolean;
  isSpondylitisMarginalis: boolean;
  isMarginalisT1w: boolean;
  isMarginalisSTIR: boolean;
  isMarginalisContrastEnhancement: boolean;
  spondylitisNumberType: SpondylitisNumberTypesEnum;
  isSclerosis: boolean;
  isT1wHyperintensity: boolean;
  isSTIRHypointense: boolean;
  isSyndesmophyterose: boolean;
  isErosionOfAnteriorVertebraRomanusLesion: boolean;
  isVertebralBodySquaring: boolean;
  isMultisegmAnkylosing: boolean;
  isLigamentOssification: boolean;
  isAnteriorLongitudinalLigament: boolean;
  isPosteriorLongitudinalLigament: boolean;
  isLiggFlava: boolean;
  isLiggInterspinosa: boolean;
  isLiggSupraspinosa: boolean;
  isAnderssonLesion: boolean;
  isAnderssonFracture: boolean;
  anderssonFractureType: AnderssonFractureTypesEnum;
  isSynovialitis: boolean;
  isAnkylosis: boolean;
  isErosions: boolean;
  differentialDiagnosisType1: DifferentialDiagnosisTypesEnum;
  differentialDiagnosisType2: DifferentialDiagnosisTypesEnum;
  isParasyndesmophyte: boolean;
  isPeriostitis: boolean;
  isAtlantBoneMarrowEdema: boolean;
  isAtlantSynovialitis: boolean;
  isAtlantSynovialProliferation: boolean;
  isAtlantJointEffusion: boolean;
  isAtlantErosions: boolean;
  atlantoOccipitaleDistanceType: AtlantooccipitalDistanceTypesEnum;
  isContrastEnhancement: boolean;
  isIrregularThickeningOfTheCorticalBone: boolean;
  isDensErosion: boolean;

  anteriorReferencePicture: ReferencePictureUiModel; // Enthesitis, Enthesitis/Diszitis
  posteriorReferencePicture: ReferencePictureUiModel; // Enthesitis, Enthesitis/Diszitis
  marginalisReferencePicture: ReferencePictureUiModel; //  Enthesitis, Enthesitis/Diszitis
  discitisReferencePicture: ReferencePictureUiModel; // Diszitis/Arthritis, Enthesitis/Diszitis, Details Periostitis
  periostitisReferencePicture: ReferencePictureUiModel; // Periostitis, Arthritis/Periostitis

  constructor() {
    super();
    this.findingType = IntervertebralDiscJointsFindingTypesEnum.None;
    this.spineLocation = new SpineLocation();
    this.findingDetailType = FindingDetailTypesEnum.None;
    this.discLocation = new SpineDiscLocationModel();
    this.expansionType = ExpansionTypesEnum.None;
    this.spinalCanalStenosisType = SpinalCanalStenosisTypesEnum.None;
    this.widthOfTheSpinalCanalInMm = null;
    this.nerveRootAffectionType = NerveRootAffectionTypesEnum.None;
    this.isNerveRootRight = false;
    this.isNerveRootLeft = false;
    this.stenosisType = StenosisTypesEnum.None;
    this.isStenosisRight = false;
    this.isStenosisLeft = false;
    this.isOsteophyteFormation = false;
    this.isAccompanyingOsteochondrosis = false;
    this.modicClassificationType = ModicClassificationTypesEnum.None;
    this.isAccompanyingFacetJointArthrosis = false;
    this.isAccompanyingFacetJointArthrosisLocalizationRight = false;
    this.isAccompanyingFacetJointArthrosisLocalizationLeft = false;
    this.isHypertrophy = false;
    this.isJointEffusion = false;
    this.isBoneMarrowEdema = false;
    this.isSynovialCyst = false;
    this.isSynovialCystRight = false;
    this.isSynovialCystLeft = false;
    this.maxDiameter = null;
    this.isDiameterMigrationSequester = false;
    this.diameterMigrationSequester = null;
    this.isCraniocaudalesLevel = false;
    this.craniocaudalesLevelType = CraniocaudalesLevelTypesEnum.None;
    this.isSecondary = false;
    this.isNarrowing = false;
    this.isT2SignalReductionOfTheIntervertebralDisc = false;
    this.isBulging = false;
    this.bulgingType = BulgingTypesEnum.None;
    this.sideType = SideTypesEnum.None;
    this.isFacetJointArthrosisLocalizationRight = false;
    this.isFacetJointArthrosisLocalizationLeft = false;
    this.isForaminalStenosis = false;
    this.isIncreasedSizeOfTheDisc = false;
    this.isT2wHyperintensityOfTheDisc = false;
    this.isContrastEnhancementOfTheDisc = false;
    this.isEpiduralInflammationOrAbscess = false;
    this.isExpansionInZDimension = false;
    this.expansionInZDimensionInMm = null;
    this.isEpiduralContrastEnhancement = false;
    this.spineAxialLocation = new AxialLocation();
    this.isParavertebralInflammatoryResponse = false;
    this.isSoftTissueEdema = false;
    this.isAbscess = false;
    this.isEpidural = false;
    this.largestDiameterEpidural = null;
    this.isIntraspinal = false;
    this.largestDiameterIntraspinal = null;
    this.isActiveDiscitis = false;
    this.isRuptureOfPosteriorLongitudinalLigament = false;
    this.isRuptureOfAnteriorLongitudinalLigament = false;
    this.isRuptureOfDiscusIntervertebralis = false;
    this.pathologyType = PathologyTypesEnum.None;
    this.isEntheitis = false;
    this.isDiscitis = false;
    this.isArthritis = false;
    this.entheitisType = EntheitisTypesEnum.None;
    this.isSpondylitisAnterior = false;
    this.isAnteriorT1w = false;
    this.isAnteriorSTIR = false;
    this.isAnteriorContrastEnhancement = false;
    this.isSpondylitisPosterior = false;
    this.isPosteriorT1w = false;
    this.isPosteriorSTIR = false;
    this.isPosteriorContrastEnhancement = false;
    this.isSpondylitisMarginalis = false;
    this.isMarginalisT1w = false;
    this.isMarginalisSTIR = false;
    this.isMarginalisContrastEnhancement = false;
    this.spondylitisNumberType = SpondylitisNumberTypesEnum.None;
    this.isSclerosis = false;
    this.isT1wHyperintensity = false;
    this.isSTIRHypointense = false;
    this.isSyndesmophyterose = false;
    this.isErosionOfAnteriorVertebraRomanusLesion = false;
    this.isVertebralBodySquaring = false;
    this.isMultisegmAnkylosing = false;
    this.isLigamentOssification = false;
    this.isAnteriorLongitudinalLigament = false;
    this.isPosteriorLongitudinalLigament = false;
    this.isLiggFlava = false;
    this.isLiggInterspinosa = false;
    this.isLiggSupraspinosa = false;
    this.isAnderssonLesion = false;
    this.isAnderssonFracture = false;
    this.anderssonFractureType = AnderssonFractureTypesEnum.None;
    this.isSynovialitis = false;
    this.isAnkylosis = false;
    this.isErosions = false;
    this.differentialDiagnosisType1 = DifferentialDiagnosisTypesEnum.None;
    this.differentialDiagnosisType2 = DifferentialDiagnosisTypesEnum.None;
    this.isParasyndesmophyte = false;
    this.isPeriostitis = false;
    this.isAtlantBoneMarrowEdema = false;
    this.isAtlantSynovialitis = false;
    this.isAtlantSynovialProliferation = false;
    this.isAtlantJointEffusion = false;
    this.isAtlantErosions = false;
    this.atlantoOccipitaleDistanceType = AtlantooccipitalDistanceTypesEnum.None;
    this.isContrastEnhancement = false;
    this.isIrregularThickeningOfTheCorticalBone = false;
    this.isDensErosion = false;

    this.anteriorReferencePicture = new ReferencePictureUiModel();
    this.posteriorReferencePicture = new ReferencePictureUiModel();
    this.marginalisReferencePicture = new ReferencePictureUiModel();
    this.discitisReferencePicture = new ReferencePictureUiModel();
    this.periostitisReferencePicture = new ReferencePictureUiModel();
  }
}
