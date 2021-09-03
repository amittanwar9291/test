import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/lung-parenchyma-finding-type.enum';
import { LungParenchymaFindingUiModel } from './lung-parenchyma-finding-ui.model';
import { SuspicionTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/lung-parenchyma-pathology/suspicion-type.enum';
import { CysticFibrosisTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/cystic-fibrosis/cystic-fibrosis-type.enum';
import { LungsFlapsMulticolorLocalizerUi } from '@models/shared/thorax/localizers/lungs-flaps-multicolor-localizer-ui';
import { compact } from 'lodash';

export const LungPerenchymaValidationModel: IValidationModel = {
  finding: [
    {
      findingName: LungParenchymaFindingTypeEnum.LungParenchymaPathology,
      elements: [
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.lungParenchymaPathologyLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.suspicionOfType)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.sizeInMm),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.suspicionOfType),
            requiredValue: SuspicionTypeEnum.Mass
          }
        }
      ]
    },
    {
      findingName: LungParenchymaFindingTypeEnum.CysticFibrosis,
      elements: [
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.cysticFibrosisType)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.isMediastinalShift)
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.bronchiectasisOrWallThickeningLocalizer),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.cysticFibrosisType),
            requiredValue: CysticFibrosisTypeEnum.QuantitativeEichingerScore
          },
          requiredValue: (model: LungParenchymaFindingUiModel) => isAnyLocalizerChoosen(model)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mucusPlaqueLocalizer),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.cysticFibrosisType),
            requiredValue: CysticFibrosisTypeEnum.QuantitativeEichingerScore
          },
          requiredValue: (model: LungParenchymaFindingUiModel) => isAnyLocalizerChoosen(model)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.sacculationOrAbscessLocalizer),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.cysticFibrosisType),
            requiredValue: CysticFibrosisTypeEnum.QuantitativeEichingerScore
          },
          requiredValue: (model: LungParenchymaFindingUiModel) => isAnyLocalizerChoosen(model)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.consolidationLocalizer),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.cysticFibrosisType),
            requiredValue: CysticFibrosisTypeEnum.QuantitativeEichingerScore
          },
          requiredValue: (model: LungParenchymaFindingUiModel) => isAnyLocalizerChoosen(model)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.otherAbnormalityLocalizer),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.cysticFibrosisType),
            requiredValue: CysticFibrosisTypeEnum.QuantitativeEichingerScore
          },
          requiredValue: (model: LungParenchymaFindingUiModel) => isAnyLocalizerChoosen(model)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.functionLocalizer),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.cysticFibrosisType),
            requiredValue: CysticFibrosisTypeEnum.QuantitativeEichingerScore
          },
          requiredValue: (model: LungParenchymaFindingUiModel) => isAnyLocalizerChoosen(model)
        }
      ]
    }
  ]
};

function isAnyLocalizerChoosen(model: LungParenchymaFindingUiModel): boolean {
  const localizersModelProps = [
    nameof<LungParenchymaFindingUiModel>(m => m.bronchiectasisOrWallThickeningLocalizer),
    nameof<LungParenchymaFindingUiModel>(m => m.mucusPlaqueLocalizer),
    nameof<LungParenchymaFindingUiModel>(m => m.sacculationOrAbscessLocalizer),
    nameof<LungParenchymaFindingUiModel>(m => m.consolidationLocalizer),
    nameof<LungParenchymaFindingUiModel>(m => m.otherAbnormalityLocalizer),
    nameof<LungParenchymaFindingUiModel>(m => m.functionLocalizer)
  ];

  const localizerHasValue = (localizer: LungsFlapsMulticolorLocalizerUi) => {
    const part1 = compact(Object.values(localizer.lessThan50Location)).length > 0;
    const part2 = compact(Object.values(localizer.moreThan50Location)).length > 0;
    return part1 || part2;
  };

  return compact(localizersModelProps.map(item => localizerHasValue(model[item]))).length > 0;
}
