import { FindingBase } from '@models/shared/finding/finding.base';
import {
  AfterTransplantationTypeEnum,
  AorticValveTypeEnum,
  MitralValveTypeEnum,
  PriorInterventionsFindingTypeEnum
} from '@enums/angiographyCT/anamnesis/';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { LowerLimbTypeEnum } from '@enums/angiographyCT/anamnesis/bypass';

export class PriorInterventionsFindingUiModel extends FindingBase {
  priorInterventionsFindingType: PriorInterventionsFindingTypeEnum;

  // Prior

  isMechanical: boolean;
  isAspiration: boolean;

  // Prior

  isCoronary: boolean;
  isCABG: boolean;
  isLowerLimb: boolean;
  lowerLimbOriginType: LowerLimbTypeEnum;
  originCruralSideType: LocationTypeEnum;
  lowerLimbTargetVesselType: LowerLimbTypeEnum;
  targetVesselCruralSideType: LocationTypeEnum;

  // Prior

  isCoiling: boolean;
  isPlug: boolean;
  isLiquidEmbolicAgents: boolean;
  isSclerosantAgent: boolean;
  isEmbolizationParticle: boolean;

  // Prior

  isPartialLungResectionSideRight: boolean;
  isPartialLungResectionSideLeft: boolean;

  // Prior

  isAbdominalEVAR: boolean;
  isThoracicTEVAR: boolean;

  // Prior

  isAorticValve: boolean;
  aorticValveType: AorticValveTypeEnum;
  isMitralValve: boolean;
  mitralValveType: MitralValveTypeEnum;

  // Prior

  isPatentForamenOvale: boolean;

  // Prior

  afterTransplantationType: AfterTransplantationTypeEnum;
  isKidneySideRight: boolean;
  isKidneySideLeft: boolean;
  constructor() {
    super();
    this.priorInterventionsFindingType = PriorInterventionsFindingTypeEnum.None;

    // Prior

    this.isMechanical = false;
    this.isAspiration = false;

    // Prior

    this.isCoronary = false;
    this.isCABG = false;
    this.isLowerLimb = false;
    this.lowerLimbOriginType = LowerLimbTypeEnum.None;
    this.originCruralSideType = LocationTypeEnum.None;
    this.lowerLimbTargetVesselType = LowerLimbTypeEnum.None;
    this.targetVesselCruralSideType = LocationTypeEnum.None;

    // Prior

    this.isCoiling = false;
    this.isPlug = false;
    this.isLiquidEmbolicAgents = false;
    this.isSclerosantAgent = false;
    this.isEmbolizationParticle = false;

    // Prior

    this.isPartialLungResectionSideRight = false;
    this.isPartialLungResectionSideLeft = false;

    // Prior

    this.isAbdominalEVAR = false;
    this.isThoracicTEVAR = false;

    // Prior

    this.isAorticValve = false;
    this.aorticValveType = AorticValveTypeEnum.None;
    this.isMitralValve = false;
    this.mitralValveType = MitralValveTypeEnum.None;

    // Prior

    this.isPatentForamenOvale = false;

    // Prior

    this.afterTransplantationType = AfterTransplantationTypeEnum.None;
    this.isKidneySideRight = false;
    this.isKidneySideLeft = false;
  }
}
