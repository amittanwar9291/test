import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { nameof } from 'ts-simple-nameof';
import { BasalNucleiFindingApiModel } from '@models/headCT/api/basal-nuclei/basal-nuclei-finding-api.model';
import { BasalNucleiFindingTypeEnum } from '@enums/headCT/basal-nuclei/basal-nuclei-finding-type.enum';

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
          modelName: nameof<BasalNucleiFindingApiModel>(m => m.midlineShiftSideType),
          validateCondition: {
            modelName: nameof<BasalNucleiFindingApiModel>(m => m.isMidlineShift)
          }
        }
      ]
    }
  ]
};
