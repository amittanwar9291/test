import { nameof } from 'ts-simple-nameof';
import { AortaFindingUiModel } from '@models/angiographyMRT/ui/aorta/aorta-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { AortaFindingTypeEnum } from '@enums/angiographyMRT/aorta/aorta-finding-type.enum';
import { AnomaliesTypeEnum } from '@enums/angiographyMRT/aorta/anomalies-type.enum';
import { PathologyTypeEnum } from '@enums/angiographyMRT/aorta/pathology-type.enum';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';

export const AortaValidationModel: IValidationModel = {
  finding: [
    {
      findingName: AortaFindingTypeEnum.AorticAbnormalities,
      elements: [
        { modelName: nameof<AortaFindingUiModel>(m => m.anomaliesType) },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.detailsCongenitalVascularRingsType),
          validateCondition: {
            modelName: nameof<AortaFindingUiModel>(m => m.anomaliesType),
            requiredValue: AnomaliesTypeEnum.CongenitalVascularRings
          }
        }
      ]
    },
    {
      findingName: AortaFindingTypeEnum.AorticAneurysm,
      elements: [
        { modelName: nameof<AortaFindingUiModel>(m => m.aortaLocation), isLocalizer: true },
        { modelName: nameof<AortaFindingUiModel>(m => m.maxAxialDiameterInMm) }
      ]
    },
    {
      findingName: AortaFindingTypeEnum.ArterioscleroticChanges,
      elements: [
        { modelName: nameof<AortaFindingUiModel>(m => m.aortaLocation), isLocalizer: true },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.severityType),
          validateCondition: { modelName: nameof<AortaFindingUiModel>(m => m.isStenosis) }
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
      findingName: AortaFindingTypeEnum.AcuteAortalSyndrome,
      elements: [
        { modelName: nameof<AortaFindingUiModel>(m => m.aortaLocation), isLocalizer: true },
        { modelName: nameof<AortaFindingUiModel>(m => m.pathologyType) },

        {
          modelName: nameof<AortaFindingUiModel>(m => m.aortaLocationReentry),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<AortaFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.AorticDissection
          }
        },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.lengthInMm),
          validateCondition: { customConditionFunction: customPatologyValue }
        },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.craniocaudalLengthInMm),
          validateCondition: {
            modelName: nameof<AortaFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.PenetratingArterioscleroticAorticUlcerPAU
          }
        }
      ]
    },
    {
      findingName: AortaFindingTypeEnum.Aortitis,
      elements: [
        { modelName: nameof<AortaFindingUiModel>(m => m.aortaLocation), isLocalizer: true },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.severityType),
          validateCondition: { modelName: nameof<AortaFindingUiModel>(m => m.isStenosis) }
        },
        {
          modelName: nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage),
          validateCondition: {
            customConditionFunction: (m: AbdomenFindingUiModel) => !!m.diameterStenosisInMm && !!m.diameterNormalPoststenoticSegmentInMm
          },
          customMessage: 'errors.angiographyMRT.nascetCalculation'
        }
      ]
    }
  ]
};

function customPatologyValue(model: AortaFindingUiModel): boolean {
  return [PathologyTypeEnum.AorticDissection, PathologyTypeEnum.IntramuralAorticHematomaIMH].includes(model.pathologyType);
}
function customDistanceBetweenRenalArteriesCondition(model: AortaFindingUiModel): boolean {
  return model.aortaLocation.infrarenalAorta;
}
