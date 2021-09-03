import { nameof } from 'ts-simple-nameof';

import { AnatomyEnhancementUi } from '@models/mammaMRT/ui/anatomy-enhancement/anatomy-enhancement-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { ArtefactFindingEnum, NonEnhancingFindingsTypeEnum, SiliconeImplantTypeEnum } from '@enums/mammaMRT/anatomy-enhancement/';

export const AnatomyEnhancementValidationModel: IValidationModel = {
  elements: [
    { modelName: nameof<AnatomyEnhancementUi>(m => m.birads) },
    { modelName: nameof<AnatomyEnhancementUi>(m => m.glandularBody) },
    { modelName: nameof<AnatomyEnhancementUi>(m => m.parenchymaType) },
    {
      modelName: [
        nameof<AnatomyEnhancementUi>(m => m.isFindingsLocalizationRight),
        nameof<AnatomyEnhancementUi>(m => m.isFindingsLocalizationLeft)
      ],
      validateCondition: {
        customConditionFunction: (model: AnatomyEnhancementUi) => model.nonEnhancingFindingsType !== NonEnhancingFindingsTypeEnum.None
      }
    },
    {
      modelName: nameof<AnatomyEnhancementUi>(m => m.artefactFinding1Location),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<AnatomyEnhancementUi>(m => m.artefactFinding1),
        customConditionFunction: checkIfAnyArtefactFinding1Selected
      }
    },
    {
      modelName: nameof<AnatomyEnhancementUi>(m => m.artefactFinding2Location),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<AnatomyEnhancementUi>(m => m.artefactFinding2),
        customConditionFunction: checkIfAnyArtefactFinding2Selected
      }
    },
    {
      modelName: nameof<AnatomyEnhancementUi>(m => m.siliconeImplantFinding1.location),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<AnatomyEnhancementUi>(m => m.siliconeImplantFinding1),
        customConditionFunction: checkIfAnySilicone1CheckboxIsChecked
      }
    },
    {
      modelName: nameof<AnatomyEnhancementUi>(m => m.siliconeImplantFinding2.location),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<AnatomyEnhancementUi>(m => m.siliconeImplantFinding2),
        customConditionFunction: checkIfAnySilicone2CheckboxIsChecked
      }
    }
  ]
};

function checkIfAnyArtefactFinding1Selected(model: AnatomyEnhancementUi): boolean {
  return model.artefactFinding1 !== ArtefactFindingEnum.None;
}

function checkIfAnyArtefactFinding2Selected(model: AnatomyEnhancementUi): boolean {
  return model.artefactFinding2 !== ArtefactFindingEnum.None;
}

function checkIfAnySilicone1CheckboxIsChecked(model: AnatomyEnhancementUi): boolean {
  return model.siliconeImplantFinding1.siliconeImplantType !== SiliconeImplantTypeEnum.None;
}

function checkIfAnySilicone2CheckboxIsChecked(model: AnatomyEnhancementUi): boolean {
  return model.siliconeImplantFinding2.siliconeImplantType !== SiliconeImplantTypeEnum.None;
}
