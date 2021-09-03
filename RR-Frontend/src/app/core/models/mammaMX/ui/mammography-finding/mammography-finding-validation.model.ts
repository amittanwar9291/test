import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { MammographyFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-ui.model';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MammographyFindingType } from '@enums/mammaMX/mammography-finding/';
import { nameof } from 'ts-simple-nameof/index';

export const MammographyFindingValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<MammographyFindingUiModel>(m => m.areFindings)
    }
  ],
  finding: [
    {
      findingName: MammographyFindingType.Mass,
      elements: [
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.massKnownDiagnosisType),
          validateCondition: {
            modelName: nameof<MammographyFindingFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.massDifferentialDiagnosis1Type),
          validateCondition: {
            modelName: nameof<MammographyFindingFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.breastLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.largestDiameterInMm)
        }
      ]
    },
    {
      findingName: MammographyFindingType.Calcification,
      elements: [
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.breastLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.maxExpansionInMm)
        },
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.calcificationDiagnosisType)
        }
      ]
    },
    {
      findingName: MammographyFindingType.ArchitecturalDistorsion,
      elements: [
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.breastLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.architectureDistorsionDiagnosis1Type)
        }
      ]
    },
    {
      findingName: MammographyFindingType.Asymmetry,
      elements: [
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.breastLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.asymmetricDiagnosisType)
        }
      ]
    },
    {
      findingName: MammographyFindingType.SkinLesion,
      elements: [
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.breastLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.skinLesionDiagnosis1Type)
        },
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.largestDiameterInMm)
        }
      ]
    },
    {
      findingName: MammographyFindingType.SolitaryMammaryDuctDilatation,
      elements: [
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.breastLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<MammographyFindingFindingUiModel>(m => m.solitaryMammaryDiagnosis1Type)
        }
      ]
    }
  ]
};
