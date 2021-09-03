import { IValidationModel, IValidationModelElement } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { MeningesFindingTypeEnum } from '@enums/headCT/meninges/meninges-finding-type.enum';

export const MeningesSharedMandatoryElements: IValidationModelElement[] = [
  {
    modelName: [
      nameof<MeningesFindingUiModel>(m => m.isRight),
      nameof<MeningesFindingUiModel>(m => m.isLeft),
      nameof<MeningesFindingUiModel>(m => m.isMedian)
    ]
  },
  {
    modelName: [
      nameof<MeningesFindingUiModel>(m => m.isFrontal),
      nameof<MeningesFindingUiModel>(m => m.isTemporal),
      nameof<MeningesFindingUiModel>(m => m.isParietal),
      nameof<MeningesFindingUiModel>(m => m.isOccipital),
      nameof<MeningesFindingUiModel>(m => m.isInfratentorial)
    ]
  }
];

export const MeningesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: MeningesFindingTypeEnum.Mass,
      elements: [
        ...MeningesSharedMandatoryElements,
        ...[
          { modelName: nameof<MeningesFindingUiModel>(m => m.sizeInMm) },
          {
            modelName: nameof<MeningesFindingUiModel>(m => m.differentialDiagnosis),
            validateCondition: {
              modelName: nameof<MeningesFindingUiModel>(m => m.descriptionType),
              requiredValue: DescriptionTypeEnum.IKnow
            }
          },
          {
            modelName: nameof<MeningesFindingUiModel>(m => m.differentialDiagnosis1),
            validateCondition: {
              modelName: nameof<MeningesFindingUiModel>(m => m.descriptionType),
              requiredValue: DescriptionTypeEnum.IDescribe
            }
          }
        ]
      ]
    },
    {
      findingName: MeningesFindingTypeEnum.DiffuseChanges,
      elements: [
        ...MeningesSharedMandatoryElements,
        ...[
          {
            modelName: nameof<MeningesFindingUiModel>(m => m.maxExtensionInMm),
            validateCondition: { modelName: nameof<MeningesFindingUiModel>(m => m.isAbscess) }
          }
        ]
      ]
    },
    {
      findingName: MeningesFindingTypeEnum.SubduralHematoma,
      elements: [
        ...MeningesSharedMandatoryElements,
        ...[
          {
            modelName: nameof<MeningesFindingUiModel>(m => m.midlineShiftSideType),
            validateCondition: { modelName: nameof<MeningesFindingUiModel>(m => m.isMidlineShift) }
          },
          {
            modelName: nameof<MeningesFindingUiModel>(m => m.regionType),
            validateCondition: { modelName: nameof<MeningesFindingUiModel>(m => m.isHerniation) }
          }
        ]
      ]
    },
    {
      findingName: MeningesFindingTypeEnum.EpiduralHematoma,
      elements: [...MeningesSharedMandatoryElements, ...[{ modelName: nameof<MeningesFindingUiModel>(m => m.sizeInMm) }]]
    }
  ]
};
