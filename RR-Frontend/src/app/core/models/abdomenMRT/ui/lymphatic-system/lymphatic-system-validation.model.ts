import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';

import { LymphaticSystemUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-ui.model';
import { LymphaticSystemFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-finding-ui.model';
import { LymphaticSystemFindingTypeEnum } from '@enums/abdomenMRT/lymphatic-system';
import { LymphNodeStationsFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymph-node-stations-finding-ui.model';
import { LocalizationTypeEnum, LymphNodeStationsTypeEnum } from '@enums/abdomenMRT/lymphatic-system/lymph-nodes';
import { compact } from 'lodash';

export const LymphaticSystemValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<LymphaticSystemUiModel>(m => m.areFindings)
    },
    {
      modelName: nameof<LymphaticSystemUiModel>(m => m.findings),
      findingTypeModelName: nameof<LymphaticSystemFindingUiModel>(m => m.findingType),
      finding: [
        {
          findingName: LymphaticSystemFindingTypeEnum.LymphNodes,
          elements: [
            {
              modelName: nameof<LymphaticSystemFindingUiModel>(m => m.localizationType)
            },
            {
              modelName: nameof<LymphaticSystemFindingUiModel>(m => m.evaluationType)
            },
            {
              modelName: nameof<LymphaticSystemFindingUiModel>(m => m.lymphNodeStations),
              findingTypeModelName: nameof<LymphNodeStationsFindingUiModel>(m => m.findingType),
              requiredValue: (m: LymphaticSystemFindingUiModel) => {
                return (
                  (m.lymphNodeStations.length > 0 && m.lymphNodeStations[0].findingType !== 'None') ||
                  m.localizationType !== LocalizationTypeEnum.AffectedLymphNodeStations
                );
              },
              finding: [
                {
                  findingName: LymphNodeStationsTypeEnum.InternalMammary,
                  elements: [
                    {
                      modelName: [
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryRight),
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryLeft)
                      ]
                    }
                  ]
                },
                {
                  findingName: LymphNodeStationsTypeEnum.RenalHilum,
                  elements: [
                    {
                      modelName: [
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryRight),
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryLeft)
                      ]
                    }
                  ]
                },
                {
                  findingName: LymphNodeStationsTypeEnum.ExternalIliac,
                  elements: [
                    {
                      modelName: [
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryRight),
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryLeft)
                      ]
                    }
                  ]
                },
                {
                  findingName: LymphNodeStationsTypeEnum.InternalIliac,
                  elements: [
                    {
                      modelName: [
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryRight),
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryLeft)
                      ]
                    }
                  ]
                },
                {
                  findingName: LymphNodeStationsTypeEnum.CommonIliac,
                  elements: [
                    {
                      modelName: [
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryRight),
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryLeft)
                      ]
                    }
                  ]
                },
                {
                  findingName: LymphNodeStationsTypeEnum.Paracolic,
                  elements: [
                    {
                      modelName: [
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryRight),
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryLeft)
                      ]
                    }
                  ]
                },
                {
                  findingName: LymphNodeStationsTypeEnum.Inguinal,
                  elements: [
                    {
                      modelName: [
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryRight),
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryLeft)
                      ]
                    }
                  ]
                },
                {
                  findingName: LymphNodeStationsTypeEnum.Obturator,
                  elements: [
                    {
                      modelName: [
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryRight),
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryLeft)
                      ]
                    }
                  ]
                },
                {
                  findingName: LymphNodeStationsTypeEnum.Femoral,
                  elements: [
                    {
                      modelName: [
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryRight),
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isInternalMammaryLeft)
                      ]
                    }
                  ]
                },
                {
                  findingName: LymphNodeStationsTypeEnum.Diaphragmatic,
                  elements: [
                    {
                      modelName: [
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isDiaphragmaticRight),
                        nameof<LymphNodeStationsFindingUiModel>(m => m.isDiaphragmaticLeft)
                      ]
                    }
                  ]
                }
              ]
            },
            {
              modelName: nameof<LymphaticSystemFindingUiModel>(m => m.spineLocation),
              isLocalizer: true,
              requiredValue: (model: LymphaticSystemFindingUiModel) =>
                compact(Object.values(model.spineLocation)).length !== 1 || model.spineLocation.osSacrum || model.spineLocation.osCoccygis
            }
          ]
        }
      ]
    }
  ]
};
