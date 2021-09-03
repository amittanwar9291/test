import { nameof } from 'ts-simple-nameof';

import { NerveCompressionFindingUiModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { NerveCompressionUiModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-ui.model';
import { SecondaryPathogenesisDetailsTypeEnum } from '@enums/handMRT/nerve-compression';

export const NerveCompressionValidationModel: IValidationModel = {
  elements: [{ modelName: nameof<NerveCompressionUiModel>(m => m.areFindings) }],
  finding: [
    {
      findingName: 'CarpalTunnelSyndrome',
      elements: [
        {
          modelName: [
            nameof<NerveCompressionFindingUiModel>(m => m.isOsTrapezium),
            nameof<NerveCompressionFindingUiModel>(m => m.isOsTrapezoid),
            nameof<NerveCompressionFindingUiModel>(m => m.isOsCapitatum),
            nameof<NerveCompressionFindingUiModel>(m => m.isOsHamatum)
          ],
          validateCondition: {
            modelName: nameof<NerveCompressionFindingUiModel>(m => m.secondaryPathogenesisDetailsType),
            requiredValue: SecondaryPathogenesisDetailsTypeEnum.OsseousOrigin
          }
        }
      ]
    },
    {
      findingName: 'UlnarTunnelSyndrome',
      elements: [
        {
          modelName: [
            nameof<NerveCompressionFindingUiModel>(m => m.isOsTriquetrum),
            nameof<NerveCompressionFindingUiModel>(m => m.isOsPisiforme),
            nameof<NerveCompressionFindingUiModel>(m => m.isOsHamatum)
          ],
          validateCondition: {
            modelName: nameof<NerveCompressionFindingUiModel>(m => m.secondaryPathogenesisDetailsType),
            requiredValue: SecondaryPathogenesisDetailsTypeEnum.OsseousOrigin
          }
        }
      ]
    }
  ]
};
