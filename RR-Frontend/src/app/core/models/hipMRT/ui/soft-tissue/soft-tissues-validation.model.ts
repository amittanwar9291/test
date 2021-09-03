import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { nameof } from 'ts-simple-nameof';

import { FindingTypeEnum } from '@enums/hipMRT/soft-tissue/common/finding-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { PathologyTypeEnum, VesselsPathologyTypeEnum } from '@enums/hipMRT/soft-tissue';

function isPelvisOrIsThigh(model: SoftTissueFindingUiModel): boolean {
  return model.isPelvis || model.isThigh;
}

export const SoftTissuesValidation: IValidationModel = {
  elements: [{ modelName: nameof<SoftTissueFindingUiModel>(m => m.sideType) }],
  finding: [
    {
      findingName: FindingTypeEnum.ArticularEffusion,
      elements: [{ modelName: nameof<SoftTissueFindingUiModel>(m => m.sideType) }]
    },
    {
      findingName: FindingTypeEnum.MorelLavalleeLesion,
      elements: [
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.sideType) },
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationThighType) },
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.sizeInMm) }
      ]
    },
    {
      findingName: FindingTypeEnum.Vessels,
      elements: [
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.sideType) },
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.vesselsPathologyType) },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.vesselsLocalizationType),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.vesselsPathologyType),
            requiredValue: VesselsPathologyTypeEnum.Aneurysm
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.Hematoma,
      elements: [
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.sideType) },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.isPelvis), nameof<SoftTissueFindingUiModel>(m => m.isThigh)]
        },
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isVentral),
            nameof<SoftTissueFindingUiModel>(m => m.isMedial),
            nameof<SoftTissueFindingUiModel>(m => m.isLateral),
            nameof<SoftTissueFindingUiModel>(m => m.isDorsal)
          ],
          validateCondition: {
            customConditionFunction: isPelvisOrIsThigh
          }
        },
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.sizeInMm) }
      ]
    },
    {
      findingName: FindingTypeEnum.Abscess,
      elements: [
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.sideType) },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.isPelvis), nameof<SoftTissueFindingUiModel>(m => m.isThigh)]
        },
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isVentral),
            nameof<SoftTissueFindingUiModel>(m => m.isMedial),
            nameof<SoftTissueFindingUiModel>(m => m.isLateral),
            nameof<SoftTissueFindingUiModel>(m => m.isDorsal)
          ],
          validateCondition: {
            customConditionFunction: isPelvisOrIsThigh
          }
        },
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.sizeInMm) }
      ]
    },
    {
      findingName: FindingTypeEnum.SoftTissueMass,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.sideType) },
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isVentral),
            nameof<SoftTissueFindingUiModel>(m => m.isMedial),
            nameof<SoftTissueFindingUiModel>(m => m.isLateral),
            nameof<SoftTissueFindingUiModel>(m => m.isDorsal)
          ]
        },
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.sizeInMm) },
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.marginType) },
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.homogeneityType) },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.OtherPathologies,
      elements: [
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.sideType) },
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.pathologyType) },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.isInguinal), nameof<SoftTissueFindingUiModel>(m => m.isIliacal)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.SuspectLymphNodes
          }
        }
      ]
    }
  ]
};
