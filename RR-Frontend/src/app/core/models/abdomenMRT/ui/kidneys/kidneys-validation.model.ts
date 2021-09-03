import { nameof } from 'ts-simple-nameof';

import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { KidneysUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { AreFindingsEnum, NormVariantOrAnomalyTypeEnum } from '@enums/abdomenMRT/kidneys/';
import { KidneysFindingTypeEnum } from '@enums/abdomenMRT/kidneys';

export const KidneysValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<KidneysUiModel>(m => m.areFindings)
    },
    {
      modelName: nameof<KidneysUiModel>(m => m.findings),
      validateCondition: {
        modelName: nameof<KidneysUiModel>(m => m.areFindings),
        requiredValue: AreFindingsEnum.True
      },
      requiredValue: (m: KidneysUiModel) => {
        return m.findings.filter(item => item.findingType !== KidneysFindingTypeEnum.None).length > 0;
      }
    }
  ],
  finding: [
    {
      findingName: KidneysFindingTypeEnum.NormVariantOrAnomaly,
      elements: [
        { modelName: nameof<KidneysFindingUiModel>(m => m.sideType) },
        { modelName: nameof<KidneysFindingUiModel>(m => m.normVariantOrAnomalyType) },
        {
          modelName: [
            nameof<KidneysFindingUiModel>(m => m.isAgenesis),
            nameof<KidneysFindingUiModel>(m => m.isAplasia),
            nameof<KidneysFindingUiModel>(m => m.isHypoplasia),
            nameof<KidneysFindingUiModel>(m => m.isLobarDysmorphia),
            nameof<KidneysFindingUiModel>(m => m.isDuplexCollectingSystem),
            nameof<KidneysFindingUiModel>(m => m.isDoubleKidney),
            nameof<KidneysFindingUiModel>(m => m.isRenalEctopy),
            nameof<KidneysFindingUiModel>(m => m.isFloatingKidney),
            nameof<KidneysFindingUiModel>(m => m.isFusionAnomalies),
            nameof<KidneysFindingUiModel>(m => m.isNonrotation),
            nameof<KidneysFindingUiModel>(m => m.isPersistentFetalLobulation)
          ],
          validateCondition: {
            modelName: nameof<KidneysFindingUiModel>(m => m.normVariantOrAnomalyType),
            requiredValue: NormVariantOrAnomalyTypeEnum.Kidney
          }
        },
        {
          modelName: nameof<KidneysFindingUiModel>(m => m.renalArteryType),
          validateCondition: {
            modelName: nameof<KidneysFindingUiModel>(m => m.normVariantOrAnomalyType),
            requiredValue: NormVariantOrAnomalyTypeEnum.RenalArtery
          }
        },
        {
          modelName: nameof<KidneysFindingUiModel>(m => m.renalVeinsType),
          validateCondition: {
            modelName: nameof<KidneysFindingUiModel>(m => m.normVariantOrAnomalyType),
            requiredValue: NormVariantOrAnomalyTypeEnum.RenalVeins
          }
        },
        {
          modelName: nameof<KidneysFindingUiModel>(m => m.ureterType),
          validateCondition: {
            modelName: nameof<KidneysFindingUiModel>(m => m.normVariantOrAnomalyType),
            requiredValue: NormVariantOrAnomalyTypeEnum.Ureter
          }
        }
      ]
    },
    {
      findingName: KidneysFindingTypeEnum.ObstructiveNephropathy,
      elements: [
        { modelName: nameof<KidneysFindingUiModel>(m => m.sideType) },
        { modelName: nameof<KidneysFindingUiModel>(m => m.severityType) }
      ]
    },
    {
      findingName: KidneysFindingTypeEnum.Mass,
      elements: [
        {
          modelName: nameof<KidneysFindingUiModel>(m => m.kidneysDifferentialDiagnosisType),
          validateCondition: {
            modelName: nameof<KidneysFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<KidneysFindingUiModel>(m => m.kidneysDifferentialDiagnosisType1),
          validateCondition: {
            modelName: nameof<KidneysFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        { modelName: nameof<KidneysFindingUiModel>(m => m.massSideType) },
        { modelName: nameof<KidneysFindingUiModel>(m => m.massChar2ExtensionSizeInMm) },
        {
          modelName: nameof<KidneysFindingUiModel>(m => m.massSideMoreThanOneLesionType),
          validateCondition: { modelName: nameof<KidneysFindingUiModel>(m => m.isLocalization) }
        }
      ]
    },
    {
      findingName: KidneysFindingTypeEnum.DecreasedRenalVolume,
      elements: [
        {
          modelName: [nameof<KidneysFindingUiModel>(m => m.isRight), nameof<KidneysFindingUiModel>(m => m.isLeft)]
        }
      ]
    },
    {
      findingName: KidneysFindingTypeEnum.IncreasedRenalVolume,
      elements: [
        {
          modelName: [nameof<KidneysFindingUiModel>(m => m.isRight), nameof<KidneysFindingUiModel>(m => m.isLeft)]
        },
        { modelName: nameof<KidneysFindingUiModel>(m => m.kidneysDifferentialDiagnosisType1) }
      ]
    },
    {
      findingName: KidneysFindingTypeEnum.VascularNephropathy,
      elements: [
        { modelName: nameof<KidneysFindingUiModel>(m => m.sideType) },
        { modelName: nameof<KidneysFindingUiModel>(m => m.pathologyType) }
      ]
    }
  ]
};
