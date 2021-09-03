import { AcuteAortalSyndromeAasTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/acute-aortal-syndrome-aas-type.enum';
import { AortaFindingTypeEnum } from '@enums/angiographyCT/aorta/aorta-finding-type.enum';
import { AnomaliesTypeEnum } from '@enums/angiographyCT/aorta/aortic-abnormalities/anomalies-type.enum';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { AortaFindingUiModel } from './aorta-finding-ui.model';

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
      findingName: AortaFindingTypeEnum.DilatationAorta,
      elements: [
        { modelName: nameof<AortaFindingUiModel>(m => m.aortaLocations1), isLocalizer: true },
        { modelName: nameof<AortaFindingUiModel>(m => m.maxAxialDiameterInMm) }
      ]
    },
    {
      findingName: AortaFindingTypeEnum.ArterioscleroticChanges,
      elements: [
        { modelName: nameof<AortaFindingUiModel>(m => m.aortaLocations1), isLocalizer: true },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.severityType),
          validateCondition: { modelName: nameof<AortaFindingUiModel>(m => m.isStenosis) }
        },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.degreeOfStenosisNASCETInPercent),
          validateCondition: {
            customConditionFunction: (m: AortaFindingUiModel) => !!m.maxDiameterInMm && !!m.diameterNormalPoststenoticSegmentInMm
          },
          customMessage: 'errors.angiographyCT.nascetCalculation'
        }
      ]
    },
    {
      findingName: AortaFindingTypeEnum.AcuteAortalSyndromeAas,
      elements: [
        { modelName: nameof<AortaFindingUiModel>(m => m.acuteAortalSyndromeAasType) },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.aortaLocations1),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<AortaFindingUiModel>(m => m.acuteAortalSyndromeAasType)
          }
        },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.aortaLocations2),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<AortaFindingUiModel>(m => m.acuteAortalSyndromeAasType),
            requiredValue: AcuteAortalSyndromeAasTypeEnum.AorticDissection
          }
        },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.localizationOfTheMeasurementType),
          validateCondition: {
            modelName: nameof<AortaFindingUiModel>(m => m.maxDiameterAortaInMm)
          }
        },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.craniocaudalLengthInMm),
          validateCondition: {
            modelName: nameof<AortaFindingUiModel>(m => m.acuteAortalSyndromeAasType)
          }
        }
      ]
    },
    {
      findingName: AortaFindingTypeEnum.Aortitis,
      elements: [
        { modelName: nameof<AortaFindingUiModel>(m => m.aortaLocations1), isLocalizer: true },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.severityType),
          validateCondition: { modelName: nameof<AortaFindingUiModel>(m => m.isStenosisOcclusion) }
        },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.aortitisNASCETInPercent),
          validateCondition: {
            customConditionFunction: (m: AortaFindingUiModel) =>
              !!m.aortitisDiameterStenosisInMm && !!m.aortitisDiameterNormalPoststenoticSegmentInMm
          },
          customMessage: 'errors.angiographyCT.nascetCalculation'
        },
        {
          modelName: nameof<AortaFindingUiModel>(m => m.aortitisMaxAxialDiameterInMm),
          validateCondition: { modelName: nameof<AortaFindingUiModel>(m => m.isVascularDilatation) }
        }
      ]
    },
    {
      findingName: AortaFindingTypeEnum.PreoperativeMeasurements,
      elements: [
        { modelName: nameof<AortaFindingUiModel>(m => m.maxDiameterInMm) },
        { modelName: nameof<AortaFindingUiModel>(m => m.distanceCoronaryOstiaValvePlaneInMm) }
      ]
    }
  ]
};
