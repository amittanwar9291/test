import { nameof } from 'ts-simple-nameof';

import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { DigitusDTypeEnum } from '@enums/handMRT/capsule-and-ribbons/digitus-d-type.enum';

export const CapsuleAndRibbonsModel: IValidationModel = {
  finding: [
    {
      findingName: 'BandLesionsOfTheFingers',
      elements: [
        {
          modelName: nameof<CapsuleAndRibbonsFindingUiModel>(m => m.localizationType)
        },
        {
          modelName: [
            nameof<CapsuleAndRibbonsFindingUiModel>(m => m.isAnnularPulleyRupture),
            nameof<CapsuleAndRibbonsFindingUiModel>(m => m.isTenosynovitisStenosans),
            nameof<CapsuleAndRibbonsFindingUiModel>(m => m.isRuptureOfTheExtensorTendon)
          ],
          validateCondition: {
            modelName: nameof<CapsuleAndRibbonsFindingUiModel>(m => m.localizationType),
            requiredValue: DigitusDTypeEnum.D1
          }
        },
        {
          modelName: [
            nameof<CapsuleAndRibbonsFindingUiModel>(m => m.isAnnularPulleyRupture),
            nameof<CapsuleAndRibbonsFindingUiModel>(m => m.isTenosynovitisStenosans),
            nameof<CapsuleAndRibbonsFindingUiModel>(m => m.isRuptureOfCollateralLigament),
            nameof<CapsuleAndRibbonsFindingUiModel>(m => m.isRuptureOfTheExtensorTendon)
          ],
          validateCondition: {
            customConditionFunction: digitusDTypeValidation
          }
        },
        {
          modelName: nameof<CapsuleAndRibbonsFindingUiModel>(m => m.ruptureOfCollateralLigamentSideType),
          validateCondition: {
            modelName: nameof<CapsuleAndRibbonsFindingUiModel>(m => m.isRuptureOfCollateralLigament)
          }
        }
      ]
    }
  ]
};

function digitusDTypeValidation(m: CapsuleAndRibbonsFindingUiModel): boolean {
  return [DigitusDTypeEnum.D2, DigitusDTypeEnum.D3, DigitusDTypeEnum.D4, DigitusDTypeEnum.D5].includes(m.localizationType);
}
