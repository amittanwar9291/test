import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { BasalNucleiFindingTypeEnum } from '@enums/headMRT/basal-nuclei';
import { BasalNucleiFindingApiModel } from '@models/headMRT/api/basal_nuclei/basal-nuclei-finding-api.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { nameof } from 'ts-simple-nameof';

export const BasalNucleiValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BasalNucleiFindingTypeEnum.Pathology,
      elements: [
        {
          modelName: nameof<BasalNucleiFindingApiModel>(m => m.differentialDiagnosisType1),
          validateCondition: {
            modelName: nameof<BasalNucleiFindingApiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<BasalNucleiFindingApiModel>(m => m.differentialDiagnosisLocalizationType),
          validateCondition: {
            modelName: nameof<BasalNucleiFindingApiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BasalNucleiFindingApiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<BasalNucleiFindingApiModel>(m => m.isMidlineShift)
          }
        }
      ]
    }
  ]
};
