import { ReportModelBase } from '@models/report-model-base';
import { ProstateFindingUiModel } from './prostate-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { VolumeTypeEnum } from '@enums/pelvisMRT/prostate/volume-type.enum';
import { PsaVolumeTypeEnum } from '@enums/pelvisMRT/prostate/psa-volume-type.enum';

export class ProstateUiModel extends ReportModelBase {
  findings: ProstateFindingUiModel[];
  areFindings: AreFindingsEnum;

  aPdiameterInMm: number;
  widthInMm: number;
  heightInMm: number;
  psaVolume: string;
  volumeInCm3: string;
  volumeType: VolumeTypeEnum;
  psaVolumeType: PsaVolumeTypeEnum;

  constructor() {
    super();
    this.findings = [new ProstateFindingUiModel()];
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
