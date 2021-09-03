import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { OsteochondralInterfaceFindingUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-finding-ui.model';

import { nameof } from 'ts-simple-nameof';

import { FindingTypeEnum } from '@enums/kneeMRT/osteochondral-interface';

export const OsteochondralInterfaceValidationModel: IValidationModel = {
  finding: [
    {
      findingName: FindingTypeEnum.Osteoarthrosis,
      elements: [
        {
          modelName: nameof<OsteochondralInterfaceFindingUiModel>(m => m.location),
          isLocalizer: true
        },
        {
          modelName: nameof<OsteochondralInterfaceFindingUiModel>(m => m.expansivenessMaxDiameterInMm),
          validateCondition: {
            modelName: nameof<OsteochondralInterfaceFindingUiModel>(m => m.isExpansiveness)
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.TraumaChondralLesion,
      elements: [
        {
          modelName: nameof<OsteochondralInterfaceFindingUiModel>(m => m.location),
          isLocalizer: true
        },
        { modelName: nameof<OsteochondralInterfaceFindingUiModel>(m => m.chondralLesionType) }
      ]
    },
    {
      findingName: FindingTypeEnum.TraumaSubchondralFracture,
      elements: [
        {
          modelName: nameof<OsteochondralInterfaceFindingUiModel>(m => m.location),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: FindingTypeEnum.TraumaSubchondralInsufficiencyFracture,
      elements: [
        {
          modelName: nameof<OsteochondralInterfaceFindingUiModel>(m => m.location),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: FindingTypeEnum.TraumaOsteochondralFracture,
      elements: [
        {
          modelName: nameof<OsteochondralInterfaceFindingUiModel>(m => m.location),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: FindingTypeEnum.OsteochondrosisDissecans,
      elements: [
        {
          modelName: nameof<OsteochondralInterfaceFindingUiModel>(m => m.location),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: FindingTypeEnum.AvascularNecrosis,
      elements: [
        {
          modelName: nameof<OsteochondralInterfaceFindingUiModel>(m => m.location),
          isLocalizer: true
        }
      ]
    }
  ]
};
