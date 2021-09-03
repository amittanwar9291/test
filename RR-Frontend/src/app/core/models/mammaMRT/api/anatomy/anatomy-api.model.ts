import { ReportModelBase } from '@models/report-model-base';

import { CutisThicknessTypeEnum, PectoralisMuscleTypeEnum, SubcutaneousTissueSpaceTypeEnum, VolumeTypeEnum } from '@enums/mammaMRT/anatomy';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

export class AnatomyApiModel extends ReportModelBase {
  volume: VolumeTypeEnum;
  volumeLocation: string;

  cutisThickness: CutisThicknessTypeEnum;
  cutisThicknessLocation: string;

  cutisRetraction: SimpleAnswerEnum;
  cutisRetractionLocation: string;

  subcutaneousTissueType: SubcutaneousTissueSpaceTypeEnum;
  subcutaneousFatSpaceLocation: string;

  pectoralisMuscle: PectoralisMuscleTypeEnum;
  pectoralisMuscleLocation: string;

  constructor() {
    super();

    this.volume = VolumeTypeEnum.None;
    this.volumeLocation = 'None';

    this.cutisThickness = CutisThicknessTypeEnum.None;
    this.cutisThicknessLocation = 'None';

    this.cutisRetraction = SimpleAnswerEnum.None;
    this.cutisRetractionLocation = 'None';

    this.subcutaneousTissueType = SubcutaneousTissueSpaceTypeEnum.None;
    this.subcutaneousFatSpaceLocation = 'None';

    this.pectoralisMuscle = PectoralisMuscleTypeEnum.None;
    this.pectoralisMuscleLocation = 'None';
  }
}
