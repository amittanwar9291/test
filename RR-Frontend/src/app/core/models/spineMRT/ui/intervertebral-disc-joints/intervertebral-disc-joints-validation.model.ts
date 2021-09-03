import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import {
  BulgingTypesEnum,
  FindingDetailTypesEnum,
  IntervertebralDiscJointsFindingTypesEnum,
  NerveRootAffectionTypesEnum,
  StenosisTypesEnum
} from '@enums/spineMRT/intervertebral-disc-joints';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';

export const IntervertebralDiscJointsValidationModel: IValidationModel = {
  finding: [
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.AnnularFissure,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.Degeneration,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.bulgingType),
            requiredValue: BulgingTypesEnum.Asymetric
          }
        }
      ]
    },
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.Protrusion,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosisLocalizationRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosisLocalizationLeft)
          ],
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosis)
          }
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystLeft)
          ],
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCyst)
          }
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isNerveRootRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isNerveRootLeft)
          ],
          validateCondition: {
            customConditionFunction: (model: IntervertebralDiscJointsFindingUiModel) => {
              return (
                model.nerveRootAffectionType !== NerveRootAffectionTypesEnum.None &&
                model.findingDetailType === FindingDetailTypesEnum.BroadBase
              );
            }
          }
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isStenosisRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isStenosisLeft)
          ],
          validateCondition: {
            customConditionFunction: (model: IntervertebralDiscJointsFindingUiModel) => {
              return model.stenosisType !== StenosisTypesEnum.None && model.findingDetailType === FindingDetailTypesEnum.BroadBase;
            }
          }
        },
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.discLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.findingDetailType),
            requiredValue: FindingDetailTypesEnum.Localization
          }
        }
      ]
    },
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.Extrusion,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosisLocalizationRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosisLocalizationLeft)
          ],
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosis)
          }
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystLeft)
          ],
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCyst)
          }
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isNerveRootRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isNerveRootLeft)
          ],
          validateCondition: {
            customConditionFunction: (model: IntervertebralDiscJointsFindingUiModel) => {
              return (
                model.nerveRootAffectionType !== NerveRootAffectionTypesEnum.None &&
                model.findingDetailType === FindingDetailTypesEnum.BroadBase
              );
            }
          }
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isStenosisRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isStenosisLeft)
          ],
          validateCondition: {
            customConditionFunction: (model: IntervertebralDiscJointsFindingUiModel) => {
              return model.stenosisType !== StenosisTypesEnum.None && model.findingDetailType === FindingDetailTypesEnum.BroadBase;
            }
          }
        },
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.discLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.findingDetailType),
            requiredValue: FindingDetailTypesEnum.Localization
          }
        }
      ]
    },
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.Migration,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosisLocalizationRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosisLocalizationLeft)
          ],
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosis)
          }
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystLeft)
          ],
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCyst)
          }
        }
      ]
    },
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.Sequestration,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosisLocalizationRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosisLocalizationLeft)
          ],
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isAccompanyingFacetJointArthrosis)
          }
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystLeft)
          ],
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCyst)
          }
        }
      ]
    },
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.FacetJointArthrosis,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isFacetJointArthrosisLocalizationRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isFacetJointArthrosisLocalizationLeft)
          ],
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
            customConditionFunction: (m: IntervertebralDiscJointsFindingUiModel) => {
              const s = [];
              Object.values(m.spineLocation).forEach(v => {
                if (v) {
                  s.push(v);
                }
              });
              return s.length === 3;
            }
          }
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystRight),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCystLeft)
          ],
          validateCondition: {
            modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isSynovialCyst)
          }
        }
      ]
    },
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.ErosiveIntervertebralOsteochondrosis,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.InflammatoryOrSpondylodiscitis,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineAxialLocation),
          isLocalizer: true
          // requiredValue: (m: IntervertebralDiscJointsFindingUiModel) => m.spineAxialLocation.length !== 0
        }
      ]
    },
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.Trauma,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: [
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isRuptureOfPosteriorLongitudinalLigament),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isRuptureOfAnteriorLongitudinalLigament),
            nameof<IntervertebralDiscJointsFindingUiModel>(m => m.isRuptureOfDiscusIntervertebralis)
          ]
        }
      ]
    },
    {
      findingName: IntervertebralDiscJointsFindingTypesEnum.RheumatoidArthritis,
      elements: [
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<IntervertebralDiscJointsFindingUiModel>(m => m.pathologyType)
        }
      ]
    }
  ]
};
