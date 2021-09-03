import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { nameof } from 'ts-simple-nameof';

import { PatellaFindingUiModel } from '@models/kneeMRT/ui/patella/patella-finding-ui.model';

import { PatellaFindingTypeEnum } from '@enums/kneeMRT/patella/patella-finding-type.enum';
import { VerticalPositionTypeEnum } from '@enums/kneeMRT/patella/anatomical-variants';

export const PatellaValidationModel: IValidationModel = {
  finding: [
    {
      findingName: PatellaFindingTypeEnum.AnatomicalVariants,
      elements: [
        {
          modelName: [
            nameof<PatellaFindingUiModel>(m => m.isAccessoryOssificationCenters),
            nameof<PatellaFindingUiModel>(m => m.isVerticalPosition),
            nameof<PatellaFindingUiModel>(m => m.isSulcusAngleTrochlea),
            nameof<PatellaFindingUiModel>(m => m.isTrochleadysplasia),
            nameof<PatellaFindingUiModel>(m => m.isTtTgDistance),
            nameof<PatellaFindingUiModel>(m => m.isPlicaMediopatellaris),
            nameof<PatellaFindingUiModel>(m => m.isPlicaLateralisPatellae)
          ]
        },
        {
          modelName: nameof<PatellaFindingUiModel>(m => m.verticalPositionType),
          validateCondition: {
            modelName: nameof<PatellaFindingUiModel>(m => m.isVerticalPosition)
          }
        },
        {
          modelName: nameof<PatellaFindingUiModel>(m => m.visualSelectionType),
          validateCondition: {
            modelName: nameof<PatellaFindingUiModel>(m => m.verticalPositionType),
            requiredValue: VerticalPositionTypeEnum.VisualSelection
          }
        },
        {
          modelName: nameof<PatellaFindingUiModel>(m => m.largestVerticalExpansionPatella),
          validateCondition: {
            modelName: nameof<PatellaFindingUiModel>(m => m.verticalPositionType),
            requiredValue: VerticalPositionTypeEnum.InsallSalvatiIndex
          }
        },
        {
          modelName: nameof<PatellaFindingUiModel>(m => m.lengthPatellae),
          validateCondition: {
            modelName: nameof<PatellaFindingUiModel>(m => m.verticalPositionType),
            requiredValue: VerticalPositionTypeEnum.InsallSalvatiIndex
          }
        },
        {
          modelName: nameof<PatellaFindingUiModel>(m => m.ttTgDistanceInMm),
          validateCondition: {
            modelName: nameof<PatellaFindingUiModel>(m => m.isTtTgDistance),
            requiredValue: true
          }
        },
        {
          modelName: nameof<PatellaFindingUiModel>(m => m.sulcusAngleTrochleaInDegrees),
          validateCondition: {
            modelName: nameof<PatellaFindingUiModel>(m => m.isSulcusAngleTrochlea),
            requiredValue: true
          }
        },
        {
          modelName: nameof<PatellaFindingUiModel>(m => m.plicaMediopatellarisWidthInMm),
          validateCondition: {
            modelName: nameof<PatellaFindingUiModel>(m => m.isPlicaMediopatellaris),
            requiredValue: true
          }
        },
        {
          modelName: nameof<PatellaFindingUiModel>(m => m.plicaLateralisPatellaeWidthInMm),
          validateCondition: {
            modelName: nameof<PatellaFindingUiModel>(m => m.isPlicaLateralisPatellae),
            requiredValue: true
          }
        }
      ]
    },
    {
      findingName: PatellaFindingTypeEnum.RetropatellarChondropathy,
      elements: [
        {
          modelName: [
            nameof<PatellaFindingUiModel>(m => m.isMedialFacet),
            nameof<PatellaFindingUiModel>(m => m.isPatellaRidge),
            nameof<PatellaFindingUiModel>(m => m.isLateralFacet)
          ]
        }
      ]
    },
    {
      findingName: PatellaFindingTypeEnum.OsteochondrosisDissecans,
      elements: [
        {
          modelName: [nameof<PatellaFindingUiModel>(m => m.isMedialFacet), nameof<PatellaFindingUiModel>(m => m.isLateralFacet)]
        }
      ]
    }
  ]
};
