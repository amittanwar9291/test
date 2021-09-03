import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { PelvicFloorFindingTypeEnum } from '@enums/pelvisMRT/pelvic-floor/pelvic-floor-finding-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

export class OtherPagesData {
  isDynamic: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PelvicFloorHelperService {
  otherPagesData = new BehaviorSubject<OtherPagesData>(null);

  constructor(private validationHelperService: ValidationHelperService) {}

  updateValidationModel(isDynamicOnLocalization: boolean): void {
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensioToPlcPhaseType),
        validateCondition: {
          customConditionFunction: isDynamicOnLocalization
            ? (m: PelvicFloorFindingUiModel) => !!m.maxCraniocaudalExtensioToPlcInMm
            : () => false
        }
      },
      PelvicFloorFindingTypeEnum.OrganProlapse
    );
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensionInReferenceToMlpPhaseType),
        validateCondition: {
          customConditionFunction: isDynamicOnLocalization
            ? (m: PelvicFloorFindingUiModel) => !!m.craniocaudalExtensionInReferenceToMlpInMm
            : () => false
        }
      },
      PelvicFloorFindingTypeEnum.OrganProlapse
    );
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<PelvicFloorFindingUiModel>(m => m.middleCraniocaudalExtensionToPclPhaseType),
        validateCondition: {
          customConditionFunction: isDynamicOnLocalization
            ? (m: PelvicFloorFindingUiModel) => !!m.maxMiddleCraniocaudalExtensionToPclInMm
            : () => false
        }
      },
      PelvicFloorFindingTypeEnum.OrganProlapse
    );
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<PelvicFloorFindingUiModel>(m => m.middleCraniocaudalExtensionToMplPhaseType),
        validateCondition: {
          customConditionFunction: isDynamicOnLocalization
            ? (m: PelvicFloorFindingUiModel) => !!m.middleCraniocoudalExtensionToMPLInMm
            : () => false
        }
      },
      PelvicFloorFindingTypeEnum.OrganProlapse
    );
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<PelvicFloorFindingUiModel>(m => m.enterocelePhaseType),
        validateCondition: {
          customConditionFunction: isDynamicOnLocalization ? (m: PelvicFloorFindingUiModel) => m.isEnterocele : () => false
        }
      },
      PelvicFloorFindingTypeEnum.OrganProlapse
    );
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<PelvicFloorFindingUiModel>(m => m.peritoneocelePhaseType),
        validateCondition: {
          customConditionFunction: isDynamicOnLocalization ? (m: PelvicFloorFindingUiModel) => m.isPeritoneocele : () => false
        }
      },
      PelvicFloorFindingTypeEnum.OrganProlapse
    );
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<PelvicFloorFindingUiModel>(m => m.sigmoidocelePhaseType),
        validateCondition: {
          customConditionFunction: isDynamicOnLocalization ? (m: PelvicFloorFindingUiModel) => m.isSigmoidocele : () => false
        }
      },
      PelvicFloorFindingTypeEnum.OrganProlapse
    );
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<PelvicFloorFindingUiModel>(m => m.anteriorRectocelePhaseType),
        validateCondition: {
          customConditionFunction: isDynamicOnLocalization
            ? (m: PelvicFloorFindingUiModel) => !!m.expansionInReferenceToAnteriorRectalWallInMm
            : () => false
        }
      },
      PelvicFloorFindingTypeEnum.OrganProlapse
    );

    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensioToPlcPhaseType),
        validateCondition: {
          customConditionFunction: isDynamicOnLocalization ? (m: PelvicFloorFindingUiModel) => !!m.hiatalExtensionInMm : () => false
        }
      },
      PelvicFloorFindingTypeEnum.PelvicFloorDysfunction
    );
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensionInReferenceToMlpPhaseType),
        validateCondition: {
          customConditionFunction: isDynamicOnLocalization ? (m: PelvicFloorFindingUiModel) => !!m.descendingPelvicFloorInMm : () => false
        }
      },
      PelvicFloorFindingTypeEnum.PelvicFloorDysfunction
    );
  }
}
