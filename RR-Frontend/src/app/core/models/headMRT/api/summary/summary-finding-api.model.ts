import { FindingBase } from '@models/shared/finding/finding.base';
import { SummaryDiagnosisTypeEnum, SummaryFindingTypeEnum } from '@enums/headMRT/summary/';

import {
  AtraumaticEtiologyTypeEnum,
  CharacterizationTypeEnum,
  EtiologyTypeEnum,
  HemorrhageLocalizationTypeEnum
} from '@enums/headMRT/summary/hemorrhage';

import { OtherDiseaseTypeEnum, ProgressControlTypeEnum } from '@enums/headMRT/summary/multiple-sclerosis';

import {
  AtrophyNeurodegenerationTypeEnum,
  FazekasTypeEnum,
  NeurodegenerationLocalizationTypeEnum,
  NeurodegenerationTypeEnum,
  ScoreTypeEnum
} from '@enums/headMRT/summary/neurodegeneration';

import { PossibleEpileptogenicFindingsTypeEnum } from '@enums/headMRT/summary/seizure';

import { HerniationTypeEnum, WedgingTypeEnum } from '@enums/headMRT/summary/signs-of-intracranial-pressure';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';

export class SummaryFindingApiModel extends FindingBase {
  findingType: SummaryFindingTypeEnum;

  // Common

  isRight: boolean;
  isLeft: boolean;
  summaryDiagnosisType: SummaryDiagnosisTypeEnum;
  sideType: SideTypeEnum;

  // MultipleSclerosis

  isSpatialDissemination: boolean;
  isTemporalDissemination: boolean;
  progressControlType: ProgressControlTypeEnum;
  progressControlMonth: number;
  progressControlYear: number;
  isPeriventricular: boolean;
  periventricular: number;
  isCortical: boolean;
  cortical: number;
  isJuxtacortical: boolean;
  juxtacortical: number;
  isInfratentorial: boolean;
  infratentorial: number;
  isSpinal: boolean;
  spinal: number;
  isOpticNeuritis: boolean;
  isActiveLesions: boolean;
  isNewLesions: boolean;
  isActive: boolean;
  newLesions: number;
  isBlackHoles: boolean;
  blackHoles: number;
  isDawsonFinger: boolean;
  isPerivenousSpread: boolean;
  isCorpusCallosumUndersurface: boolean;
  isTumefactiveMS: boolean;
  isIncompleteRingEnhancement: boolean;
  otherDiseaseType: OtherDiseaseTypeEnum;
  isSuspicionOf: boolean;

  // SignsOfIntracranialPressure

  isLocallyFlattenedSulci: boolean;
  herniationType: HerniationTypeEnum;
  isMidlineShift: boolean;
  midlineShiftInMm: number;
  isHydrocephalus: boolean;
  isUnilateral: boolean;
  isACAInfarction: boolean;
  isMCAInfarction: boolean;
  isPCAInfarction: boolean;
  isObstructiveHydrocephalus: boolean;
  isCompressionOfTheAqueduct: boolean;
  isTonsillarNecrosis: boolean;
  isDuretHemorrhage: boolean;
  wedgingType: WedgingTypeEnum;
  isIntracranialHypotension: boolean;

  // Hemorrhage

  hemorrhageLocalizationType: HemorrhageLocalizationTypeEnum;
  etiologyType: EtiologyTypeEnum;
  isFracture: boolean;
  atraumaticEtiologyType: AtraumaticEtiologyTypeEnum;
  characterizationType: CharacterizationTypeEnum;

  // Neurodegeneration

  neurodegenerationType: NeurodegenerationTypeEnum;
  fazekasType: FazekasTypeEnum;
  atrophyNeurodegenerationType: AtrophyNeurodegenerationTypeEnum;
  isFrontalLobeAtrophy: boolean;
  isParietalLobeAtrophy: boolean;
  isTemporalLobeAtrophy: boolean;
  isOccipitalLobeAtrophy: boolean;
  isHippocampalAtrophy: boolean;
  isSupratentorialAccentuation: boolean;
  isInfratentorialAccentuation: boolean;
  isGlobalAtrophy: boolean;
  neurodegenerationLocalizationType: NeurodegenerationLocalizationTypeEnum;
  isSideAsymmetryInFavorOf: boolean;
  isEnlargedPerivascularSpaces: boolean;
  isInfarctLacunae: boolean;
  isMicroBleeding: boolean;
  isStrategicInfarcts: boolean;
  isHummingbirdSign: boolean;
  isHotCrossBunSign: boolean;
  isMickeyMouseSign: boolean;
  isMorningGlorySign: boolean;
  isFieldHockeyStickSign: boolean;
  isPulvinarSign: boolean;
  isReducedMidbrainToPonsRatio: boolean;
  isAbsentSwallowTailSign: boolean;
  isKoedamScore: boolean;
  koedamScore: ScoreTypeEnum;
  isMesialTemporalLobeAtrophy: boolean;
  mesialTemporalLobeAtrophyScore: ScoreTypeEnum;

  // Seizure

  possibleEpileptogenicFindingsType: PossibleEpileptogenicFindingsTypeEnum;
  constructor() {
    super();
    this.findingType = SummaryFindingTypeEnum.None;

    // Common

    this.isRight = false;
    this.isLeft = false;
    this.summaryDiagnosisType = SummaryDiagnosisTypeEnum.None;
    this.sideType = SideTypeEnum.None;

    // MultipleSclerosis

    this.isSpatialDissemination = false;
    this.isTemporalDissemination = false;
    this.progressControlType = ProgressControlTypeEnum.None;
    this.progressControlMonth = null;
    this.progressControlYear = null;
    this.isPeriventricular = false;
    this.periventricular = null;
    this.isCortical = false;
    this.cortical = null;
    this.isJuxtacortical = false;
    this.juxtacortical = null;
    this.isInfratentorial = false;
    this.infratentorial = null;
    this.isSpinal = false;
    this.spinal = null;
    this.isOpticNeuritis = false;
    this.isActiveLesions = false;
    this.isNewLesions = false;
    this.isActive = false;
    this.newLesions = null;
    this.isBlackHoles = false;
    this.blackHoles = null;
    this.isDawsonFinger = false;
    this.isPerivenousSpread = false;
    this.isCorpusCallosumUndersurface = false;
    this.isTumefactiveMS = false;
    this.isIncompleteRingEnhancement = false;
    this.otherDiseaseType = OtherDiseaseTypeEnum.None;
    this.isSuspicionOf = false;

    // SignsOfIntracranialPressure

    this.isLocallyFlattenedSulci = false;
    this.herniationType = HerniationTypeEnum.None;
    this.isMidlineShift = false;
    this.midlineShiftInMm = null;
    this.isHydrocephalus = false;
    this.isUnilateral = false;
    this.isACAInfarction = false;
    this.isMCAInfarction = false;
    this.isPCAInfarction = false;
    this.isObstructiveHydrocephalus = false;
    this.isCompressionOfTheAqueduct = false;
    this.isTonsillarNecrosis = false;
    this.isDuretHemorrhage = false;
    this.wedgingType = WedgingTypeEnum.None;
    this.isIntracranialHypotension = false;

    // Hemorrhage

    this.hemorrhageLocalizationType = HemorrhageLocalizationTypeEnum.None;
    this.etiologyType = EtiologyTypeEnum.None;
    this.isFracture = false;
    this.atraumaticEtiologyType = AtraumaticEtiologyTypeEnum.None;
    this.characterizationType = CharacterizationTypeEnum.None;

    // Neurodegeneration

    this.neurodegenerationType = NeurodegenerationTypeEnum.None;
    this.fazekasType = FazekasTypeEnum.None;
    this.atrophyNeurodegenerationType = AtrophyNeurodegenerationTypeEnum.None;
    this.isFrontalLobeAtrophy = false;
    this.isParietalLobeAtrophy = false;
    this.isTemporalLobeAtrophy = false;
    this.isOccipitalLobeAtrophy = false;
    this.isHippocampalAtrophy = false;
    this.isSupratentorialAccentuation = false;
    this.isInfratentorialAccentuation = false;
    this.isGlobalAtrophy = false;
    this.neurodegenerationLocalizationType = NeurodegenerationLocalizationTypeEnum.None;
    this.isSideAsymmetryInFavorOf = false;
    this.isEnlargedPerivascularSpaces = false;
    this.isInfarctLacunae = false;
    this.isMicroBleeding = false;
    this.isStrategicInfarcts = false;
    this.isHummingbirdSign = false;
    this.isHotCrossBunSign = false;
    this.isMickeyMouseSign = false;
    this.isMorningGlorySign = false;
    this.isFieldHockeyStickSign = false;
    this.isPulvinarSign = false;
    this.isReducedMidbrainToPonsRatio = false;
    this.isAbsentSwallowTailSign = false;
    this.isKoedamScore = false;
    this.koedamScore = ScoreTypeEnum.None;
    this.isMesialTemporalLobeAtrophy = false;
    this.mesialTemporalLobeAtrophyScore = ScoreTypeEnum.None;

    // Seizure

    this.possibleEpileptogenicFindingsType = PossibleEpileptogenicFindingsTypeEnum.None;
  }
}
