import { ReportModelBase } from '@models/report-model-base';
import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { BreastCross } from '@models/shared/mamma/breast/breast-cross.model';
import { BreastPizzaSlices } from '@models/shared/mamma/breast/breast-pizza-slices.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { CutisType, MPectoralisType, ParenchymaDensityType, SubcutaneousFatTissueType } from '@enums/mammaMX/ultrasound-mammary-glands/';

export class UltrasoundMammaryGlandsUiModel extends ReportModelBase {
  cutisType: string;
  cutisLocation: BreastCross;
  isRightNipple: boolean;
  isLeftNipple: boolean;
  cutisRetractionPresence: string;
  retractionLocation: BreastPizzaSlices;
  subcutaneousFatTissueType: string;
  subcutaneousFatTissueLocation: BreastCross;
  mPectoralisType: string;
  mPectoralisLocation: BreastSimple;
  parenchymaDensityType: string;

  constructor() {
    super();
    this.cutisType = CutisType.None;
    this.cutisLocation = new BreastCross();
    this.isRightNipple = false;
    this.isLeftNipple = false;
    this.cutisRetractionPresence = SimpleAnswerEnum.None;
    this.retractionLocation = new BreastPizzaSlices();
    this.subcutaneousFatTissueType = SubcutaneousFatTissueType.None;
    this.subcutaneousFatTissueLocation = new BreastCross();
    this.mPectoralisType = MPectoralisType.None;
    this.mPectoralisLocation = new BreastSimple();
    this.parenchymaDensityType = ParenchymaDensityType.None;
  }
}
