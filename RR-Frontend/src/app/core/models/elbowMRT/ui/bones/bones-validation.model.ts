import { AoClassificationTypeEnum, BonesClassificationTypeEnum, BonesFindingTypeEnum, FractureTypeEnum } from '@enums/elbowMRT/bones';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';

export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BonesFindingTypeEnum.StandardVariantOrMalformation,
      elements: [
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isSupracondylarProcess),
            nameof<BonesFindingUiModel>(m => m.isSupratrochlearFormen),
            nameof<BonesFindingUiModel>(m => m.isRadioulnarSynostosis)
          ]
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Fracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.classificationType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.fractureType),
            requiredValue: FractureTypeEnum.RadialHead
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.graduationType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.classificationType),
            requiredValue: BonesClassificationTypeEnum.ModifiedAccordingToMason
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.aoClassificationType),
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel): boolean => {
              return (
                [
                  FractureTypeEnum.DiaphysealUlna,
                  FractureTypeEnum.DiaphysealRadius,
                  FractureTypeEnum.DistalHumerus,
                  FractureTypeEnum.ProximalUlna
                ].includes(model.fractureType) || model.classificationType === BonesClassificationTypeEnum.AO
              );
            }
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.localizationLongitudinalType),
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel): boolean => {
              return [
                AoClassificationTypeEnum.SimpleFracture,
                AoClassificationTypeEnum.WedgeFracture,
                AoClassificationTypeEnum.MultifragmentaryFracture
              ].includes(model.aoClassificationType);
            }
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.BoneMarrowEdema,
      elements: [
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isHumerusLateralEpicondyle),
            nameof<BonesFindingUiModel>(m => m.isHumerusMedialEpicondyle),
            nameof<BonesFindingUiModel>(m => m.isRadialHead),
            nameof<BonesFindingUiModel>(m => m.isUlnaProximal),
            nameof<BonesFindingUiModel>(m => m.isOlecranon)
          ]
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Mass,
      elements: [
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isHumerusLateralEpicondyle),
            nameof<BonesFindingUiModel>(m => m.isHumerusMedialEpicondyle),
            nameof<BonesFindingUiModel>(m => m.isHumerusDistal),
            nameof<BonesFindingUiModel>(m => m.isRadiusProximal),
            nameof<BonesFindingUiModel>(m => m.isUlnaProximal)
          ]
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.extensionSizeInMm)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.limitationType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.corticalisType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
