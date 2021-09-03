import { AnkylosisTypeEnum } from '@enums/spineCT/sacroiliac-joint/ankylosis-type.enum';
import { ExtensionTypeEnum } from '@enums/spineCT/sacroiliac-joint/extension-type.enum';
import { SubchondralSclerosisTypeEnum } from '@enums/spineCT/sacroiliac-joint/subchondral-sclerosis-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/spineCT/sacroiliac-joint/differential-diagnosis-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

export class SacroiliacJointFindingApiModel extends FindingBase {
  findingType: string;

  // Common
  pelvisLocation: string;
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
  isSuspicionOf: boolean;

  serialNumber: string;
  pictureNumber: string;
  imageFile: FileApiModel;
  imageFileId: string;

  constructor() {
    super();
    this.findingType = 'None';

    this.pelvisLocation = 'None';
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
    this.isSuspicionOf = false;
    this.ankylosisType = AnkylosisTypeEnum.None;
    this.subchondralSclerosisType = SubchondralSclerosisTypeEnum.None;
    this.differentialDiagnosisType01 = DifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosisType02 = DifferentialDiagnosisTypeEnum.None;
  }
}
