import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { PatientIndicationFindingUiModel } from '@models/mammaMRT/ui/patient-indication/patient-indication-finding-ui.model';

import { PatientIndicationFindingTypeEnum } from '@enums/mammaMRT/patient-indication';

import { nameof } from 'ts-simple-nameof';

export const PatientIndicationValidation: IValidationModel = {
  finding: [
    {
      findingName: PatientIndicationFindingTypeEnum.LumpsHardeningInBreastDetected,
      elements: [
        {
          modelName: nameof<PatientIndicationFindingUiModel>(m => m.nippleDischargeShoulderLocalization),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: PatientIndicationFindingTypeEnum.NippleDischarge,
      elements: [
        {
          modelName: nameof<PatientIndicationFindingUiModel>(m => m.nippleDischargeLocalization),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: PatientIndicationFindingTypeEnum.ChestPain,
      elements: [
        {
          modelName: nameof<PatientIndicationFindingUiModel>(m => m.nippleDischargeLocalization),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: PatientIndicationFindingTypeEnum.Mastitis,
      elements: [
        {
          modelName: nameof<PatientIndicationFindingUiModel>(m => m.nippleDischargeLocalization),
          isLocalizer: true
        }
      ]
    }
  ]
};
