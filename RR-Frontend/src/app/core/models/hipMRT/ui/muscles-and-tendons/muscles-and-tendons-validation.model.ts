import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { MusclesAndTendonsFindingUiModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-finding-ui.model';

import { nameof } from 'ts-simple-nameof';

import { FindingTypeEnum, PathologyTypeEnum, TendonsPathologyTypeEnum } from '@enums/hipMRT/muscles-and-tendons';

export const MusclesAndTendonsValidationModel: IValidationModel = {
  finding: [
    {
      findingName: FindingTypeEnum.Musculature,
      elements: [
        {
          modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.musculatureLocalizationType)
        },
        {
          modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.classificationMCStatement),
          validateCondition: {
            modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.MuscleLesion
          }
        },
        {
          modelName: [
            nameof<MusclesAndTendonsFindingUiModel>(m => m.isIntramuscular),
            nameof<MusclesAndTendonsFindingUiModel>(m => m.isIntermuscular)
          ],
          validateCondition: {
            modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.Haematoma
          }
        },
        {
          modelName: [
            nameof<MusclesAndTendonsFindingUiModel>(m => m.isEdemaLikeSignalIntensity),
            nameof<MusclesAndTendonsFindingUiModel>(m => m.isFattyDegeneration),
            nameof<MusclesAndTendonsFindingUiModel>(m => m.isMuscularAtrophy),
            nameof<MusclesAndTendonsFindingUiModel>(m => m.isApophysitis),
            nameof<MusclesAndTendonsFindingUiModel>(m => m.isFascialTear),
            nameof<MusclesAndTendonsFindingUiModel>(m => m.isReducedIschiofemoralDistance)
          ],
          validateCondition: {
            modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.FurtherFindings
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.Tendons,
      elements: [
        {
          modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.tendonsLocalizationType)
        },
        {
          modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.tendonsPathologyType)
        },
        {
          modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.ruptureLocalizationType),
          validateCondition: {
            modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.tendonsPathologyType),
            requiredValue: TendonsPathologyTypeEnum.Rupture
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.Bursitis,
      elements: [
        {
          modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<MusclesAndTendonsFindingUiModel>(m => m.bursitisLocalizationType)
        }
      ]
    }
  ]
};
