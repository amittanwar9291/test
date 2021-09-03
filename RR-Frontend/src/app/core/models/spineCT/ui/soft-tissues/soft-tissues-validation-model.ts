import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SoftTissuesFindingTypeEnum } from '@enums/spineCT/soft-tissues/soft-tissues-finding-type.enum';
import { nameof } from 'ts-simple-nameof';
import { SoftTissuesFindingUiModel } from '@models/spineCT';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { AffectedVesselOrUreterTypeEnum } from '@enums/spineCT/soft-tissues/vessels-ureter/affected-vessel-or-ureter-type.enum';

export const SoftTissuesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: SoftTissuesFindingTypeEnum.ParaspinalMass,
      elements: [
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.spineAxialLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.maxDiameterInMm)
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: SoftTissuesFindingTypeEnum.LymphNodes,
      elements: [
        {
          modelName: [
            nameof<SoftTissuesFindingUiModel>(m => m.isCervical),
            nameof<SoftTissuesFindingUiModel>(m => m.isParaaortal),
            nameof<SoftTissuesFindingUiModel>(m => m.isAortocaval),
            nameof<SoftTissuesFindingUiModel>(m => m.isParailiacal),
            nameof<SoftTissuesFindingUiModel>(m => m.isPresacral),
            nameof<SoftTissuesFindingUiModel>(m => m.isInguinal),
            nameof<SoftTissuesFindingUiModel>(m => m.isFemoral)
          ]
        },
        {
          modelName: [nameof<SoftTissuesFindingUiModel>(m => m.isCervicalRight), nameof<SoftTissuesFindingUiModel>(m => m.isCervicalLeft)],
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isCervical)
          }
        },
        {
          modelName: [
            nameof<SoftTissuesFindingUiModel>(m => m.isParailiacalRight),
            nameof<SoftTissuesFindingUiModel>(m => m.isParailiacalLeft)
          ],
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isParailiacal)
          }
        },
        {
          modelName: [
            nameof<SoftTissuesFindingUiModel>(m => m.isPresacralRight),
            nameof<SoftTissuesFindingUiModel>(m => m.isPresacralLeft)
          ],
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isPresacral)
          }
        },
        {
          modelName: [nameof<SoftTissuesFindingUiModel>(m => m.isInguinalRight), nameof<SoftTissuesFindingUiModel>(m => m.isInguinalLeft)],
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isInguinal)
          }
        },
        {
          modelName: [nameof<SoftTissuesFindingUiModel>(m => m.isFemoralRight), nameof<SoftTissuesFindingUiModel>(m => m.isFemoralLeft)],
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isFemoral)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.characterizationType)
        }
      ]
    },
    {
      findingName: SoftTissuesFindingTypeEnum.VesselsUreter,
      elements: [
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.affectedVesselOrUreterType)
        },
        {
          modelName: [
            nameof<SoftTissuesFindingUiModel>(m => m.isAffectedVesselOrUreterRight),
            nameof<SoftTissuesFindingUiModel>(m => m.isAffectedVesselOrUreterLeft)
          ],
          validateCondition: {
            customConditionFunction: (m: SoftTissuesFindingUiModel) => {
              return [
                AffectedVesselOrUreterTypeEnum.VertebralArtery,
                AffectedVesselOrUreterTypeEnum.CommonIliacArtery,
                AffectedVesselOrUreterTypeEnum.ExternalIliacArtery,
                AffectedVesselOrUreterTypeEnum.Ureter
              ].includes(m.affectedVesselOrUreterType);
            }
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.rightPathologyType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isAffectedVesselOrUreterRight)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.leftPathologyType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isAffectedVesselOrUreterLeft)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.pathologyType),
          validateCondition: {
            customConditionFunction: (m: SoftTissuesFindingUiModel) => {
              return [
                AffectedVesselOrUreterTypeEnum.VenaCava,
                AffectedVesselOrUreterTypeEnum.AbdominalAorta,
                AffectedVesselOrUreterTypeEnum.ThoracicAorta
              ].includes(m.affectedVesselOrUreterType);
            }
          }
        }
      ]
    },
    {
      findingName: SoftTissuesFindingTypeEnum.ParavertebralMuscles,
      elements: [
        {
          modelName: [
            nameof<SoftTissuesFindingUiModel>(m => m.isLongissimusCapitisMuscle),
            nameof<SoftTissuesFindingUiModel>(m => m.isLevatorScapulaeMuscle),
            nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisColliMuscle),
            nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisCapitisMuscle),
            nameof<SoftTissuesFindingUiModel>(m => m.isSpleniusCapitisMuscle),
            nameof<SoftTissuesFindingUiModel>(m => m.isTrapeziusMuscle),
            nameof<SoftTissuesFindingUiModel>(m => m.isCervicalSpineAutochthonous),
            nameof<SoftTissuesFindingUiModel>(m => m.isThoracicOrLumbarSpineAutochthonous),
            nameof<SoftTissuesFindingUiModel>(m => m.isIliocostalisMuscle),
            nameof<SoftTissuesFindingUiModel>(m => m.isLongissimusMuscle),
            nameof<SoftTissuesFindingUiModel>(m => m.isQuadratusLumborumMuscle),
            nameof<SoftTissuesFindingUiModel>(m => m.isPsoasMajorMuscle),
            nameof<SoftTissuesFindingUiModel>(m => m.isMultifidusMuscle)
          ]
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.longissimusCapitisMuscleSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isLongissimusCapitisMuscle)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.levatorScapulaeMuscleSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isLevatorScapulaeMuscle)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.semispinalisColliMuscleSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisColliMuscle)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.semispinalisCapitisMuscleSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisCapitisMuscle)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.spleniusCapitisMuscleSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isSpleniusCapitisMuscle)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.cervicalSpineAutochthonousSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isCervicalSpineAutochthonous)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.thoracicOrLumbarSpineAutochthonousSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isThoracicOrLumbarSpineAutochthonous)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.iliocostalisMuscleSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isIliocostalisMuscle)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.longissimusMuscleSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isLongissimusMuscle)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.quadratusLumborumMuscleSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isQuadratusLumborumMuscle)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.psoasMajorMuscleSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isPsoasMajorMuscle)
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.multifidusMuscleSideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.isMultifidusMuscle)
          }
        }
      ]
    }
  ]
};
