import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { AnatomicVariantsOrPathologyType, SideType } from '@enums/angiographyMRT/abdomen/common';
import { FindingType } from '@enums/angiographyMRT/abdomen/finding-type.enum';

export const AbdomenValidationModel: IValidationModel = {
  finding: [
    {
      findingName: FindingType.RenalArtery,
      elements: [
        { modelName: nameof<AbdomenFindingUiModel>(m => m.sideType) },
        { modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType) },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.detailsType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyType.AnatomicVariantsArtery
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.detailsType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyType.AnatomicVariantsKidney
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.renalArteryLocalizationType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyType.RenalArteryStenosis
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyType.RenalArteryStenosis
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.statusType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyType.FollowUpAfterStenting
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage),
          validateCondition: {
            customConditionFunction: (m: AbdomenFindingUiModel) => !!m.diameterStenosisInMm && !!m.diameterNormalPoststenoticSegmentInMm
          },
          customMessage: 'errors.angiographyMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: FindingType.RenalVein,
      elements: [
        { modelName: nameof<AbdomenFindingUiModel>(m => m.sideType) },
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
      findingName: FindingType.MesentericVessels,
      elements: [
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType)
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.mesentericVesselsLocalizationType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyType.MesentericArteryStenosis
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.isStenosisOrOcclusion)
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.mesentericVesselsLocalizationType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyType.Aneurysm
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType),
            requiredValue: AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation
          }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage),
          validateCondition: {
            customConditionFunction: (m: AbdomenFindingUiModel) => !!m.diameterStenosisInMm && !!m.diameterNormalPoststenoticSegmentInMm
          },
          customMessage: 'errors.angiographyMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: FindingType.LiverVeins,
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
