import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';
import { PharynxFindingTypeEnum, AnatomicVariantTypeEnum } from '@enums/neckMRT/pharynx';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const PharynxValidationModel: IValidationModel = {
  finding: [
    {
      findingName: PharynxFindingTypeEnum.AnatomicVariantDysplasia,
      elements: [
        {
          modelName: nameof<PharynxFindingUiModel>(m => m.anatomicVariantType)
        },
        {
          modelName: [
            nameof<PharynxFindingUiModel>(m => m.isChoanalAtresiaRight),
            nameof<PharynxFindingUiModel>(m => m.isChoanalAtresiaLeft)
          ],
          validateCondition: {
            modelName: nameof<PharynxFindingUiModel>(m => m.anatomicVariantType),
            requiredValue: AnatomicVariantTypeEnum.ChoanalAtresia
          }
        },
        {
          modelName: nameof<PharynxFindingUiModel>(m => m.cleftLipAndPalateType),
          validateCondition: {
            modelName: nameof<PharynxFindingUiModel>(m => m.anatomicVariantType),
            requiredValue: AnatomicVariantTypeEnum.CleftLipAndCleftPalate
          }
        }
      ]
    },
    {
      findingName: PharynxFindingTypeEnum.Mass,
      elements: [
        {
          modelName: nameof<PharynxFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<PharynxFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<PharynxFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<PharynxFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: [
            nameof<PharynxFindingUiModel>(m => m.isNasopharynx),
            nameof<PharynxFindingUiModel>(m => m.isOropharynx),
            nameof<PharynxFindingUiModel>(m => m.isHypopharynx)
          ]
        },
        {
          modelName: [
            nameof<PharynxFindingUiModel>(m => m.isRoof),
            nameof<PharynxFindingUiModel>(m => m.isNasopharynxPosteriorWall),
            nameof<PharynxFindingUiModel>(m => m.isNasopharynxLateralWall),
            nameof<PharynxFindingUiModel>(m => m.isInferiorSoftPalate)
          ],
          validateCondition: {
            modelName: nameof<PharynxFindingUiModel>(m => m.isNasopharynx)
          }
        },
        {
          modelName: [
            nameof<PharynxFindingUiModel>(m => m.isOropharynxPosteriorWall),
            nameof<PharynxFindingUiModel>(m => m.isOropharynxLateralWall),
            nameof<PharynxFindingUiModel>(m => m.isInferior)
          ],
          validateCondition: {
            modelName: nameof<PharynxFindingUiModel>(m => m.isOropharynx)
          }
        },
        {
          modelName: [
            nameof<PharynxFindingUiModel>(m => m.isHypopharynxPosteriorWall),
            nameof<PharynxFindingUiModel>(m => m.isPiriformSinus),
            nameof<PharynxFindingUiModel>(m => m.isPostcricoidRegion)
          ],
          validateCondition: {
            modelName: nameof<PharynxFindingUiModel>(m => m.isHypopharynx)
          }
        },
        {
          modelName: nameof<PharynxFindingUiModel>(m => m.orientationAxialType)
        },
        {
          modelName: nameof<PharynxFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<PharynxFindingUiModel>(m => m.marginType)
        }
      ]
    }
  ]
};
