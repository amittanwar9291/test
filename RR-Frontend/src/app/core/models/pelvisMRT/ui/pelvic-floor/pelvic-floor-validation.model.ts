import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { MlpPositionTypeEnum } from '@enums/pelvisMRT/pelvic-floor/mlp-position-type.enum';
import { PelvicFloorFindingTypeEnum } from '@enums/pelvisMRT/pelvic-floor/pelvic-floor-finding-type.enum';

export const PelvicFloorValidationModel: IValidationModel = {
  finding: [
    {
      findingName: PelvicFloorFindingTypeEnum.Morphology,
      elements: [
        {
          modelName: [
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionPeriurethralLigamentLeft),
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionPeriurethralLigamentRight),
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionPeriurethralLigamentSuspicionOf)
          ],
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<PelvicFloorFindingUiModel>(m => m.isLesionPeriurethralLigament),
            requiredValue: true
          }
        },
        {
          modelName: [
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionParaurethralLigamentLeft),
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionParaurethralLigamentRight),
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionParaurethralLigamentSuspicionOf)
          ],
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<PelvicFloorFindingUiModel>(m => m.isLesionParaurethralLigament),
            requiredValue: true
          }
        },
        {
          modelName: [
            nameof<PelvicFloorFindingUiModel>(m => m.isPubourethralLigamentLesionLeft),
            nameof<PelvicFloorFindingUiModel>(m => m.isPubourethralLigamentLesionRight),
            nameof<PelvicFloorFindingUiModel>(m => m.isPubourethralLigamentLesionSuspicionOf)
          ],
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<PelvicFloorFindingUiModel>(m => m.isPubourethralLigamentLesion),
            requiredValue: true
          }
        },
        {
          modelName: [
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionMPuborectalisLeft),
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionMPuborectalisRight),
            nameof<PelvicFloorFindingUiModel>(m => m.isMPuborectalisSuspicionOf)
          ],
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<PelvicFloorFindingUiModel>(m => m.isLesionPuborectalisMuscle),
            requiredValue: true
          }
        },
        {
          modelName: [
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionMIliococcygeusLeft),
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionMIliococcygeusRight),
            nameof<PelvicFloorFindingUiModel>(m => m.isMIliococcygeusSuspicionOf)
          ],
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<PelvicFloorFindingUiModel>(m => m.isLesionMIliococcygeusMuscle),
            requiredValue: true
          }
        },
        {
          modelName: [
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionMPubococygeusLeft),
            nameof<PelvicFloorFindingUiModel>(m => m.isLesionMPubococygeusRight),
            nameof<PelvicFloorFindingUiModel>(m => m.isMPubococygeusSuspicionOf)
          ],
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<PelvicFloorFindingUiModel>(m => m.isLesionPubococygeusMuscle),
            requiredValue: true
          }
        }
      ]
    },
    {
      findingName: PelvicFloorFindingTypeEnum.OrganProlapse,
      elements: [
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensioToPlcPhaseType),
          validateCondition: {
            customConditionFunction: () => false
          }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensionInReferenceToMlpInMm),
          validateCondition: {
            customConditionFunction: anteriorCompartmentCustomValidation
          }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensionInReferenceToMlpPhaseType),
          validateCondition: {
            customConditionFunction: anteriorCompartmentCustomValidation
          }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.middleCraniocaudalExtensionToPclPhaseType),
          validateCondition: {
            customConditionFunction: () => false
          }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.middleCraniocoudalExtensionToMPLInMm),
          validateCondition: {
            customConditionFunction: middleCompartmentCustomValidation
          }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.middleCraniocaudalExtensionToMplPhaseType),
          validateCondition: {
            customConditionFunction: middleCompartmentCustomValidation
          }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.enterocelePhaseType),
          validateCondition: {
            customConditionFunction: () => false
          }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.peritoneocelePhaseType),
          validateCondition: {
            customConditionFunction: () => false
          }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.sigmoidocelePhaseType),
          validateCondition: {
            customConditionFunction: () => false
          }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.lateralRectoceleDirectionType),
          validateCondition: { modelName: nameof<PelvicFloorFindingUiModel>(m => m.isLateralRectocele), requiredValue: true }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.anteriorRectocelePhaseType),
          validateCondition: {
            customConditionFunction: () => false
          }
        }
      ]
    },
    {
      findingName: PelvicFloorFindingTypeEnum.PelvicFloorDysfunction,
      elements: [
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensioToPlcPhaseType),
          validateCondition: { modelName: nameof<PelvicFloorFindingUiModel>(m => m.isHiatalExtension), requiredValue: true }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensionInReferenceToMlpPhaseType),
          validateCondition: { modelName: nameof<PelvicFloorFindingUiModel>(m => m.isDescendingPelvicFloor), requiredValue: true }
        }
      ]
    },
    {
      findingName: PelvicFloorFindingTypeEnum.DyssynergicDefecationAnism,
      elements: [
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.anorectalAngleWhilePressingInDegrees),
          validateCondition: {
            modelName: nameof<PelvicFloorFindingUiModel>(m => m.anorectalAngleAtRestInDegrees)
          }
        },
        {
          modelName: nameof<PelvicFloorFindingUiModel>(m => m.anorectalAngleDuringDefecationInDegrees),
          validateCondition: {
            modelName: nameof<PelvicFloorFindingUiModel>(m => m.anorectalAngleWhilePressingInDegrees)
          }
        }
      ]
    }
  ]
};

function middleCompartmentCustomValidation(model: PelvicFloorFindingUiModel): boolean {
  return (
    model.middleCraniocoudalExtensionMlpPositionType === MlpPositionTypeEnum.AboveTheMPL ||
    model.middleCraniocoudalExtensionMlpPositionType === MlpPositionTypeEnum.BelowTheMPL
  );
}

function anteriorCompartmentCustomValidation(model: PelvicFloorFindingUiModel): boolean {
  return (
    model.craniocaudalExtensionInReferenceToMplType === MlpPositionTypeEnum.AboveTheMPL ||
    model.craniocaudalExtensionInReferenceToMplType === MlpPositionTypeEnum.BelowTheMPL
  );
}
