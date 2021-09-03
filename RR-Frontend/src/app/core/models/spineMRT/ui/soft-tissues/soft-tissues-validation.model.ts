import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissueFindingTypeEnum, VesselsUretersTypeEnum } from '@enums/spineMRT/soft-tissues';
import { SpineDirectionalLocationMapper } from '@mappings/spineMRT/shared/spine-directional-location/spine-directional-location.mapper';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

export const SoftTissuesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: SoftTissueFindingTypeEnum.ParaspinalMass,
      elements: [
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.spineLocation1),
          isLocalizer: true
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.spineAxialLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        }
      ]
    },
    {
      findingName: SoftTissueFindingTypeEnum.IntraduralExtramedullaryMass,
      elements: [
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.spineLocationDisks1),
          isLocalizer: true,
          requiredValue: (model: SoftTissuesFindingUiModel) => {
            const mapper = new SpineDirectionalLocationMapper();
            return mapper.mapToString(model.spineLocationDisks1) !== 'None';
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        }
      ]
    },
    {
      findingName: SoftTissueFindingTypeEnum.LymphNodes,
      elements: [
        {
          modelName: [
            nameof<SoftTissuesFindingUiModel>(m => m.isCervical),
            nameof<SoftTissuesFindingUiModel>(m => m.isParaaortal),
            nameof<SoftTissuesFindingUiModel>(m => m.isAortocaval),
            nameof<SoftTissuesFindingUiModel>(m => m.isParailiacal),
            nameof<SoftTissuesFindingUiModel>(m => m.isPreSacral)
          ]
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.characterizationType)
        },
        {
          modelName: [nameof<SoftTissuesFindingUiModel>(m => m.isCervicalLeft), nameof<SoftTissuesFindingUiModel>(m => m.isCervicalRight)],
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isCervical)
          }
        },
        {
          modelName: [
            nameof<SoftTissuesFindingUiModel>(m => m.isParailiacalLeft),
            nameof<SoftTissuesFindingUiModel>(m => m.isParailiacalRight)
          ],
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isParailiacal)
          }
        },
        {
          modelName: [
            nameof<SoftTissuesFindingUiModel>(m => m.isPreSacralLeft),
            nameof<SoftTissuesFindingUiModel>(m => m.isPreSacralRight)
          ],
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isPreSacral)
          }
        }
      ]
    },
    {
      findingName: SoftTissueFindingTypeEnum.VesselsUreter,
      elements: [
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.vesselsUretersType)
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.vesselsSide),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.vesselsUretersType),
            customConditionFunction: (model: SoftTissuesFindingUiModel) => {
              return [
                VesselsUretersTypeEnum.VertebralArtery,
                VesselsUretersTypeEnum.CommonIliacArtery,
                VesselsUretersTypeEnum.ExternIliacArtery
              ].includes(model.vesselsUretersType);
            }
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.arteriopathyType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.vesselsUretersType),
            customConditionFunction: (model: SoftTissuesFindingUiModel) => {
              return [
                VesselsUretersTypeEnum.VertebralArtery,
                VesselsUretersTypeEnum.AortaThoracica,
                VesselsUretersTypeEnum.AortaAbdominalis,
                VesselsUretersTypeEnum.CommonIliacArtery,
                VesselsUretersTypeEnum.ExternIliacArtery
              ].includes(model.vesselsUretersType);
            }
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.pathologyType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.vesselsUretersType),
            customConditionFunction: (model: SoftTissuesFindingUiModel) => {
              return [VesselsUretersTypeEnum.VenaCava, VesselsUretersTypeEnum.Ureter].includes(model.vesselsUretersType);
            }
          }
        },
        {
          modelName: [nameof<SoftTissuesFindingUiModel>(m => m.isUreterLeft), nameof<SoftTissuesFindingUiModel>(m => m.isUreterRight)],
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.vesselsUretersType),
            requiredValue: VesselsUretersTypeEnum.Ureter
          }
        }
      ]
    },
    {
      findingName: SoftTissueFindingTypeEnum.ParavertebralMuscles,
      elements: [
        {
          modelName: [
            nameof<SoftTissuesFindingUiModel>(m => m.isMuscleLesion),
            nameof<SoftTissuesFindingUiModel>(m => m.isHematoma),
            nameof<SoftTissuesFindingUiModel>(m => m.isFattyDegeneration),
            nameof<SoftTissuesFindingUiModel>(m => m.isMuscleHypertrophy),
            nameof<SoftTissuesFindingUiModel>(m => m.isMuscleAtrophy),
            nameof<SoftTissuesFindingUiModel>(m => m.isApophysitis),
            nameof<SoftTissuesFindingUiModel>(m => m.isFascialRupture)
          ]
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.classificationMunichConsensusType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isMuscleLesion)
          }
        },
        {
          modelName: [
            nameof<SoftTissuesFindingUiModel>(m => m.isIntramuscularly),
            nameof<SoftTissuesFindingUiModel>(m => m.isInterfascial),
            nameof<SoftTissuesFindingUiModel>(m => m.isIntermuscular)
          ],
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isHematoma)
          }
        }
      ]
    }
  ]
};
