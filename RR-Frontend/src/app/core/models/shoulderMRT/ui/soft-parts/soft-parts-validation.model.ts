import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { SoftPartsFindingUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-finding-ui.model';

import { nameof } from 'ts-simple-nameof';

import { MusculatureFindingType, SoftPartsFindingTypeEnum } from '@enums/shoulderMRT/soft-parts';
import { MusculatureUiModel } from '@models/shoulderMRT/ui/soft-parts/musculature-ui.model';

export const SoftPartsValidation: IValidationModel = {
  finding: [
    {
      findingName: SoftPartsFindingTypeEnum.LymphNodes,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.lymphNodesAxillaryType)
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.Musculature,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.locationType)
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.musculatureFindings),
          requiredValue: (m: SoftPartsFindingUiModel) =>
            m.musculatureFindings.length > 0 && m.musculatureFindings[0].findingType !== 'None',
          finding: [
            {
              findingName: MusculatureFindingType.MuscleLesion,
              elements: [
                {
                  modelName: nameof<MusculatureUiModel>(m => m.classificationMunichConsensusType)
                }
              ]
            },
            {
              findingName: MusculatureFindingType.MuscularHaematoma,
              elements: [
                {
                  modelName: [
                    nameof<MusculatureUiModel>(m => m.isIntramuscular),
                    nameof<MusculatureUiModel>(m => m.isInterfacial),
                    nameof<MusculatureUiModel>(m => m.isIntermuscular)
                  ]
                }
              ]
            },
            {
              findingName: MusculatureFindingType.OtherFindings,
              elements: [
                {
                  modelName: [
                    nameof<MusculatureUiModel>(m => m.isFattyDegeneration),
                    nameof<MusculatureUiModel>(m => m.isMuscularHypotrophy),
                    nameof<MusculatureUiModel>(m => m.isMuscularAtrophy),
                    nameof<MusculatureUiModel>(m => m.isApophysitis),
                    nameof<MusculatureUiModel>(m => m.isFascialTear)
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.SternoclavicularJoint,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.sternoclavicularJointType)
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.Pleura,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.pleuraType)
        }
      ]
    }
  ]
};
