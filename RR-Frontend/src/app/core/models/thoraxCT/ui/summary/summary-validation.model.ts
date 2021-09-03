import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { SummaryUiModel } from '@models/thoraxCT/ui/summary/summary-ui.model';
import { TnStagingTypeEnum } from '@enums/thoraxCT/summary/tn-staging-type.enum';

export const SummaryValidationModel: IValidationModel = {
  elements: [
    {
      modelName: [
        nameof<SummaryUiModel>(m => m.isCTAbdomen),
        nameof<SummaryUiModel>(m => m.isCTNeck),
        nameof<SummaryUiModel>(m => m.isMammographyAndBreastUltrasound),
        nameof<SummaryUiModel>(m => m.isMRIChest),
        nameof<SummaryUiModel>(m => m.isMRIAbdomen),
        nameof<SummaryUiModel>(m => m.isMRINeck),
        nameof<SummaryUiModel>(m => m.isCardiacDiagnostics),
        nameof<SummaryUiModel>(m => m.isCTAngiography),
        nameof<SummaryUiModel>(m => m.isCTPA),
        nameof<SummaryUiModel>(m => m.isPETCT),
        nameof<SummaryUiModel>(m => m.isSPECT),
        nameof<SummaryUiModel>(m => m.isBoneScan),
        nameof<SummaryUiModel>(m => m.isMRIThoracicSpine)
      ],
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.isComplementaryExamination)
      }
    },
    {
      modelName: nameof<SummaryUiModel>(m => m.dynamicFindingsType),
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.isDynamicFindings)
      }
    },
    {
      modelName: nameof<SummaryUiModel>(m => m.tnStagingType),
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.isTNStaging)
      }
    },
    {
      modelName: nameof<SummaryUiModel>(m => m.tStagingLevelType),
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.tnStagingType)
      }
    },
    {
      modelName: nameof<SummaryUiModel>(m => m.nStagingLevelType),
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.tnStagingType)
      }
    },
    {
      modelName: nameof<SummaryUiModel>(m => m.coviD19CTGroupsType),
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.isCOVID19CTGroups)
      }
    },
    {
      modelName: nameof<SummaryUiModel>(m => m.numberOfRoundHearths),
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.isRiskCalculator)
      }
    }
  ]
};
