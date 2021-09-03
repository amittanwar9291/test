import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { PatientIndicationFindingUiModel } from '@models/mammaMX/ui/patient-indication/patient-indication-finding-ui.model';
import { PatientIndicationFindingTypeEnum } from '@enums/mammaMX/patient-indication';
import { nameof } from 'ts-simple-nameof';

export const PatientIndicationValidation: IValidationModel = {
  finding: [
    {
      findingName: PatientIndicationFindingTypeEnum.LumpIndurationDetected,
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
      findingName: PatientIndicationFindingTypeEnum.Mastodynia,
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
    },
    {
      findingName: PatientIndicationFindingTypeEnum.Abscess,
      elements: [
        {
          modelName: nameof<PatientIndicationFindingUiModel>(m => m.nippleDischargeLocalization),
          isLocalizer: true
        }
      ]
    }
  ]
};
