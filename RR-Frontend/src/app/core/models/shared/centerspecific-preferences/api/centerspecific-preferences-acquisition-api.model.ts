import { AcquisitionApiBaseModel } from '@models/shared/newTechnology/api/acquisition-api-base.model';

import { InvestigationTechniqueTypeEnum } from '@enums/shared/technology/investigation-technique-type.enum';
import { TubeCurrentDoseModulationTypeEnum } from '@enums/shared/technology/tube-current-dose-modulation-type.enum';
import { PositionTypeEnum } from '@enums/shared/technology/position-type.enum';
import { BreathingProtocolTypeEnum } from '@enums/shared/technology/breathing-protocol-type.enum';
import { CenterspecificPreferencesReconstructionApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-reconstruction-api.model';

export class CenterspecificPreferencesAcquisitionApiModel extends AcquisitionApiBaseModel<CenterspecificPreferencesReconstructionApiModel> {
  // Common properties that are present in more than one CT module
  techniqueType: InvestigationTechniqueTypeEnum;
  numberOfLines: number;
  sliceThicknessInMm: number;
  tubeVoltage1KV: number;
  tubeVoltage2KV: number;
  tubeCurrent1MAs: number;
  tubeCurrent2MAs: number;
  tubeCurrentModulationType: TubeCurrentDoseModulationTypeEnum;
  referenceValueInMAs: number;
  isNative: boolean;
  isArterial: boolean;
  isVenous: boolean;
  isLate: boolean;
  isArterialEarly: boolean;
  isArterialLate: boolean;
  lateDelayInMin: number;
  patientPositioningType: PositionTypeEnum;
  breathingProtocolType: BreathingProtocolTypeEnum;
  isECGGating: boolean;

  // ThoraxCT specific properties
  isPulmonaryArterialPhase: boolean;

  // AngiographyCT specific properties

  // SpineCT and HeadCT specific properties
  isCTMyelography: boolean;

  // HeadCT specific properties
  isPerfusionCT: boolean;

  constructor() {
    super();
    // Common properties for all CT modules
    this.techniqueType = InvestigationTechniqueTypeEnum.None;
    this.numberOfLines = null;
    this.sliceThicknessInMm = null;
    this.tubeVoltage1KV = null;
    this.tubeVoltage2KV = null;
    this.tubeCurrent1MAs = null;
    this.tubeCurrent2MAs = null;
    this.tubeCurrentModulationType = TubeCurrentDoseModulationTypeEnum.None;
    this.referenceValueInMAs = null;
    this.isNative = false;
    this.isArterial = false;
    this.isVenous = false;
    this.isLate = false;
    this.isArterialEarly = false;
    this.isArterialLate = false;
    this.lateDelayInMin = null;
    this.patientPositioningType = PositionTypeEnum.None;
    this.breathingProtocolType = BreathingProtocolTypeEnum.None;
    this.isECGGating = false;

    // ThoraxCT specific properties
    this.isPulmonaryArterialPhase = false;

    // AngiographyCT specific properties

    // SpineCT and HeadCT specific properties
    this.isCTMyelography = false;

    // HeadCT specific properties
    this.isPerfusionCT = false;
  }
}
