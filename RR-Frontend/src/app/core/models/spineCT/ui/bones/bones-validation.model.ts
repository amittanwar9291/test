import { BonesFindingTypeEnum } from '@enums/spineCT/bones/bones-finding-type.enum';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { BonesFindingUiModel } from '@models/spineCT';
import { nameof } from 'ts-simple-nameof';
import { GehweilerTypeEnum } from '@enums/spineCT/bones/fracture/c1/gehweiler-type.enum';
import { C2FractureLocalizationTypeEnum } from '@enums/spineCT/bones/fracture/c2/c2-fracture-localization-type.enum';
import { FractureTypeEnum } from '@enums/spineCT/bones/fracture/fracture-type.enum';
import { InterventionTypeEnum } from '@enums/spineCT/bones/posttherapeutic-change/intervention-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BonesFindingTypeEnum.Fracture,
      elements: [
        {
          modelName: [nameof<BonesFindingUiModel>(m => m.fractureType)],
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel) => {
              return (
                !model.spineLocation.c0 &&
                !model.spineLocation.c1 &&
                !model.spineLocation.c2 &&
                !model.spineLocation.osSacrum &&
                !model.spineLocation.osCoccygis
              );
            }
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isFractureOccipitalCondyleSideRight),
            nameof<BonesFindingUiModel>(m => m.isFractureOccipitalCondyleSideLeft)
          ],
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel) => {
              return model.spineLocation.c0;
            }
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureStabilityRight),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isFractureOccipitalCondyleSideRight)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureStabilityLeft),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isFractureOccipitalCondyleSideLeft)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.gehweilerType),
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel) => {
              return model.spineLocation.c1;
            }
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel) => {
              return model.spineLocation.c1 && model.gehweilerType === GehweilerTypeEnum.Type5;
            }
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.c2FractureLocalizationType),
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel) => {
              return model.spineLocation.c2;
            }
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.c2FractureDetailsType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.c2FractureLocalizationType),
            requiredValue: C2FractureLocalizationTypeEnum.C2
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.c1ToC2FractureType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.c2FractureLocalizationType),
            requiredValue: C2FractureLocalizationTypeEnum.C1ToC2
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.a0ClassificationType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.fractureType),
            requiredValue: FractureTypeEnum.A0Classification
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.genantClassificationGradeType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.fractureType),
            requiredValue: FractureTypeEnum.GenantClassification
          }
        },
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isAnteriorColumn),
            nameof<BonesFindingUiModel>(m => m.isMiddleColumn),
            nameof<BonesFindingUiModel>(m => m.isPosteriorColumn)
          ],
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.fractureType),
            requiredValue: FractureTypeEnum.DenisThreeColumnModel
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.PosttherapeuticChange,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spondylodesisSpineLocations),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.interventionType),
            requiredValue: InterventionTypeEnum.Spondylodesis
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.interventionSpineLocations),
          isLocalizer: true,
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel) => {
              return (
                model.interventionType !== InterventionTypeEnum.None &&
                model.interventionType !== InterventionTypeEnum.Spondylodesis &&
                model.interventionType !== InterventionTypeEnum.IntervertebralDiscReplacement
              );
            }
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.intervertebralDiscReplacementSpineLocations),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.interventionType),
            requiredValue: InterventionTypeEnum.IntervertebralDiscReplacement
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.PathologyOfTheVertebralArch,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.vertebraSpineLocations),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.locationSideType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.localizationVertebralArchType)
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.MassSpine,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.vertebralBodyLocalizations),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.expansionMaxDiameterInMm)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.massSpineDD1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
