import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';

import { SellarRegionUiModel } from '@models/headCT/ui/sellar-region/sellar-region-ui.model';
import { SellarRegionFindingUiModel } from '@models/headCT/ui/sellar-region/sellar-region-finding-ui.model';
import { SellarRegionFindingTypeEnum } from '@enums/headCT/sellar-region/sellar-region-finding-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const SellarRegionValidationModel: IValidationModel = {
  finding: [
    {
      findingName: SellarRegionFindingTypeEnum.Pathology,
      elements: [
        {
          modelName: nameof<SellarRegionFindingUiModel>(m => m.sellarRegionDiagnosisLocalizationType),
          validateCondition: {
            modelName: nameof<SellarRegionFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SellarRegionFindingUiModel>(m => m.sellarRegionDiagnosis1Type),
          validateCondition: {
            modelName: nameof<SellarRegionFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<SellarRegionFindingUiModel>(m => m.extensionSize)
        },
        {
          modelName: nameof<SellarRegionFindingUiModel>(m => m.carotidArterySideType),
          validateCondition: {
            modelName: nameof<SellarRegionFindingUiModel>(m => m.isContactWithCarotidArtery)
          }
        }
      ]
    }
  ]
};
