import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { PancreasFindingTypeEnum } from '@enums/abdomenMRT/pancreas';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { PostoperativeFindingTypeEnum } from '@enums/abdomenMRT/pancreas/postinterventional-postoperative-findings';

export const PancreasValidationModel: IValidationModel = {
  finding: [
    {
      findingName: PancreasFindingTypeEnum.AnatomicalVariantsAnomaly,
      elements: [
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.anatomicalVariantsAnomalyFindingType)
        }
      ]
    },
    {
      findingName: PancreasFindingTypeEnum.Mass,
      elements: [
        {
          modelName: [
            nameof<PancreasFindingUiModel>(m => m.isUncinateProcess),
            nameof<PancreasFindingUiModel>(m => m.isPancreaticHead),
            nameof<PancreasFindingUiModel>(m => m.isPancreaticCorpus),
            nameof<PancreasFindingUiModel>(m => m.isPancreaticTail),
            nameof<PancreasFindingUiModel>(m => m.isPancreaticDuct)
          ]
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.size)
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.mainMassDifferentialDiagnosisType1),
          validateCondition: {
            modelName: nameof<PancreasFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: [
            nameof<PancreasFindingUiModel>(m => m.isCeliacTrunk),
            nameof<PancreasFindingUiModel>(m => m.isSplenicArtery),
            nameof<PancreasFindingUiModel>(m => m.isCommonHepaticArtery),
            nameof<PancreasFindingUiModel>(m => m.isGastroduodenalArtery),
            nameof<PancreasFindingUiModel>(m => m.isPancreaticoduodenalArtery),
            nameof<PancreasFindingUiModel>(m => m.isASuperiorMesentericArtery),
            nameof<PancreasFindingUiModel>(m => m.isPortalVein),
            nameof<PancreasFindingUiModel>(m => m.isVSuperiorMesentericArtery),
            nameof<PancreasFindingUiModel>(m => m.isVCavaInferior)
          ]
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.celiacTrunkCharacteristicsType),
          validateCondition: { modelName: nameof<PancreasFindingUiModel>(m => m.isCeliacTrunk) }
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.splenicArteryCharacteristicsType),
          validateCondition: { modelName: nameof<PancreasFindingUiModel>(m => m.isSplenicArtery) }
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.commonHepaticArteryCharacteristicsType),
          validateCondition: { modelName: nameof<PancreasFindingUiModel>(m => m.isCommonHepaticArtery) }
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.gastroduodenalArteryCharacteristicsType),
          validateCondition: { modelName: nameof<PancreasFindingUiModel>(m => m.isGastroduodenalArtery) }
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.pancreaticoduodenalArteryCharacteristicsType),
          validateCondition: { modelName: nameof<PancreasFindingUiModel>(m => m.isPancreaticoduodenalArtery) }
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.aSuperiorMesentericArteryCharacteristicsType),
          validateCondition: { modelName: nameof<PancreasFindingUiModel>(m => m.isASuperiorMesentericArtery) }
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.portalVeinCharacteristicsType),
          validateCondition: { modelName: nameof<PancreasFindingUiModel>(m => m.isPortalVein) }
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.vSuperiorMesentericArteryCharacteristicsType),
          validateCondition: { modelName: nameof<PancreasFindingUiModel>(m => m.isVSuperiorMesentericArtery) }
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.vCavaInferiorCharacteristicsType),
          validateCondition: { modelName: nameof<PancreasFindingUiModel>(m => m.isVCavaInferior) }
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.massDifferentialDiagnosisType1),
          validateCondition: {
            modelName: nameof<PancreasFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: PancreasFindingTypeEnum.DiffuseParenchymalChanges,
      elements: [
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.diffuseParenchymalDifferentialDiagnosis1)
        }
      ]
    },
    {
      findingName: PancreasFindingTypeEnum.PostinterventionalPostoperativeFindings,
      elements: [
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.postoperativeFindingType)
        },
        {
          modelName: nameof<PancreasFindingUiModel>(m => m.pathologyType),
          validateCondition: {
            modelName: nameof<PancreasFindingUiModel>(m => m.postoperativeFindingType),
            requiredValue: PostoperativeFindingTypeEnum.Stent
          }
        }
      ]
    }
  ]
};
