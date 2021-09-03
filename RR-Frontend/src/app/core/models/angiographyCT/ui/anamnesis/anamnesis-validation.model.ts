import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';
import { AnamnesisUiModel } from '@models/angiographyCT/ui/anamnesis/anamnesis-ui.model';
import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';
import { IndicationFindingTypeEnum } from '@enums/angiographyCT/anamnesis/indication-finding-type.enum';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';
import { PriorInterventionsFindingTypeEnum } from '@enums/angiographyCT/anamnesis';

export const AnamnesisValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnamnesisUiModel>(m => m.indicationFindings),
      findingTypeModelName: nameof<IndicationFindingUiModel>(m => m.indicationFindingType),
      finding: [
        {
          findingName: IndicationFindingTypeEnum.CoronaryArteryDisease,
          elements: [
            {
              modelName: [
                nameof<IndicationFindingUiModel>(m => m.isECG),
                nameof<IndicationFindingUiModel>(m => m.isEchocardiography),
                nameof<IndicationFindingUiModel>(m => m.isMyocardialScintigraphySPECT),
                nameof<IndicationFindingUiModel>(m => m.isPET),
                nameof<IndicationFindingUiModel>(m => m.isCT)
              ],
              validateCondition: {
                modelName: nameof<IndicationFindingUiModel>(m => m.isStressTestingPerformed)
              }
            }
          ]
        }
      ]
    },
    {
      modelName: nameof<AnamnesisUiModel>(m => m.priorInterventionsFindings),
      findingTypeModelName: nameof<PriorInterventionsFindingUiModel>(m => m.priorInterventionsFindingType),
      finding: [
        {
          findingName: PriorInterventionsFindingTypeEnum.PartialLungResection,
          elements: [
            {
              modelName: [
                nameof<PriorInterventionsFindingUiModel>(m => m.isPartialLungResectionSideLeft),
                nameof<PriorInterventionsFindingUiModel>(m => m.isPartialLungResectionSideRight)
              ]
            }
          ]
        },
        {
          findingName: PriorInterventionsFindingTypeEnum.ValveReplacement,
          elements: [
            {
              modelName: [
                nameof<PriorInterventionsFindingUiModel>(m => m.isAorticValve),
                nameof<PriorInterventionsFindingUiModel>(m => m.isMitralValve)
              ]
            }
          ]
        },
        {
          findingName: PriorInterventionsFindingTypeEnum.AfterTransplantation,
          elements: [
            {
              modelName: [nameof<PriorInterventionsFindingUiModel>(m => m.afterTransplantationType)]
            }
          ]
        }
      ]
    }
  ]
};
