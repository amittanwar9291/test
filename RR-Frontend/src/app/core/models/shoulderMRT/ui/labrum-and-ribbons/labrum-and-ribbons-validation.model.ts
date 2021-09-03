import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';

import { LabrumAndRibbonsFindingType } from '@enums/shoulderMRT/labrum-and-ribbons';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

import { nameof } from 'ts-simple-nameof';

export const LabrumAndRibbonsValidation: IValidationModel = {
  finding: [
    {
      findingName: LabrumAndRibbonsFindingType.Labrum,
      elements: [
        {
          modelName: nameof<LabrumAndRibbonsFindingUiModel>(m => m.labrumLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<LabrumAndRibbonsFindingUiModel>(m => m.labrumMorphologyResultType)
        },
        {
          modelName: nameof<LabrumAndRibbonsFindingUiModel>(m => m.extensionLabrumPathologyDiagnosis1),
          validateCondition: {
            modelName: nameof<LabrumAndRibbonsFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        }
      ]
    },
    {
      findingName: LabrumAndRibbonsFindingType.Ligaments,
      elements: [
        {
          modelName: [
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isLigGlenohumeraleSuperior),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isLigGlenohumeraleMedium),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isLigGlenohumeraleInferior),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isLigCoracohumerale),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isRuptureLigCoracoacromiale),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isRuptureLigCoracoclaviculare),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isRuptureLigHumeriTransversum),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isRuptureLigSemicirculareHumeri),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isLigGlenohumerale),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isThickeningLigCoracohumerale),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isThickeningLigCoracoacromiale),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isThickeningLigCoracoclaviculare),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isThickeningLigHumeriTransversum),
            nameof<LabrumAndRibbonsFindingUiModel>(m => m.isThickeningLigSemicirculareHumeri)
          ]
        }
      ]
    },
    {
      findingName: LabrumAndRibbonsFindingType.BicepsTendon,
      elements: [
        {
          modelName: nameof<LabrumAndRibbonsFindingUiModel>(m => m.longBicepsTendonType)
        }
      ]
    }
  ]
};
