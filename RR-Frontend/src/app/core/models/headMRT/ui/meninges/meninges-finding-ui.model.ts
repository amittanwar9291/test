import { MeningesDiffuseDiagnosisTypeEnum } from '@enums/headMRT/meninges';

import { CharacterizationHematomaTypeEnum, RegionTypeEnum, SideTypeEnum } from '@enums/headMRT/meninges';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MeningesFindingBaseUiModel } from './meninges-finding-base-ui.model';

export class MeningesFindingUiModel extends MeningesFindingBaseUiModel {
  // Common

  descriptionType: DescriptionTypeEnum;
  size: number;
  secondPlane: number;
  thirdPlane: number;

  // DiffuseChanges

  isThickening: boolean;
  meningesWidth: number;
  t1WSignalDiffuse: number;
  t2WSignalDiffuse: number;
  isAbscess: boolean;
  maxExtension: number;
  isEmpyema: boolean;
  isHydrocephalus: boolean;
  isPachymeninges: boolean;
  isLeptomeninges: boolean;
  diffuseDifferentialDiagnosis1: MeningesDiffuseDiagnosisTypeEnum;
  diffuseDifferentialDiagnosis2: MeningesDiffuseDiagnosisTypeEnum;

  // SubduralHematoma

  isSickleShaped: boolean;
  isCrossingSutures: boolean;
  isMajorAttachmentNotExceeded: boolean;
  maxWidth: number;
  isAlongFalx: boolean;
  isAlongTentorium: boolean;
  isSeptations: boolean;
  isContrastEnhancementMembrane: boolean;
  isFluid: boolean;
  isFluidLevel: boolean;
  isBridgeVeinDisplacementInward: boolean;
  isDuralThickening: boolean;
  isContrastEnhancement: boolean;
  isMidlineShift: boolean;
  sideType: SideTypeEnum;
  midlineDeviation: number;
  isHerniation: boolean;
  regionType: RegionTypeEnum;
  characterizationHematomaType: CharacterizationHematomaTypeEnum;
  isSubduralHygroma: boolean;

  // EpiduralHematoma

  isDuraleAttachmentExceeded: boolean;
  isSuturesNotExceeded: boolean;
  isDisplacedDuraBetweenEdhAndBrain: boolean;
  isBiconvex: boolean;
  isSkullFracture: boolean;
  isContrecoupSdh: boolean;
  isAdjacentContusion: boolean;
  isConcomitantCerebrospinalFluidCongestion: boolean;
  isAssociatedInfarction: boolean;

  constructor() {
    super();

    // Common

    this.descriptionType = DescriptionTypeEnum.None;
    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;

    // DiffuseChanges

    this.isThickening = false;
    this.meningesWidth = null;
    this.t1WSignalDiffuse = 0;
    this.t2WSignalDiffuse = 0;
    this.isAbscess = false;
    this.maxExtension = null;
    this.isEmpyema = false;
    this.isHydrocephalus = false;
    this.isPachymeninges = false;
    this.isLeptomeninges = false;
    this.diffuseDifferentialDiagnosis1 = MeningesDiffuseDiagnosisTypeEnum.None;
    this.diffuseDifferentialDiagnosis2 = MeningesDiffuseDiagnosisTypeEnum.None;

    // SubduralHematoma

    this.isSickleShaped = false;
    this.isCrossingSutures = false;
    this.isMajorAttachmentNotExceeded = false;
    this.maxWidth = null;
    this.isAlongFalx = false;
    this.isAlongTentorium = false;
    this.isSeptations = false;
    this.isContrastEnhancementMembrane = false;
    this.isFluid = false;
    this.isFluidLevel = false;
    this.isBridgeVeinDisplacementInward = false;
    this.isDuralThickening = false;
    this.isContrastEnhancement = false;
    this.isMidlineShift = false;
    this.sideType = SideTypeEnum.None;
    this.midlineDeviation = null;
    this.isHerniation = false;
    this.regionType = RegionTypeEnum.None;
    this.characterizationHematomaType = CharacterizationHematomaTypeEnum.None;
    this.isSubduralHygroma = false;

    // EpiduralHematoma

    this.isDuraleAttachmentExceeded = false;
    this.isSuturesNotExceeded = false;
    this.isDisplacedDuraBetweenEdhAndBrain = false;
    this.isBiconvex = false;
    this.isSkullFracture = false;
    this.isContrecoupSdh = false;
    this.isAdjacentContusion = false;
    this.isConcomitantCerebrospinalFluidCongestion = false;
    this.isAssociatedInfarction = false;
  }
}
