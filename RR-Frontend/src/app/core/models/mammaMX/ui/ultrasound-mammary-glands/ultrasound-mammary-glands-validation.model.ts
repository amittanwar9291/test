import { nameof } from 'ts-simple-nameof/src/nameof';
import { UltrasoundMammaryGlandsUiModel } from './ultrasound-mammary-glands-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { CutisType, MPectoralisType, SubcutaneousFatTissueType } from '@enums/mammaMX/ultrasound-mammary-glands/';

export const UltrasoundMammaryGlandsValidation: IValidationModel = {
  elements: [
    {
      modelName: nameof<UltrasoundMammaryGlandsUiModel>(m => m.cutisLocation),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<UltrasoundMammaryGlandsUiModel>(m => m.cutisType),
        requiredValue: CutisType.Thickened
      }
    },
    {
      modelName: nameof<UltrasoundMammaryGlandsUiModel>(m => m.retractionLocation),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<UltrasoundMammaryGlandsUiModel>(m => m.cutisRetractionPresence),
        requiredValue: SimpleAnswerEnum.Yes
      }
    },
    {
      modelName: nameof<UltrasoundMammaryGlandsUiModel>(m => m.subcutaneousFatTissueLocation),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<UltrasoundMammaryGlandsUiModel>(m => m.subcutaneousFatTissueType),
        requiredValue: SubcutaneousFatTissueType.Obliterated
      }
    },
    {
      modelName: nameof<UltrasoundMammaryGlandsUiModel>(m => m.mPectoralisLocation),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<UltrasoundMammaryGlandsUiModel>(m => m.mPectoralisType),
        requiredValue: MPectoralisType.Obscured
      }
    }
  ]
};
