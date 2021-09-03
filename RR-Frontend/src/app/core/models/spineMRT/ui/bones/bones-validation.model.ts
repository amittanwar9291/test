import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesFindingTypeEnum, C1c2FractureTypeEnum, C3FractureTypeEnum, GehweilerTypeEnum } from '@enums/spineMRT/bones';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { compact, mapKeys, pullAll } from 'lodash';

export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BonesFindingTypeEnum.Fracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureStabilityType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.spineLocation.c0)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.gehweilerType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.spineLocation.c1)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.gehweilerType),
            requiredValue: GehweilerTypeEnum.Type5
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.c1C2FractureType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.spineLocation.c2)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.c1ToC2FractureType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.c1C2FractureType),
            requiredValue: C1c2FractureTypeEnum.C1C2
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.c3FractureType),
          validateCondition: {
            customConditionFunction: otherPartsValidationCondition
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.valuationOfFractureType),
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel) =>
              model.c3FractureType === C3FractureTypeEnum.A0Classification ||
              model.c3FractureType === C3FractureTypeEnum.GenantClassification
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.osSacrumFractureType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.spineLocation.osSacrum)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.osCoccygisFractureType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.spineLocation.osCoccygis)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.c2FractureType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.c1C2FractureType),
            requiredValue: C1c2FractureTypeEnum.C2
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.BoneMarrowEdema,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.traumaLocation),
          isLocalizer: true,
          validateCondition: {
            customConditionFunction: isSingleSelectionOnLocalizer
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.PathologyOfTheVertebralArch,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.localizationSideType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.localizationInTheVertebralArchType)
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.PosttherapeuticChange,
      elements: [
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isHistoryOfVertebroplastyy),
            nameof<BonesFindingUiModel>(m => m.isHistoryOfSpondylodesis),
            nameof<BonesFindingUiModel>(m => m.isHistoryOfOsteosynthesis)
          ]
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isHistoryOfVertebroplastyy)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocation2),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isHistoryOfSpondylodesis)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocation3),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isHistoryOfOsteosynthesis)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.localizationSagittalType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isHistoryOfSpondylodesis)
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.FocalTumor,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.traumaLocation),
          isLocalizer: true,
          validateCondition: {
            customConditionFunction: isSelectionOnLocalizer
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.size)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.limitationType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.corticalisType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.t1wSignal)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.t2wSignal)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.mainCharacteristicsDifferentialDiagnosis01),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.DiffuseTumor,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.mainCharacteristicsDifferentialDiagnosis01),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocation2),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isPathologicFracture)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};

function otherPartsValidationCondition(model: BonesFindingUiModel) {
  const selectionMade = compact(Object.values(model.spineLocation)).length === 1;
  return (
    selectionMade &&
    !model.spineLocation.c0 &&
    !model.spineLocation.c1 &&
    !model.spineLocation.c2 &&
    !model.spineLocation.osSacrum &&
    !model.spineLocation.osCoccygis
  );
}

function isSingleSelectionOnLocalizer(model: BonesFindingUiModel): boolean {
  return compact(Object.values(model.spineLocation)).length === 1;
}
function isSelectionOnLocalizer(model: BonesFindingUiModel): boolean {
  return compact(Object.values(model.spineLocation)).length > 0;
}
