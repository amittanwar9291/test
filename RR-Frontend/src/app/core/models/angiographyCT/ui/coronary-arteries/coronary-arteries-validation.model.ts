import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';

import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';
import { CoronaryArteriesUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-ui.model';
import { FindingTypeEnum } from '@enums/angiographyCT/coronary-arteries/finding-type.enum';
import { AnamnesisUiModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-ui.model';
import { CoronaryAnomalyTypeEnum } from '@enums/angiographyCT/coronary-arteries/coronary-anomaly/coronary-anomaly-type.enum';

export const CoronaryArteriesValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<CoronaryArteriesUiModel>(m => m.findings),
      findingTypeModelName: nameof<CoronaryArteriesFindingUiModel>(m => m.findingType),
      finding: [
        {
          findingName: FindingTypeEnum.CoronaryArterialDominance,
          elements: [{ modelName: nameof<CoronaryArteriesFindingUiModel>(m => m.coronaryArterialDominanceType) }]
        },
        {
          findingName: FindingTypeEnum.CoronaryAnomaly,
          elements: [
            { modelName: nameof<CoronaryArteriesFindingUiModel>(m => m.coronaryAnomalyType) },
            {
              modelName: [
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRca),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRcx),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isLca),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRiva)
              ],
              validateCondition: {
                modelName: nameof<CoronaryArteriesFindingUiModel>(m => m.coronaryAnomalyType),
                requiredValue: CoronaryAnomalyTypeEnum.MyocardialBridging
              }
            },
            {
              modelName: [
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRca),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRcx),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isLca),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRiva)
              ],
              validateCondition: {
                modelName: nameof<CoronaryArteriesFindingUiModel>(m => m.coronaryAnomalyType),
                requiredValue: CoronaryAnomalyTypeEnum.EctasiaAneurysm
              }
            }
          ]
        },
        {
          findingName: FindingTypeEnum.ExtracoronaryIntracardiacFindings,
          elements: [
            {
              modelName: [
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRightEnlargementAtrium),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRightEnlargementVentricle),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRightMyocardialHypertrophy),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isVenousContrastReflux),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRightVentricularDiverticulum),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftEnlargementAtrium),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftEnlargementVentricle),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftMyocardialHypertrophy),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isThrombus),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftAtrium),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftVentricularDiverticulum),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isEffusion),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isMass),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isPneumopericardium),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isCalcification),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isAtrialSeptalDefect),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isVentricularSeptalDefect),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isVentricularSeptalAneurysm),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isSeptumVentricularDiverticulum),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isBicuspidAorticValve)
              ]
            }
          ]
        },
        {
          findingName: FindingTypeEnum.FollowUpAfterBypass,
          elements: [
            {
              modelName: [
                nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftCoronaryArtery),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRightCoronaryArtery)
              ]
            }
          ]
        },
        {
          findingName: FindingTypeEnum.FollowUpAfterStent,
          elements: [
            {
              modelName: [
                nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftCoronaryArtery),
                nameof<CoronaryArteriesFindingUiModel>(m => m.isRightCoronaryArtery)
              ]
            }
          ]
        }
      ]
    }
  ]
};
