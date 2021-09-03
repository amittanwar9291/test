import { PeritonealCavityFindingTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { PeritonealCavityFindingUiModel } from './peritoneal-cavity-finding-ui.model';

export const PeritonealCavityValidationModel: IValidationModel = {
  finding: [
    {
      findingName: PeritonealCavityFindingTypeEnum.HemorrhageHematoma,
      elements: [
        {
          modelName: [
            nameof<PeritonealCavityFindingUiModel>(m => m.isIntraperitoneal),
            nameof<PeritonealCavityFindingUiModel>(m => m.isRetroperitoneum),
            nameof<PeritonealCavityFindingUiModel>(m => m.isSubordinate)
          ]
        },
        {
          modelName: [
            nameof<PeritonealCavityFindingUiModel>(m => m.isRetroperitoneumLeftSide),
            nameof<PeritonealCavityFindingUiModel>(m => m.isRetroperitoneumRightSide)
          ],
          validateCondition: {
            customConditionFunction: (model: PeritonealCavityFindingUiModel) => {
              return (
                model.isRetroperitoneum &&
                (!model.isInteraortocaval ||
                  [
                    model.isAnteriorPararenalSpace,
                    model.isPosteriorPararenalSpace,
                    model.isPerirenalSpace,
                    model.isAnteriorLeafGerotaFascia,
                    model.isPosteriorLeafGerotaFascia,
                    model.isLateroconalFascia,
                    model.isZuckerkandlsFascia,
                    model.isParaaortic,
                    model.isParacaval
                  ].some(v => v === true))
              );
            }
          }
        }
      ]
    },
    {
      findingName: PeritonealCavityFindingTypeEnum.PeritonealMass,
      elements: [
        {
          modelName: [nameof<PeritonealCavityFindingUiModel>(m => m.differentialDiagnosis1Type)]
        }
      ]
    },
    {
      findingName: PeritonealCavityFindingTypeEnum.RetroperitonealMass,
      elements: [
        {
          modelName: [nameof<PeritonealCavityFindingUiModel>(m => m.isRight), nameof<PeritonealCavityFindingUiModel>(m => m.isLeft)],
          validateCondition: {
            modelName: nameof<PeritonealCavityFindingUiModel>(m => m.isInteraortocaval)
          }
        },
        {
          modelName: [nameof<PeritonealCavityFindingUiModel>(m => m.differentialDiagnosis1Type)]
        }
      ]
    }
  ]
};
