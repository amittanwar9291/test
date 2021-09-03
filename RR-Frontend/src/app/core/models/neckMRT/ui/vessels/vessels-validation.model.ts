import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import { VesselsFindingTypeEnum, PathologyTypeEnum } from '@enums/neckMRT/vessels';

export const VesselsValidationModel: IValidationModel = {
  finding: [
    {
      findingName: VesselsFindingTypeEnum.CommonCarotidArtery,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extentType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOcclusion
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisInPercent),
          validateCondition: {
            customConditionFunction: isCalculationIncorrect
          },
          customMessage: 'errors.neckMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.InternalCarotidArtery,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extentType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOcclusion
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisInPercent),
          validateCondition: {
            customConditionFunction: isCalculationIncorrect
          },
          customMessage: 'errors.neckMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.ExternalCarotidArtery,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extentType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOcclusion
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisInPercent),
          validateCondition: {
            customConditionFunction: isCalculationIncorrect
          },
          customMessage: 'errors.neckMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.VertebralArtery,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extentType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOcclusion
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisInPercent),
          validateCondition: {
            customConditionFunction: isCalculationIncorrect
          },
          customMessage: 'errors.neckMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.CircleOfWillisCerebralArteries,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extentType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOcclusion
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.arteriesSegmentType),
          isLocalizer: true
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisInPercent),
          validateCondition: {
            customConditionFunction: isCalculationIncorrect
          },
          customMessage: 'errors.neckMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.BrachiocephalicTrunk,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extentType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOcclusion
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisInPercent),
          validateCondition: {
            customConditionFunction: isCalculationIncorrect
          },
          customMessage: 'errors.neckMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.SubclavianArtery,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extentType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOcclusion
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisInPercent),
          validateCondition: {
            customConditionFunction: isCalculationIncorrect
          },
          customMessage: 'errors.neckMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.AxillaryArtery,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.extentType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOcclusion
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisInPercent),
          validateCondition: {
            customConditionFunction: isCalculationIncorrect
          },
          customMessage: 'errors.neckMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.CerebralVeinsDuralSinuses,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.cerebralVeinsPathologyType)
        },
        {
          modelName: [
            nameof<VesselsFindingUiModel>(m => m.isSuperiorSagittalSinus),
            nameof<VesselsFindingUiModel>(m => m.isInferiorSagittalSinus),
            nameof<VesselsFindingUiModel>(m => m.isVMagnaCerebri),
            nameof<VesselsFindingUiModel>(m => m.isStraightSinus),
            nameof<VesselsFindingUiModel>(m => m.isConfluensOfSinuses),
            nameof<VesselsFindingUiModel>(m => m.isRightTransverseSinus),
            nameof<VesselsFindingUiModel>(m => m.isLeftTransverseSinus),
            nameof<VesselsFindingUiModel>(m => m.isRightSigmoidSinus),
            nameof<VesselsFindingUiModel>(m => m.isLeftSigmoidSinus),
            nameof<VesselsFindingUiModel>(m => m.isRightPetrosalSinus),
            nameof<VesselsFindingUiModel>(m => m.isLeftPetrosalSinus),
            nameof<VesselsFindingUiModel>(m => m.isCavernousSinusRightPart),
            nameof<VesselsFindingUiModel>(m => m.isCavernousSinusLeftPart)
          ]
        }
      ]
    },
    {
      findingName: VesselsFindingTypeEnum.Veins,
      elements: [
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.veinsCharacterizationType)
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.veinsCharacterizationType),
            requiredValue: !PathologyTypeEnum.None
          }
        },
        {
          modelName: nameof<VesselsFindingUiModel>(m => m.veinsPathologyType),
          validateCondition: {
            modelName: nameof<VesselsFindingUiModel>(m => m.veinsCharacterizationType),
            requiredValue: !PathologyTypeEnum.None
          }
        }
      ]
    }
  ]
};

function isCalculationIncorrect(model: VesselsFindingUiModel): boolean {
  if (model.diameterStenosisInMm !== null && model.diameterDiseaseFreePoststenoticSegmentInMm !== null) {
    return model.diameterDiseaseFreePoststenoticSegmentInMm <= model.diameterStenosisInMm;
  }
}
