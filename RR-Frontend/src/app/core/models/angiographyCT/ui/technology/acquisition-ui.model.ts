import { AcquisitionUiBaseModel } from '@models/shared/newTechnology/ui/acquisition-ui-base.model';
import { ReconstructionFindingUiModel } from '@models/angiographyCT/ui/technology/reconstruction-finding-ui.model';

import { InvestigationTechniqueTypeEnum } from '@enums/shared/technology/investigation-technique-type.enum';
import { PositionTypeEnum } from '@enums/shared/technology/position-type.enum';
import { BreathingProtocolTypeEnum } from '@enums/shared/technology/breathing-protocol-type.enum';
import { TubeCurrentDoseModulationTypeEnum } from '@enums/shared/technology/tube-current-dose-modulation-type.enum';

export class AcquisitionUiModel extends AcquisitionUiBaseModel<ReconstructionFindingUiModel> {
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

  constructor() {
    super(ReconstructionFindingUiModel);
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
  }
}
