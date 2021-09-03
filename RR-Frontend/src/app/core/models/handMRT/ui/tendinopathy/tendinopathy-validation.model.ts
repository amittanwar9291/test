import { nameof } from 'ts-simple-nameof';

import { TendinopathyFindingUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';

export const TendinopathyValidationModel: IValidationModel = {
  finding: [
    {
      findingName: 'FlexorTendons',
      elements: [
        {
          modelName: [
            nameof<TendinopathyFindingUiModel>(m => m.isTendonsFlexorDigitorumSuperficialisMuscle),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonsFlexorDigitorumProfundusMuscle),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonFlexorPollicisLongusMuscle),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonFlexorCarpiRadialisMuscle),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonFlexorCarpiUlnarisMuscle)
          ]
        },
        {
          modelName: [
            nameof<TendinopathyFindingUiModel>(m => m.superficialisD2),
            nameof<TendinopathyFindingUiModel>(m => m.superficialisD3),
            nameof<TendinopathyFindingUiModel>(m => m.superficialisD4),
            nameof<TendinopathyFindingUiModel>(m => m.superficialisD5)
          ],
          validateCondition: {
            modelName: nameof<TendinopathyFindingUiModel>(m => m.isTendonsFlexorDigitorumSuperficialisMuscle)
          }
        },
        {
          modelName: [
            nameof<TendinopathyFindingUiModel>(m => m.profundusD2),
            nameof<TendinopathyFindingUiModel>(m => m.profundusD3),
            nameof<TendinopathyFindingUiModel>(m => m.profundusD4),
            nameof<TendinopathyFindingUiModel>(m => m.profundusD5)
          ],
          validateCondition: {
            modelName: nameof<TendinopathyFindingUiModel>(m => m.isTendonsFlexorDigitorumProfundusMuscle)
          }
        },
        {
          modelName: nameof<TendinopathyFindingUiModel>(m => m.pathologyType)
        }
      ]
    },
    {
      findingName: 'ExtensorTendons',
      elements: [
        {
          modelName: [
            nameof<TendinopathyFindingUiModel>(m => m.isTendonAbductorPollicisLongusMuscle),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonExtensorPollicisBrevisMuscle),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonExtensorCarpiRadialisLongusMuscle),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonExtensorCarpiRadialisBrevisMuscle),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonExtensorPollicisLongusMuscle),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonsExtensoresDigitorumAndIndicisMuscles),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonExtensorDigitiMinimiMuscle),
            nameof<TendinopathyFindingUiModel>(m => m.isTendonExtensorCarpiUlnarisMuscle)
          ]
        },
        {
          modelName: [
            nameof<TendinopathyFindingUiModel>(m => m.extensoresD2),
            nameof<TendinopathyFindingUiModel>(m => m.extensoresD3),
            nameof<TendinopathyFindingUiModel>(m => m.extensoresD4),
            nameof<TendinopathyFindingUiModel>(m => m.extensoresD5)
          ],
          validateCondition: {
            modelName: nameof<TendinopathyFindingUiModel>(m => m.isTendonsExtensoresDigitorumAndIndicisMuscles)
          }
        },
        {
          modelName: nameof<TendinopathyFindingUiModel>(m => m.pathologyType)
        }
      ]
    },
    {
      findingName: 'Ganglion',
      elements: [
        {
          modelName: nameof<TendinopathyFindingUiModel>(m => m.localizationType)
        },
        {
          modelName: nameof<TendinopathyFindingUiModel>(m => m.size)
        }
      ]
    }
  ]
};
