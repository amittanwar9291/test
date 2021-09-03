import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { FemaleSexFindingUiModel } from './female-sex-finding-ui.model';
import { FemaleGenderFindingTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-finding-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';
import { FigoStageTypeEnum } from '@enums/pelvisMRT/female-sex/figo-stage-type.enum';
import { FigoStageDetailsTypeEnum } from '@enums/pelvisMRT/female-sex/figo-stage-details-type.enum';
import { LocalizationTypeEnum } from '@enums/pelvisMRT/female-sex/localization-type.enum';

export const FemaleSexValidationModel: IValidationModel = {
  finding: [
    {
      findingName: FemaleGenderFindingTypeEnum.OvaryMass,
      elements: [
        {
          modelName: [nameof<FemaleSexFindingUiModel>(m => m.isRight), nameof<FemaleSexFindingUiModel>(m => m.isLeft)]
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.isTubes)
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.OvaryInflammation,
      elements: [
        {
          modelName: [nameof<FemaleSexFindingUiModel>(m => m.isRight), nameof<FemaleSexFindingUiModel>(m => m.isLeft)]
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.isOvarianVeinThrombosis)
          }
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.OvaryTorsion,
      elements: [
        {
          modelName: [nameof<FemaleSexFindingUiModel>(m => m.isRight), nameof<FemaleSexFindingUiModel>(m => m.isLeft)]
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.UterineTubeMass,
      elements: [
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: [nameof<FemaleSexFindingUiModel>(m => m.isRight), nameof<FemaleSexFindingUiModel>(m => m.isLeft)],
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.isOvary)
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.UterineTubeInflammation,
      elements: [
        {
          modelName: [nameof<FemaleSexFindingUiModel>(m => m.isRight), nameof<FemaleSexFindingUiModel>(m => m.isLeft)]
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.isOvarianVeinThrombosis)
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis1)
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.CorpusUteriMass,
      elements: [
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sizeUterusAxialInMm)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.localizationOfMassType)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: [nameof<FemaleSexFindingUiModel>(m => m.isRight), nameof<FemaleSexFindingUiModel>(m => m.isLeft)],
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.isOvary)
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageType1),
          validateCondition: {
            customConditionFunction: (m: FemaleSexFindingUiModel) =>
              m.differentialDiagnosis === FemaleGenderDiagnosisTypeEnum.EndometrialCarcinoma ||
              m.differentialDiagnosis1 === FemaleGenderDiagnosisTypeEnum.EndometrialCarcinoma
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageDetailsType1),
          validateCondition: {
            customConditionFunction: (m: FemaleSexFindingUiModel) =>
              ![FigoStageTypeEnum.None, FigoStageTypeEnum.StageII].includes(m.figoStageType1)
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageAdditionalDetailsType1),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageDetailsType1),
            requiredValue: FigoStageDetailsTypeEnum.IIIC
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageType2),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis2),
            requiredValue: FemaleGenderDiagnosisTypeEnum.EndometrialCarcinoma
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageDetailsType2),
          validateCondition: {
            customConditionFunction: (m: FemaleSexFindingUiModel) =>
              ![FigoStageTypeEnum.None, FigoStageTypeEnum.StageII].includes(m.figoStageType2)
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageAdditionalDetailsType2),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageDetailsType2),
            requiredValue: FigoStageDetailsTypeEnum.IIIC
          }
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.CorpusUteriInflammation,
      elements: [
        {
          modelName: [nameof<FemaleSexFindingUiModel>(m => m.isRight), nameof<FemaleSexFindingUiModel>(m => m.isLeft)],
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.isOvarianVeinThrombosis)
          }
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.CervixUteriMass,
      elements: [
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },

        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.isOvary)
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageType1),
          validateCondition: {
            customConditionFunction: (m: FemaleSexFindingUiModel) =>
              m.differentialDiagnosis === FemaleGenderDiagnosisTypeEnum.CervicalCarcinoma ||
              m.differentialDiagnosis1 === FemaleGenderDiagnosisTypeEnum.CervicalCarcinoma
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.is1BMacroinvasiveLesion1),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageType1),
            requiredValue: FigoStageTypeEnum.StageI
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageAdditionalDetailsType1),
          validateCondition: {
            customConditionFunction: (m: FemaleSexFindingUiModel) =>
              m.is1BMacroinvasiveLesion1 || m.figoStageDetailsType1 === FigoStageDetailsTypeEnum.IIA
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageDetailsType1),
          validateCondition: {
            customConditionFunction: (m: FemaleSexFindingUiModel) =>
              ![FigoStageTypeEnum.None, FigoStageTypeEnum.StageI].includes(m.figoStageType1)
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageType2),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis2),
            requiredValue: FemaleGenderDiagnosisTypeEnum.CervicalCarcinoma
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.is1BMacroinvasiveLesion2),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageType2),
            requiredValue: FigoStageTypeEnum.StageI
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageAdditionalDetailsType2),
          validateCondition: {
            customConditionFunction: (m: FemaleSexFindingUiModel) =>
              m.is1BMacroinvasiveLesion2 || m.figoStageDetailsType2 === FigoStageDetailsTypeEnum.IIA
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.figoStageDetailsType2),
          validateCondition: {
            customConditionFunction: (m: FemaleSexFindingUiModel) =>
              ![FigoStageTypeEnum.None, FigoStageTypeEnum.StageI].includes(m.figoStageType2)
          }
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.CervixUteriInflammation,
      elements: [
        {
          modelName: [nameof<FemaleSexFindingUiModel>(m => m.isRight), nameof<FemaleSexFindingUiModel>(m => m.isLeft)],
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.isOvarianVeinThrombosis)
          }
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.VaginaMass,
      elements: [
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.localizationType)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.VulvaMass,
      elements: [
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.localizationType)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.labiaMajoraSideType),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.localizationType),
            requiredValue: LocalizationTypeEnum.LabiaMajora
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.labiaMinoraSideType),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.localizationType),
            requiredValue: LocalizationTypeEnum.LabiaMinora
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.VulvaInflammation,
      elements: [
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.localizationType)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.labiaMajoraSideType),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.localizationType),
            requiredValue: LocalizationTypeEnum.LabiaMajora
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.labiaMinoraSideType),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.localizationType),
            requiredValue: LocalizationTypeEnum.LabiaMinora
          }
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.expansionInMm),
          validateCondition: {
            modelName: nameof<FemaleSexFindingUiModel>(m => m.isAbscess1)
          }
        }
      ]
    },
    {
      findingName: FemaleGenderFindingTypeEnum.Endometriosis,
      elements: [
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.endometriosisLocalizationType)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis1)
        }
      ]
    }
  ]
};
