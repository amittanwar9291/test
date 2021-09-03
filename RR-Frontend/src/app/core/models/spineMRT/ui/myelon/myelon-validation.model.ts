import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { MyelonFindingUIModel } from './myelon-finding-ui.model';

import { compact } from 'lodash';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SpinalCanalFindingTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-finding-type.enum';
import { MalformationTypeEnum } from '@enums/spineMRT/myelon/malformation-type.enum';
import { CharacterizationTypeEnum } from '@enums/spineMRT/myelon/characterization-type.enum';
import { DetailsClosedDysraphismTypeEnum } from '@enums/spineMRT/myelon/details-closed-dysraphism-type.enum';

export const MyelonValidationModel: IValidationModel = {
  finding: [
    {
      findingName: SpinalCanalFindingTypeEnum.SpinalCanalStenosis,
      elements: [
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.spineLocation),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: SpinalCanalFindingTypeEnum.DevelopmentalDisorderOrMalformation,
      elements: [
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.malformationType)
        },
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.spineLocation),
          isLocalizer: true,
          validateCondition: {
            customConditionFunction: (m: MyelonFindingUIModel) => {
              return m.malformationType === MalformationTypeEnum.Syringohydromyelia || m.malformationType === MalformationTypeEnum.Dysraphy;
            }
          }
        },
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.characterizationType),
          validateCondition: {
            modelName: nameof<MyelonFindingUIModel>(m => m.malformationType),
            requiredValue: MalformationTypeEnum.Dysraphy
          }
        },
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.detailsClosedDysraphismType),
          validateCondition: {
            modelName: nameof<MyelonFindingUIModel>(m => m.characterizationType),
            requiredValue: CharacterizationTypeEnum.Closed
          }
        },
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.classificationSubcutaneousMassType),
          validateCondition: {
            modelName: nameof<MyelonFindingUIModel>(m => m.detailsClosedDysraphismType),
            requiredValue: DetailsClosedDysraphismTypeEnum.WithSubcutaneousMass
          }
        },
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.classificationDysraphyType),
          validateCondition: {
            modelName: nameof<MyelonFindingUIModel>(m => m.detailsClosedDysraphismType),
            requiredValue: DetailsClosedDysraphismTypeEnum.WithoutSubcutaneousMass
          }
        }
      ]
    },
    {
      findingName: SpinalCanalFindingTypeEnum.MassEffect,
      elements: [
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.spinalCanalDifferentialDiagnosisType),
          validateCondition: {
            customConditionFunction: (m: MyelonFindingUIModel) => {
              return m.descriptionType === DescriptionTypeEnum.IKnow && compact(Object.values(m.spinalCanalLocation)).length !== 0;
            }
          }
        },
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            customConditionFunction: (m: MyelonFindingUIModel) => {
              return m.descriptionType === DescriptionTypeEnum.IDescribe && compact(Object.values(m.spinalCanalLocation)).length !== 0;
            }
          }
        }
      ]
    },
    {
      findingName: SpinalCanalFindingTypeEnum.NoMassEffect,
      elements: [
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.spinalCanalDifferentialDiagnosisType),
          validateCondition: {
            modelName: nameof<MyelonFindingUIModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<MyelonFindingUIModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<MyelonFindingUIModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
