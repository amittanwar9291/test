import { IValidationModel, IValidationModelFinding } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';
import { AnamnesisUiModel } from '@models/headMRT/ui/anamnesis/anamnesis-ui.model';
import { ClinicFindingUiModel } from '@models/headMRT/ui/anamnesis/clinic-finding-ui.model';
import { ClinicTypeEnum } from '@enums/headMRT/anamnesis/clinic-type.enum';
import { MotorDeficitTypeEnum } from '@enums/headMRT/anamnesis/motor-deficit-type.enum';
import { CranialNervesTypeEnum } from '@enums/headMRT/anamnesis/cranial-nerves-type.enum';

export const AnamnesisValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnamnesisUiModel>(m => m.clinicalSymptomFindings),
      findingTypeModelName: nameof<ClinicFindingUiModel>(m => m.findingType),
      finding: [
        {
          findingName: ClinicTypeEnum.MotorDeficit,
          elements: [
            {
              modelName: [nameof<ClinicFindingUiModel>(m => m.sideType)],
              validateCondition: {
                modelName: nameof<ClinicFindingUiModel>(m => m.motorDeficitType),
                customConditionFunction: (m: ClinicFindingUiModel) => {
                  return m.motorDeficitType === MotorDeficitTypeEnum.Hemiparesis || m.motorDeficitType === MotorDeficitTypeEnum.Hemiplegia;
                }
              }
            }
          ]
        },
        {
          findingName: ClinicTypeEnum.CranialNerves,
          elements: [
            {
              modelName: [nameof<ClinicFindingUiModel>(m => m.isRight), nameof<ClinicFindingUiModel>(m => m.isLeft)],
              validateCondition: {
                modelName: nameof<ClinicFindingUiModel>(m => m.cranialNervesType),
                customConditionFunction: (m: ClinicFindingUiModel) => {
                  return (
                    m.cranialNervesType === CranialNervesTypeEnum.TrigeminalNeuralgia ||
                    m.cranialNervesType === CranialNervesTypeEnum.FacialNervePalsy ||
                    m.cranialNervesType === CranialNervesTypeEnum.VestibularNeuritis
                  );
                }
              }
            }
          ]
        },
        {
          findingName: ClinicTypeEnum.PupilEyelidEyeOrbit,
          elements: [
            {
              modelName: [nameof<ClinicFindingUiModel>(m => m.isRight), nameof<ClinicFindingUiModel>(m => m.isLeft)]
            }
          ]
        }
      ]
    }
  ]
};
