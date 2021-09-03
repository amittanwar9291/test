import { AnkylosisTypeEnum } from '@enums/spineCT/sacroiliac-joint/ankylosis-type.enum';
import { ExtensionTypeEnum } from '@enums/spineCT/sacroiliac-joint/extension-type.enum';
import { SacroiliacJointFindingTypeEnum } from '@enums/spineCT/sacroiliac-joint/sacroiliac-joint-finding-type.enum';
import { SubchondralSclerosisTypeEnum } from '@enums/spineCT/sacroiliac-joint/subchondral-sclerosis-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/spineCT/sacroiliac-joint/differential-diagnosis-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { PelvisLocation } from '@models/shared/spine/localizers/pelvis-location.model';

export class SacroiliacJointFindingUiModel extends FindingBase {
  findingType: SacroiliacJointFindingTypeEnum;

  // Common
  pelvisLocation: PelvisLocation;
  extensionType: ExtensionTypeEnum;
  isBoneBridges: boolean;
  isAnkylosis: boolean;
  isOsteophytesAnterior: boolean;
  isErosions: boolean;
  isJointSpaceNarrowing: boolean;
  isVacuumPhenomenon: boolean;
  isSubchondralCysts: boolean;
  isSubchondralSclerosis: boolean;
  isSecondary: boolean;
  ankylosisType: AnkylosisTypeEnum;
  subchondralSclerosisType: SubchondralSclerosisTypeEnum;
  differentialDiagnosisType01: DifferentialDiagnosisTypeEnum;
  differentialDiagnosisType02: DifferentialDiagnosisTypeEnum;
  referencePicture: ReferencePictureUiModel;
  isSuspicionOf: boolean;

  constructor() {
    super();
    this.findingType = SacroiliacJointFindingTypeEnum.None;

    this.pelvisLocation = new PelvisLocation();
    this.extensionType = ExtensionTypeEnum.None;
    this.isBoneBridges = false;
    this.isAnkylosis = false;
    this.isOsteophytesAnterior = false;
    this.isErosions = false;
    this.isJointSpaceNarrowing = false;
    this.isVacuumPhenomenon = false;
    this.isSubchondralCysts = false;
    this.isSubchondralSclerosis = false;
    this.isSecondary = false;
    this.ankylosisType = AnkylosisTypeEnum.None;
    this.subchondralSclerosisType = SubchondralSclerosisTypeEnum.None;
    this.differentialDiagnosisType01 = DifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosisType02 = DifferentialDiagnosisTypeEnum.None;
    this.referencePicture = new ReferencePictureUiModel();
    this.isSuspicionOf = false;
  }
}
