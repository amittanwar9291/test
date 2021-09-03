import { ReportModelBase } from '@models/report-model-base';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { CutisType, MPectoralisType, ParenchymaDensityType, SubcutaneousFatTissueType } from '@enums/mammaMX/ultrasound-mammary-glands/';
export class UltrasoundMammaryGlandsApiModel extends ReportModelBase {
  cutisType: string;
  cutisLocation: string;
  isRightNipple: boolean;
  isLeftNipple: boolean;
  cutisRetractionPresence: string;
  retractionLocation: string;
  subcutaneousFatTissueType: string;
  subcutaneousFatTissueLocation: string;
  mPectoralisType: string;
  mPectoralisLocation: string;
  parenchymaDensityType: string;

  constructor() {
    super();
    this.cutisType = CutisType.None;
    this.cutisLocation = 'None';
    this.isRightNipple = false;
    this.isLeftNipple = false;
    this.cutisRetractionPresence = SimpleAnswerEnum.None;
    this.retractionLocation = 'None';
    this.subcutaneousFatTissueType = SubcutaneousFatTissueType.None;
    this.subcutaneousFatTissueLocation = 'None';
    this.mPectoralisType = MPectoralisType.None;
    this.mPectoralisLocation = 'None';
    this.parenchymaDensityType = ParenchymaDensityType.None;
  }
}
