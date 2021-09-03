import { nameof } from 'ts-simple-nameof';
import { SupraaorticVesselsFindingUi } from '@models/angiographyMRT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SupraaorticVesselsFindingTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/supraaortic-vessels-finding-type.enum';
import { PathologyTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/pathology-type.enum';

export const SupraaorticVesselsValidationModel: IValidationModel = {
  finding: [
    {
      findingName: SupraaorticVesselsFindingTypeEnum.AnatomicVariants,
      elements: [
        {
          modelName: [
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightP1HypoplasiaOrFTPConfiguration),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightP1Aplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightP1FenestrationOrDuplication),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightA1Hypoplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightA1Aplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightA1FenestrationOrDuplication),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightPcomAHypoplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightPcomAAplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightPICATerminationVA),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightVAHypoplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightVAAplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightTriplicatedACA),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightAcomAAplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightAcomAFenestrationOrDuplication),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftP1HypoplasiaOrFTPConfiguration),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftP1Aplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftP1FenestrationOrDuplication),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftA1Hypoplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftA1Aplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftA1FenestrationOrDuplication),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftPcomAHypoplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftPcomAAplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftPICATerminationVA),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftVAHypoplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftVAAplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftTriplicatedACA),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftAcomAAplasia),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftAcomAFenestrationOrDuplication)
          ]
        }
      ]
    },
    {
      findingName: SupraaorticVesselsFindingTypeEnum.CommonCarotidArtery,
      elements: [
        { modelName: nameof<SupraaorticVesselsFindingUi>(m => m.sideType) },
        { modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType) },
        {
          modelName: nameof<SupraaorticVesselsFindingUi>(m => m.severityType),
          validateCondition: {
            modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        }
      ]
    },
    {
      findingName: SupraaorticVesselsFindingTypeEnum.InternalCarotidArtery,
      elements: [
        { modelName: nameof<SupraaorticVesselsFindingUi>(m => m.sideType) },
        { modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType) },
        {
          modelName: nameof<SupraaorticVesselsFindingUi>(m => m.severityType),
          validateCondition: {
            modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        }
      ]
    },
    {
      findingName: SupraaorticVesselsFindingTypeEnum.ExternalCarotidArtery,
      elements: [
        { modelName: nameof<SupraaorticVesselsFindingUi>(m => m.sideType) },
        { modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType) },
        {
          modelName: nameof<SupraaorticVesselsFindingUi>(m => m.severityType),
          validateCondition: {
            modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        }
      ]
    },
    {
      findingName: SupraaorticVesselsFindingTypeEnum.VertebralArtery,
      elements: [
        { modelName: nameof<SupraaorticVesselsFindingUi>(m => m.sideType) },
        { modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType) },
        {
          modelName: nameof<SupraaorticVesselsFindingUi>(m => m.severityType),
          validateCondition: {
            modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        }
      ]
    },
    {
      findingName: SupraaorticVesselsFindingTypeEnum.CircleOfWillisCerebralArteries,
      elements: [
        { modelName: nameof<SupraaorticVesselsFindingUi>(m => m.affectedSegmentsOrVesselsLocation), isLocalizer: true },
        { modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType) },
        {
          modelName: nameof<SupraaorticVesselsFindingUi>(m => m.severityType),
          validateCondition: {
            modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.StenosisOrOcclusion
          }
        }
      ]
    },
    {
      findingName: SupraaorticVesselsFindingTypeEnum.CerebralVeinsOrVenousSinuses,
      elements: [
        {
          modelName: nameof<SupraaorticVesselsFindingUi>(m => m.pathologyType)
        },
        {
          modelName: [
            nameof<SupraaorticVesselsFindingUi>(m => m.isSuperiorSagittalSinus),
            nameof<SupraaorticVesselsFindingUi>(m => m.isInferiorSagittalSinus),
            nameof<SupraaorticVesselsFindingUi>(m => m.isGreatCerebralVein),
            nameof<SupraaorticVesselsFindingUi>(m => m.isStraightSinus),
            nameof<SupraaorticVesselsFindingUi>(m => m.isConfluenceOfSinuses),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightTransverseSinus),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftTransverseSinus),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightSigmoidSinus),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftSigmoidSinus),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightPetrosalSinus),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftPetrosalSinus),
            nameof<SupraaorticVesselsFindingUi>(m => m.isRightCavernousSinus),
            nameof<SupraaorticVesselsFindingUi>(m => m.isLeftCavernousSinus)
          ]
        }
      ]
    }
  ]
};
