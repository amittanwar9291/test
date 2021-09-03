import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { AbdomenFindingTypeEnum, AnatomicVariantsOrPathologyTypeEnum } from '@enums/angiographyCT/abdomen';

export const AbdomenValidationModel: IValidationModel = {
  finding: [
    {
      findingName: AbdomenFindingTypeEnum.RenalArtery,
      elements: [
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.sideType)
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.detailsType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyTypeEnum.AnatomicVariantsArtery
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.detailsType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyTypeEnum.AnatomicVariantsKidney
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.renalArteryLocalizationType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyTypeEnum.RenalArteryStenosis
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyTypeEnum.RenalArteryStenosis
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.statusType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyTypeEnum.FollowUpAfterStenting
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage),
          validateCondition: {
            customConditionFunction: (m: AbdomenFindingUiModel) => !!m.diameterStenosisInMm && !!m.diameterNormalPoststenoticSegmentInMm
          },
          customMessage: 'errors.angiographyCT.nascetCalculation'
        }
      ]
    },
    {
      findingName: AbdomenFindingTypeEnum.RenalVein,
      elements: [
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.sideType)
        },
        {
          modelName: [
            nameof<AbdomenFindingUiModel>(m => m.isAnatomicVariants),
            nameof<AbdomenFindingUiModel>(m => m.isRenalVeinThrombosis)
          ],
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.sideType)
          }
        }
      ]
    },
    {
      findingName: AbdomenFindingTypeEnum.MesentericVessels,
      elements: [
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType)
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.mesentericVesselsLocalizationType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyTypeEnum.Aneurysm
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyTypeEnum.StatusPostLiverTransplantation
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.mesentericVesselsLocalizationType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyTypeEnum.MesentericArteryStenosis
          }
        },
        {
          modelName: [
            nameof<AbdomenFindingUiModel>(m => m.isDuodenum),
            nameof<AbdomenFindingUiModel>(m => m.isJejunum),
            nameof<AbdomenFindingUiModel>(m => m.isIleum),
            nameof<AbdomenFindingUiModel>(m => m.isCecum),
            nameof<AbdomenFindingUiModel>(m => m.isAscendingColon),
            nameof<AbdomenFindingUiModel>(m => m.isRightColonicFlexure),
            nameof<AbdomenFindingUiModel>(m => m.isTransverseColon),
            nameof<AbdomenFindingUiModel>(m => m.isLeftColonicFlexure),
            nameof<AbdomenFindingUiModel>(m => m.isDescendingColon),
            nameof<AbdomenFindingUiModel>(m => m.isSigmoidColon)
          ],
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.isIschemicBowelWall)
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.stenosisSeverityType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.isStenosisOrOcclusion)
          }
        },
        ,
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage),
          validateCondition: {
            customConditionFunction: (m: AbdomenFindingUiModel) => !!m.diameterStenosisInMm && !!m.diameterNormalPoststenoticSegmentInMm
          },
          customMessage: 'errors.angiographyCT.nascetCalculation'
        }
      ]
    },
    {
      findingName: AbdomenFindingTypeEnum.LiverVeins,
      elements: [
        {
          modelName: [
            nameof<AbdomenFindingUiModel>(m => m.isSignsOfPortalHypertension),
            nameof<AbdomenFindingUiModel>(m => m.isPortalVeinThrombosis),
            nameof<AbdomenFindingUiModel>(m => m.isObstructionHepatovenousOutflow),
            nameof<AbdomenFindingUiModel>(m => m.isCollaterals)
          ]
        }
      ]
    }
  ]
};
