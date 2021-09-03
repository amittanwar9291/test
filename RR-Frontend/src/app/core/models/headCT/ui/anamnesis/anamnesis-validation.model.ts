import { IValidationModel, IValidationModelFinding } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';
import { AnamnesisUiModel } from '@models/headCT/ui/anamnesis/anamnesis-ui.model';
import { MotorDeficitTypeEnum } from '@enums/headCT/anamnesis/motor-deficit-type.enum';
import { CranialNervesTypeEnum } from '@enums/headCT/anamnesis/cranial-nerves-type.enum';
import { ClinicSymptomsFindingUiModel } from './clinic-symptoms-finding-ui.model';
import { ClinicalSymptomType } from '@enums/headCT/anamnesis/clinical-symptom-type.enum';

export const AnamnesisValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnamnesisUiModel>(m => m.clinicalSymptomFindings),
      findingTypeModelName: nameof<ClinicSymptomsFindingUiModel>(m => m.findingType),
      finding: [
        {
          findingName: ClinicalSymptomType.MotorDeficit,
          elements: [
            {
              modelName: [nameof<ClinicSymptomsFindingUiModel>(m => m.sideType)],
              validateCondition: {
                modelName: nameof<ClinicSymptomsFindingUiModel>(m => m.motorDeficitType),
                customConditionFunction: (m: ClinicSymptomsFindingUiModel) => {
                  return m.motorDeficitType === MotorDeficitTypeEnum.Hemiparesis || m.motorDeficitType === MotorDeficitTypeEnum.Hemiplegia;
                }
              }
            }
          ]
        },
        {
          findingName: ClinicalSymptomType.CranialNerves,
          elements: [
            {
              modelName: [nameof<ClinicSymptomsFindingUiModel>(m => m.isRight), nameof<ClinicSymptomsFindingUiModel>(m => m.isLeft)],
              validateCondition: {
                modelName: nameof<ClinicSymptomsFindingUiModel>(m => m.cranialNervesType),
                customConditionFunction: (m: ClinicSymptomsFindingUiModel) => {
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
          findingName: ClinicalSymptomType.Neglect,
          elements: [
            {
              modelName: [nameof<ClinicSymptomsFindingUiModel>(m => m.sideType)]
            }
          ]
        }
      ]
    }
  ]
};
