import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { GastrointestinaltractFindingTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { HerniaLocalizationTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/hernia';
import { ComplicationCourseOfDiseaseTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/postoperative-gastric-imaging';

export const GastrointestinalTractValidationModel: IValidationModel = {
  finding: [
    {
      findingName: GastrointestinaltractFindingTypeEnum.GastricMass,
      elements: [
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.differentialDiagnosisType),
          validateCondition: {
            modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.differentialDiagnosis1Type),
          validateCondition: {
            modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: GastrointestinaltractFindingTypeEnum.GastricDiverticulum,
      elements: [
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.gastricLocalizationType)
        }
      ]
    },
    {
      findingName: GastrointestinaltractFindingTypeEnum.PostoperativeGastricImaging,
      elements: [
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.complicationCourseOfDiseaseType)
        }
      ]
    },
    {
      findingName: GastrointestinaltractFindingTypeEnum.SegmentalBowelFindings,
      elements: [
        {
          modelName: [
            nameof<GastrointestinalTractFindingUiModel>(m => m.isDuodenum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isJejunum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isPreterminalIleum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isNeoterminalIleum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isTerminalIleum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isCecum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isVermiformAppendix),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isAscendingColon),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isHepaticFlexure),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isTransverseColon),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isSplenicFlexure),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isDescendingColon),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isSigmoidColon),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isRectum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isAnalCanal)
          ]
        },
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.differentialDiagnosis1Type)
        }
      ]
    },
    {
      findingName: GastrointestinaltractFindingTypeEnum.IntestinalMass,
      elements: [
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.differentialDiagnosisType),
          validateCondition: {
            modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.differentialDiagnosis1Type),
          validateCondition: {
            modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.measurementIntestinalWallInMm)
        },
        {
          modelName: [
            nameof<GastrointestinalTractFindingUiModel>(m => m.isDuodenum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isJejunum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isIleum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isCecum),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isVermiformAppendix),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isAscendingColon),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isHepaticFlexure),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isTransverseColon),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isSplenicFlexure),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isDescendingColon),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isSigmoidColon),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isRectumUpperThird),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isRectumMiddleThird),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isRectumLowerThird),
            nameof<GastrointestinalTractFindingUiModel>(m => m.isAnalCanal)
          ]
        }
      ]
    },
    {
      findingName: GastrointestinaltractFindingTypeEnum.Appendicitis,
      elements: [
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.sizeInMm),
          validateCondition: {
            modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.isPerityphliticAbscess)
          }
        }
      ]
    },
    {
      findingName: GastrointestinaltractFindingTypeEnum.Appendagitis,
      elements: [
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.heightType)
        }
      ]
    },
    {
      findingName: GastrointestinaltractFindingTypeEnum.Hernia,
      elements: [
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.herniaLocalizationType),
            requiredValue: HerniaLocalizationTypeEnum.FemoralCanal
          }
        },
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.herniaLocalizationType),
            requiredValue: HerniaLocalizationTypeEnum.BochdalekHernia
          }
        },
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.herniaLocalizationType),
            requiredValue: HerniaLocalizationTypeEnum.InguinalCanal
          }
        },
        {
          modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<GastrointestinalTractFindingUiModel>(m => m.herniaLocalizationType),
            requiredValue: HerniaLocalizationTypeEnum.BackMuscles
          }
        }
      ]
    }
  ]
};
