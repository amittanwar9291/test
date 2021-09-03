import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { BonesUiModel } from '@models/mammaMRT/ui/bones/bones-ui.model';
import { BonesFindingUiModel } from '@models/mammaMRT/ui/bones/bones-finding-ui.model';

import { BonesFindingTypeEnum, BonesTypeEnum } from '@enums/mammaMRT';

import { nameof } from 'ts-simple-nameof';

import { pick, filter } from 'lodash';

export const tvbElements = () => {
  let tvbModelsColl = Object.getOwnPropertyNames(new BonesFindingUiModel());
  tvbModelsColl = tvbModelsColl.filter(item => item.match(/isTVB/));
  return tvbModelsColl;
};

export const BonesValidation: IValidationModel = {
  elements: [
    {
      modelName: nameof<BonesUiModel>(m => m.bonesType)
    },
    {
      modelName: nameof<BonesUiModel>(m => m.findings),
      requiredValue: (model: BonesUiModel) => !(model.findings.length === 0 || model.findings[0].findingType === BonesFindingTypeEnum.None),
      validateCondition: {
        modelName: nameof<BonesUiModel>(m => m.bonesType),
        requiredValue: BonesTypeEnum.BoneLesion
      }
    }
  ],
  finding: [
    {
      findingName: BonesFindingTypeEnum.ProxHumerus,
      elements: [
        { modelName: nameof<BonesFindingUiModel>(m => m.boneLocalization) },
        { modelName: nameof<BonesFindingUiModel>(m => m.lesionType) }
      ]
    },

    {
      findingName: BonesFindingTypeEnum.Clavicle,
      elements: [
        { modelName: nameof<BonesFindingUiModel>(m => m.boneLocalization) },
        { modelName: nameof<BonesFindingUiModel>(m => m.lesionType) }
      ]
    },

    {
      findingName: BonesFindingTypeEnum.Sternum,
      elements: [{ modelName: nameof<BonesFindingUiModel>(m => m.lesionType) }]
    },

    {
      findingName: BonesFindingTypeEnum.VertebralBody,
      elements: [{ modelName: tvbElements() }, { modelName: nameof<BonesFindingUiModel>(m => m.lesionType) }]
    },

    {
      findingName: BonesFindingTypeEnum.Rib,
      elements: [
        { modelName: tvbElements() },
        { modelName: nameof<BonesFindingUiModel>(m => m.lesionType) },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.lesionType),
          validateCondition: {
            customConditionFunction: isRibLocalizationGroupRequired
          }
        }
      ]
    }
  ]
};

function isRibLocalizationGroupRequired(model: BonesFindingUiModel): boolean {
  const findingTVBElements = pick(model, tvbElements());
  return filter(findingTVBElements, prop => prop).length === 1;
}
