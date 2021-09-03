import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { BreastCross } from '@models/shared/mamma/breast/breast-cross.model';
import { ReportModelBase } from '@models/report-model-base';

import { CutisThicknessTypeEnum, PectoralisMuscleTypeEnum, SubcutaneousTissueSpaceTypeEnum, VolumeTypeEnum } from '@enums/mammaMRT/anatomy';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

export class AnatomyUiModel extends ReportModelBase {
  volume: VolumeTypeEnum;
  volumeLocation: BreastSimple;

  cutisThickness: CutisThicknessTypeEnum;
  cutisThicknessLocation: BreastCross;

  cutisRetraction: SimpleAnswerEnum;
  cutisRetractionLocation: BreastCross;

  subcutaneousTissueType: SubcutaneousTissueSpaceTypeEnum;
  subcutaneousFatSpaceLocation: BreastCross;

  pectoralisMuscle: PectoralisMuscleTypeEnum;
  pectoralisMuscleLocation: BreastSimple;

  constructor() {
    super();

    this.volume = VolumeTypeEnum.None;
    this.volumeLocation = new BreastSimple();

    this.cutisThickness = CutisThicknessTypeEnum.None;
    this.cutisThicknessLocation = new BreastCross();

    this.cutisRetraction = SimpleAnswerEnum.None;
    this.cutisRetractionLocation = new BreastCross();

    this.subcutaneousTissueType = SubcutaneousTissueSpaceTypeEnum.None;
    this.subcutaneousFatSpaceLocation = new BreastCross();

    this.pectoralisMuscle = PectoralisMuscleTypeEnum.None;
    this.pectoralisMuscleLocation = new BreastSimple();
  }
}
