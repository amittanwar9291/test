import { AcquisitionApiBaseModel } from '@models/shared/newTechnology/api/acquisition-api-base.model';
import { ReconstructionFindingApiModel } from '@models/spineCT/api/technology/reconstruction-finding-api.model';

import { InvestigationTechniqueTypeEnum } from '@enums/shared/technology/investigation-technique-type.enum';
import { TubeCurrentDoseModulationTypeEnum } from '@enums/shared/technology/tube-current-dose-modulation-type.enum';
import { PositionTypeEnum } from '@enums/shared/technology/position-type.enum';

export class AcquisitionApiModel extends AcquisitionApiBaseModel<ReconstructionFindingApiModel> {
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
  lateDelayInMin: number;
  isCTMyelography: boolean;
  patientPositioningType: PositionTypeEnum;

  constructor() {
    super();
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
    this.lateDelayInMin = null;
    this.isCTMyelography = false;
    this.patientPositioningType = PositionTypeEnum.None;
  }
}
