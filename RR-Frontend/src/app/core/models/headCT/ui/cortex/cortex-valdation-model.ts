import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { CortexFindingTypeEnum } from '@enums/shared/head/cortex';
import { nameof } from 'ts-simple-nameof';
import { CortexFindingApiModel } from '@models/headCT/api/cortex/cortex-finding-api.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const CortexValidationModel: IValidationModel = {
  finding: [
    {
      findingName: CortexFindingTypeEnum.Focal,
      elements: [
        {
          modelName: nameof<CortexFindingApiModel>(m => m.cortexDifferentialDiagnosisType1),
          validateCondition: {
            modelName: nameof<CortexFindingApiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: [nameof<CortexFindingApiModel>(m => m.midlineShiftSideType)],
          validateCondition: {
            modelName: nameof<CortexFindingApiModel>(m => m.isMidlineShift)
          }
        },
        {
          modelName: [nameof<CortexFindingApiModel>(m => m.regionType)],
          validateCondition: {
            modelName: nameof<CortexFindingApiModel>(m => m.isHerniation)
          }
        },
        {
          modelName: nameof<CortexFindingApiModel>(m => m.size)
        },
        {
          modelName: nameof<CortexFindingApiModel>(m => m.cortexDifferentialDiagnosisType),
          validateCondition: {
            modelName: nameof<CortexFindingApiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        }
      ]
    },
    {
      findingName: CortexFindingTypeEnum.Diffuse,
      elements: [
        {
          modelName: nameof<CortexFindingApiModel>(m => m.cortexDifferentialDiagnosisType1),
          validateCondition: {
            modelName: nameof<CortexFindingApiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<CortexFindingApiModel>(m => m.cortexDifferentialDiagnosisType),
          validateCondition: {
            modelName: nameof<CortexFindingApiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: [nameof<CortexFindingApiModel>(m => m.midlineShiftSideType)],
          validateCondition: {
            modelName: nameof<CortexFindingApiModel>(m => m.isMidlineShift)
          }
        },
        {
          modelName: [nameof<CortexFindingApiModel>(m => m.regionType)],
          validateCondition: {
            modelName: nameof<CortexFindingApiModel>(m => m.isHerniation)
          }
        }
      ]
    }
  ]
};
