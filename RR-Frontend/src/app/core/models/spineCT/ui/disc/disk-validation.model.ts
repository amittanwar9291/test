import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { DiscFindingUiModel } from '@models/spineCT';
import { DiscFindingTypeEnum } from '@enums/spineCT/disc/disc-finding-type.enum';
import { BulgingDetailsTypeEnum } from '@enums/spineCT/disc/bulging-details-type.enum';
import { ProtrusionExtrusionDetailsTypeEnum } from '@enums/spineCT/disc/protrusion-extrusion-details-type.enum';
import { compact } from 'lodash';
import { NerveRootAffectionTypeEnum } from '@enums/spineCT/disc/nerve-root-affection-type.enum';
import { StenosisTypeEnum } from '@enums/spineCT/disc/stenosis-type.enum';

export const DiskValidationModel: IValidationModel = {
  finding: [
    {
      findingName: DiscFindingTypeEnum.BulgingDegeneration,
      elements: [
        {
          modelName: nameof<DiscFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<DiscFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.bulgingDetailsType),
            requiredValue: BulgingDetailsTypeEnum.Asymmetric
          }
        },
        {
          modelName: [
            nameof<DiscFindingUiModel>(m => m.isNerveRootAffectionRight),
            nameof<DiscFindingUiModel>(m => m.isNerveRootAffectionLeft)
          ],
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.nerveRootAffectionType)
          }
        },
        {
          modelName: [nameof<DiscFindingUiModel>(m => m.isStenosisRight), nameof<DiscFindingUiModel>(m => m.isStenosisLeft)],
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.stenosisType)
          }
        }
      ]
    },
    {
      findingName: DiscFindingTypeEnum.Protrusion,
      elements: [
        {
          modelName: nameof<DiscFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<DiscFindingUiModel>(m => m.discLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.protrusionExtrusionDetailsType),
            requiredValue: ProtrusionExtrusionDetailsTypeEnum.LocalizationAxial
          }
        },
        {
          modelName: [
            nameof<DiscFindingUiModel>(m => m.isNerveRootAffectionRight),
            nameof<DiscFindingUiModel>(m => m.isNerveRootAffectionLeft)
          ],
          validateCondition: {
            customConditionFunction: (m: DiscFindingUiModel) => {
              return (
                m.protrusionExtrusionDetailsType === ProtrusionExtrusionDetailsTypeEnum.BroadBased &&
                m.nerveRootAffectionType !== NerveRootAffectionTypeEnum.None
              );
            }
          }
        },
        {
          modelName: [nameof<DiscFindingUiModel>(m => m.isStenosisRight), nameof<DiscFindingUiModel>(m => m.isStenosisLeft)],
          validateCondition: {
            customConditionFunction: (m: DiscFindingUiModel) => {
              return (
                m.protrusionExtrusionDetailsType === ProtrusionExtrusionDetailsTypeEnum.BroadBased &&
                m.stenosisType !== StenosisTypeEnum.None
              );
            }
          }
        },
        {
          modelName: [
            nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathyRight),
            nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathyLeft)
          ],
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathy)
          }
        },
        {
          modelName: [nameof<DiscFindingUiModel>(m => m.isSynovialCystRight), nameof<DiscFindingUiModel>(m => m.isSynovialCystLeft)],
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.isSynovialCyst)
          }
        }
      ]
    },
    {
      findingName: DiscFindingTypeEnum.Extrusion,
      elements: [
        {
          modelName: nameof<DiscFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<DiscFindingUiModel>(m => m.discLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.protrusionExtrusionDetailsType),
            requiredValue: ProtrusionExtrusionDetailsTypeEnum.LocalizationAxial
          }
        },
        {
          modelName: [
            nameof<DiscFindingUiModel>(m => m.isNerveRootAffectionRight),
            nameof<DiscFindingUiModel>(m => m.isNerveRootAffectionLeft)
          ],
          validateCondition: {
            customConditionFunction: (m: DiscFindingUiModel) => {
              return (
                m.protrusionExtrusionDetailsType === ProtrusionExtrusionDetailsTypeEnum.BroadBased &&
                m.nerveRootAffectionType !== NerveRootAffectionTypeEnum.None
              );
            }
          }
        },
        {
          modelName: [nameof<DiscFindingUiModel>(m => m.isStenosisRight), nameof<DiscFindingUiModel>(m => m.isStenosisLeft)],
          validateCondition: {
            customConditionFunction: (m: DiscFindingUiModel) => {
              return (
                m.protrusionExtrusionDetailsType === ProtrusionExtrusionDetailsTypeEnum.BroadBased &&
                m.stenosisType !== StenosisTypeEnum.None
              );
            }
          }
        },
        {
          modelName: [
            nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathyRight),
            nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathyLeft)
          ],
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathy)
          }
        },
        {
          modelName: [nameof<DiscFindingUiModel>(m => m.isSynovialCystRight), nameof<DiscFindingUiModel>(m => m.isSynovialCystLeft)],
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.isSynovialCyst)
          }
        }
      ]
    },
    {
      findingName: DiscFindingTypeEnum.Migration,
      elements: [
        {
          modelName: nameof<DiscFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: [
            nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathyRight),
            nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathyLeft)
          ],
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathy)
          }
        },
        {
          modelName: [nameof<DiscFindingUiModel>(m => m.isSynovialCystRight), nameof<DiscFindingUiModel>(m => m.isSynovialCystLeft)],
          validateCondition: {
            modelName: nameof<DiscFindingUiModel>(m => m.isSynovialCyst)
          }
        }
      ]
    },
    {
      findingName: DiscFindingTypeEnum.FacetJoints,
      elements: [
        {
          modelName: nameof<DiscFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: [
            nameof<DiscFindingUiModel>(m => m.isOsteoarthritis),
            nameof<DiscFindingUiModel>(m => m.isUncovertebralArthrosis),
            nameof<DiscFindingUiModel>(m => m.isSpondylolysis),
            nameof<DiscFindingUiModel>(m => m.isLuxation)
          ]
        },
        {
          modelName: [
            nameof<DiscFindingUiModel>(m => m.isFacetJointArthrosisRight),
            nameof<DiscFindingUiModel>(m => m.isFacetJointArthrosisLeft)
          ],
          validateCondition: {
            customConditionFunction: (m: DiscFindingUiModel) => {
              const isSingleSelectOnLocalizer = compact(Object.values(m.spineLocation)).length === 3;
              return isSingleSelectOnLocalizer && m.isOsteoarthritis;
            }
          }
        },
        {
          modelName: [nameof<DiscFindingUiModel>(m => m.isSpondylolysisRight), nameof<DiscFindingUiModel>(m => m.isSpondylolysisLeft)],
          validateCondition: {
            customConditionFunction: (m: DiscFindingUiModel) => {
              const isSingleSelectOnLocalizer = compact(Object.values(m.spineLocation)).length === 3;
              return isSingleSelectOnLocalizer && m.isSpondylolysis;
            }
          }
        },
        {
          modelName: [nameof<DiscFindingUiModel>(m => m.isLuxationRight), nameof<DiscFindingUiModel>(m => m.isLuxationLeft)],
          validateCondition: {
            customConditionFunction: (m: DiscFindingUiModel) => {
              const isSingleSelectOnLocalizer = compact(Object.values(m.spineLocation)).length === 3;
              return isSingleSelectOnLocalizer && m.isLuxation;
            }
          }
        }
      ]
    },
    {
      findingName: DiscFindingTypeEnum.Spondylodiscitis,
      elements: [
        {
          modelName: nameof<DiscFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: DiscFindingTypeEnum.Trauma,
      elements: [
        {
          modelName: nameof<DiscFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: DiscFindingTypeEnum.RheumatoidDiseases,
      elements: [
        {
          modelName: nameof<DiscFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        }
      ]
    }
  ]
};
