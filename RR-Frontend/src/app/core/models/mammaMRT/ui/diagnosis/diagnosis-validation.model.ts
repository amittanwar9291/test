import { nameof } from 'ts-simple-nameof';

import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { DiagnosisFindingUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-finding-ui.model';

import { DiagnosisFindingTypeEnum } from '@enums/mammaMRT/diagnosis/diagnosis-finding-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const DiagnosisValidationModel: IValidationModel = {
  finding: [
    {
      findingName: DiagnosisFindingTypeEnum.FocalPoint,
      elements: [
        {
          modelName: nameof<DiagnosisFindingUiModel>(m => m.diagnosisType),
          validateCondition: {
            modelName: nameof<DiagnosisFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        { modelName: nameof<DiagnosisFindingUiModel>(m => m.findingLocation), isLocalizer: true },
        {
          modelName: nameof<DiagnosisFindingUiModel>(m => m.additionalDiagnosis1Type),
          validateCondition: {
            modelName: nameof<DiagnosisFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: DiagnosisFindingTypeEnum.FocusFoci,
      elements: [{ modelName: nameof<DiagnosisFindingUiModel>(m => m.findingLocation), isLocalizer: true }]
    },
    {
      findingName: DiagnosisFindingTypeEnum.NonSpatialEnhancement,
      elements: [
        { modelName: nameof<DiagnosisFindingUiModel>(m => m.findingLocation), isLocalizer: true },
        { modelName: nameof<DiagnosisFindingUiModel>(m => m.additionalDiagnosis1Type) }
      ]
    }
  ]
};
