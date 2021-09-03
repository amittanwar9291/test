import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { AnamnesisUiModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-ui.model';

import { nameof } from 'ts-simple-nameof';

import { IndicationFindingUiModel } from '@models/cardioMRT/ui/anamnesis/indication-finding-ui.model';
import { InterventionOrPreOpsFindingUiModel } from '@models/cardioMRT/ui/anamnesis/intervention-or-pre-ops-finding-ui.model';

import { IndicationFindingTypeEnum, InterventionOrPreOpsFindingTypeEnum, UnitTypeEnum } from '@enums/cardioMRT';

export const AnamnesisValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnamnesisUiModel>(m => m.unitType),
      validateCondition: {
        modelName: nameof<AnamnesisUiModel>(m => m.isLaboratoryParameters)
      }
    },
    {
      modelName: [
        nameof<AnamnesisUiModel>(m => m.totalCholesterolAmount),
        nameof<AnamnesisUiModel>(m => m.hdlCholesterolAmount),
        nameof<AnamnesisUiModel>(m => m.ldlCholesterolAmount),
        nameof<AnamnesisUiModel>(m => m.triglyceridesAmount),
        nameof<AnamnesisUiModel>(m => m.hematocritInPercent)
      ],
      validateCondition: {
        modelName: nameof<AnamnesisUiModel>(m => m.isLaboratoryParameters)
      }
    },
    {
      modelName: nameof<AnamnesisUiModel>(m => m.indicationFindings),
      findingTypeModelName: nameof<IndicationFindingUiModel>(m => m.indicationFindingType),
      finding: [
        {
          findingName: IndicationFindingTypeEnum.CoronaryHeartDisease,
          elements: [
            {
              modelName: nameof<IndicationFindingUiModel>(m => m.statusType)
            }
          ]
        }
      ]
    },
    {
      modelName: nameof<AnamnesisUiModel>(m => m.interventionOrPreOpsFindings),
      findingTypeModelName: nameof<InterventionOrPreOpsFindingUiModel>(m => m.interventionOrPreOpsFindingType),
      finding: [
        {
          findingName: InterventionOrPreOpsFindingTypeEnum.ValveReplacement,
          elements: [
            {
              modelName: [
                nameof<InterventionOrPreOpsFindingUiModel>(m => m.isAorticValve),
                nameof<InterventionOrPreOpsFindingUiModel>(m => m.isMitralValve)
              ]
            }
          ]
        }
      ]
    }
  ]
};
