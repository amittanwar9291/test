import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';

import { SupraaorticVesselsFindingUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { SupraaorticVesselsUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-ui.model';
import { SupraaorticVesselsFindingTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/supraaortic-vessels-finding-type.enum';
import { PathologyTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/pathology-type.enum';

export const SupraaorticVesselsValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<SupraaorticVesselsUiModel>(m => m.findings),
      findingTypeModelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.findingType),
      finding: [
        {
          findingName: SupraaorticVesselsFindingTypeEnum.AnatomicVariants,
          elements: [
            {
              modelName: [
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightP1HypoplasiaOrFTPConfiguration),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightP1Aplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightP1SplittingOrDuplication),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightA1Hypoplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightA1Aplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightA1SplittingOrDuplication),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAcomPHypoplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAcomPAplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightPICAEndingAV),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAVHypoplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAVAplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightTripleACA),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAcomAHypoplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAcomAAplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAcomASplittingOrDuplication),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftP1HypoplasiaOrFTPConfiguration),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftP1Aplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftP1SplittingOrDuplication),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftA1Hypoplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftA1Aplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftA1SplittingOrDuplication),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAcomPHypoplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAcomPAplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftPICAEndingAV),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAVHypoplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAVAplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftTripleACA),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAcomAHypoplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAcomAAplasia),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAcomASplittingOrDuplication)
              ]
            }
          ]
        },
        {
          findingName: SupraaorticVesselsFindingTypeEnum.CommonCarotidArtery,
          elements: [
            { modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.sideType) },
            { modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType) },
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.severityType),
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType),
                requiredValue: PathologyTypeEnum.StenosisOrOcclusion
              }
            },
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.degreeOfStenosisCalculatedInNASCET),
              validateCondition: {
                customConditionFunction: (m: SupraaorticVesselsFindingUiModel) =>
                  !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
              },
              customMessage: 'errors.angiographyCT.nascetCalculation'
            }
          ]
        },
        {
          findingName: SupraaorticVesselsFindingTypeEnum.InternalCarotidArtery,
          elements: [
            { modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.sideType) },
            { modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType) },
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.severityType),
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType),
                requiredValue: PathologyTypeEnum.StenosisOrOcclusion
              }
            },
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.degreeOfStenosisCalculatedInNASCET),
              validateCondition: {
                customConditionFunction: (m: SupraaorticVesselsFindingUiModel) =>
                  !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
              },
              customMessage: 'errors.angiographyCT.nascetCalculation'
            }
          ]
        },
        {
          findingName: SupraaorticVesselsFindingTypeEnum.ExternalCarotidArtery,
          elements: [
            { modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.sideType) },
            { modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType) },
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.severityType),
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType),
                requiredValue: PathologyTypeEnum.StenosisOrOcclusion
              }
            },
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.degreeOfStenosisCalculatedInNASCET),
              validateCondition: {
                customConditionFunction: (m: SupraaorticVesselsFindingUiModel) =>
                  !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
              },
              customMessage: 'errors.angiographyCT.nascetCalculation'
            }
          ]
        },
        {
          findingName: SupraaorticVesselsFindingTypeEnum.VertebralArtery,
          elements: [
            { modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.sideType) },
            { modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType) },
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.severityType),
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType),
                requiredValue: PathologyTypeEnum.StenosisOrOcclusion
              }
            },
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.degreeOfStenosisCalculatedInNASCET),
              validateCondition: {
                customConditionFunction: (m: SupraaorticVesselsFindingUiModel) =>
                  !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
              },
              customMessage: 'errors.angiographyCT.nascetCalculation'
            }
          ]
        },
        {
          findingName: SupraaorticVesselsFindingTypeEnum.CircleOfWillisCerebralArteries,
          elements: [
            { modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.affectedSegmentsOrVesselsLocation), isLocalizer: true },
            { modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType) },
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.severityType),
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType),
                requiredValue: PathologyTypeEnum.StenosisOrOcclusion
              }
            },
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.degreeOfStenosisCalculatedInNASCET),
              validateCondition: {
                customConditionFunction: (m: SupraaorticVesselsFindingUiModel) =>
                  !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
              },
              customMessage: 'errors.angiographyCT.nascetCalculation'
            }
          ]
        },
        {
          findingName: SupraaorticVesselsFindingTypeEnum.CerebralVeinsOrVenousSinuses,
          elements: [
            {
              modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.pathologyType)
            },
            {
              modelName: [
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isSuperiorSagittalSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isInferiorSagittalSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isGreatCerebralVein),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isStraightSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isConfluenceOfSinuses),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isTransverseSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isSigmoidSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isSuperiorPetrosalSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isInferiorPetrosalSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isInternalJugularVein),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isCavernousSinus)
              ]
            },
            {
              modelName: [
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightTransverseSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftTransverseSinus)
              ],
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.isTransverseSinus)
              }
            },
            {
              modelName: [
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightSigmoidSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftSigmoidSinus)
              ],
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.isSigmoidSinus)
              }
            },
            {
              modelName: [
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightSuperiorPetrosalSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftSuperiorPetrosalSinus)
              ],
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.isSuperiorPetrosalSinus)
              }
            },
            {
              modelName: [
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightInferiorPetrosalSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftInferiorPetrosalSinus)
              ],
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.isInferiorPetrosalSinus)
              }
            },
            {
              modelName: [
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightInternalJugularVein),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftInternalJugularVein)
              ],
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.isInternalJugularVein)
              }
            },
            {
              modelName: [
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightCavernousSinus),
                nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftCavernousSinus)
              ],
              validateCondition: {
                modelName: nameof<SupraaorticVesselsFindingUiModel>(m => m.isCavernousSinus)
              }
            }
          ]
        }
      ]
    }
  ]
};
