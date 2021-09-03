import { Injectable } from '@angular/core';
import { ScoreLocationModel } from '@models/spineMRT/ui/spine/score-location.model';
import { SacroiliacJointFindingUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';
import { SacroiliacJointScoreUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-score-ui.model';
import { BehaviorSubject } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';
import { ScanAreaTypesEnum } from '@enums/spineMRT/localization/area-of-examination-types.enum';
import { nameof } from 'ts-simple-nameof';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { SoftTissueFindingTypeEnum } from '@enums/spineMRT/soft-tissues';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Injectable({
  providedIn: 'root'
})
export class SpineHelperService {
  constructor(private validationHelperService: ValidationHelperService) {}

  public spineLocalizerPermittedSelection = new BehaviorSubject<SpineLocation>(null);

  // validation page 8 ParavertebralMuscles finding
  paravertebralMusclesDynamicValidatedElements = {
    cervicalSpine: [
      nameof<SoftTissuesFindingUiModel>(m => m.isLongissimusCapitisMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isLevatorScapulaeMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisColliMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisCapitisMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isSpleniusCapitisMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isTrapeziusMuscle)
    ],
    thoracicLumbarSpine: [
      nameof<SoftTissuesFindingUiModel>(m => m.isErectorSpinaeMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isQuadratusLumborumMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isPsoasMajorMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isMultifidusMuscle)
    ],
    cervicalThoracicLumbarSpine: [
      nameof<SoftTissuesFindingUiModel>(m => m.isLongissimusCapitisMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isLevatorScapulaeMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisColliMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisCapitisMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isSpleniusCapitisMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isTrapeziusMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isErectorSpinaeMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isQuadratusLumborumMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isPsoasMajorMuscle),
      nameof<SoftTissuesFindingUiModel>(m => m.isMultifidusMuscle)
    ]
  };

  public setAndReturnSpineLocalizerPermittedSelection(localizationUiModel: LocalizationUiModel) {
    if (localizationUiModel.scanAreaType === ScanAreaTypesEnum.Spine) {
      this.spineLocalizerPermittedSelection.next(localizationUiModel.spineLocation);
    }
    if (localizationUiModel.scanAreaType === ScanAreaTypesEnum.DedicatedSIJScan) {
      const LWSSelection = new SpineLocation();
      const LWSParts = ['l1', 'l1d', 'l2', 'l2d', 'l3', 'l3d', 'l4', 'l4d', 'l5', 'l5d', 'osSacrum', 'osCoccygis'];
      LWSParts.forEach(item => (LWSSelection[item] = true));
      this.spineLocalizerPermittedSelection.next(LWSSelection);
    }
    return this.spineLocalizerPermittedSelection.getValue();
  }

  // sparc Score page9
  public resetSPARCScore(model: SacroiliacJointFindingUiModel) {
    model.sparccScore = null;
    model.score1 = this.resetElement(model.score1);
    model.score2 = this.resetElement(model.score2);
    model.score3 = this.resetElement(model.score3);
    model.score4 = this.resetElement(model.score4);
    model.score5 = this.resetElement(model.score5);
    model.score6 = this.resetElement(model.score6);
  }

  private resetElement(elem: SacroiliacJointScoreUiModel): SacroiliacJointScoreUiModel {
    elem.scoreLocation = new ScoreLocationModel();
    elem.isManifestationRight = false;
    elem.isManifestationLeft = false;
    elem.isSTIRRight = false;
    elem.isSTIRLeft = false;
    return elem;
  }

  // validation page 8 ParavertebralMuscles finding
  updateValidationModelForParavertebralMusclesFinding(isC0ToC7: boolean, isTH1ToL5: boolean) {
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: this.paravertebralMusclesDynamicValidatedElements.cervicalSpine,
        validateCondition: { customConditionFunction: () => isC0ToC7 && !isTH1ToL5 }
      },

      SoftTissueFindingTypeEnum.ParavertebralMuscles
    );
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: this.paravertebralMusclesDynamicValidatedElements.thoracicLumbarSpine,
        validateCondition: { customConditionFunction: () => !isC0ToC7 && isTH1ToL5 }
      },
      SoftTissueFindingTypeEnum.ParavertebralMuscles
    );
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: this.paravertebralMusclesDynamicValidatedElements.cervicalThoracicLumbarSpine,
        validateCondition: { customConditionFunction: () => isC0ToC7 && isTH1ToL5 }
      },
      SoftTissueFindingTypeEnum.ParavertebralMuscles
    );
  }
}
