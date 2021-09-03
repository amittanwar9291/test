import { VolumeTypeEnum } from '@enums/mammaMRT/anatomy';
import { PsaVolumeTypeEnum } from '@enums/pelvisMRT/prostate/psa-volume-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { ProstateFindingApiModel } from './prostate-finding-api.model';

export class ProstateApiModel extends ReportModelBase {
  findings: ProstateFindingApiModel[];
  areFindings: AreFindingsEnum;

  aPdiameterInMm: number;
  widthInMm: number;
  heightInMm: number;
  psaVolume: number;
  volumeInCm3: number;
  volumeType: VolumeTypeEnum;
  psaVolumeType: PsaVolumeTypeEnum;

  constructor() {
    super();
    this.findings = [new ProstateFindingApiModel()];
    this.areFindings = AreFindingsEnum.None;

    this.aPdiameterInMm = null;
    this.widthInMm = null;
    this.heightInMm = null;
    this.psaVolume = null;
    this.volumeInCm3 = null;
    this.volumeType = VolumeTypeEnum.None;
    this.psaVolumeType = PsaVolumeTypeEnum.None;
  }
}
