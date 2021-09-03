import { Component, Input, OnInit } from '@angular/core';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { PhaseTypeEnum } from '@enums/pelvisMRT/pelvic-floor/phase-type.enum';
import { GradingTypeEnum } from '@enums/pelvisMRT/pelvic-floor/grading-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-pelvic-floor-dysfunction',
  templateUrl: './pelvic-floor-dysfunction.component.html',
  styleUrls: ['./pelvic-floor-dysfunction.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PelvicFloorDysfunctionComponent implements OnInit {
  @Input() model: PelvicFloorFindingUiModel;
  @Input() isDynamicOnLocalization: boolean;
  phaseType = PhaseTypeEnum;

  gradingType = {
    hLineGradingTranslate: 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default',
    mLineGradingTranslate: 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default'
  };

  constructor(private validationHelperService: ValidationHelperService) {}

  ngOnInit() {
    this.setInputsLabels();
  }

  setInputsLabels() {
    this.setGradingHLineLabel();
    this.setGradingMLineLabel();
  }

  setGradingHLineLabel() {
    const hiatalExtensionInMm = this.model.hiatalExtensionInMm;

    if (hiatalExtensionInMm >= 1 && hiatalExtensionInMm < 60) {
      this.gradingType.hLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.normal';
      this.model.hiatalExtensionGrading = GradingTypeEnum.Normal;
    } else if (hiatalExtensionInMm >= 60 && hiatalExtensionInMm <= 80) {
      this.gradingType.hLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.light';
      this.model.hiatalExtensionGrading = GradingTypeEnum.Light;
    } else if (hiatalExtensionInMm > 80 && hiatalExtensionInMm <= 100) {
      this.gradingType.hLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.medium';
      this.model.hiatalExtensionGrading = GradingTypeEnum.Medium;
    } else if (hiatalExtensionInMm > 100) {
      this.gradingType.hLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.heavy';
      this.model.hiatalExtensionGrading = GradingTypeEnum.Heavy;
    } else {
      this.gradingType.hLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';
      this.model.hiatalExtensionGrading = GradingTypeEnum.None;
    }
    if (!hiatalExtensionInMm) {
      this.model.hiatalExtensionGrading = GradingTypeEnum.None;
      this.gradingType.hLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';
      this.model.craniocaudalExtensioToPlcPhaseType = PhaseTypeEnum.None;
      this.validationHelperService.removeError(nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensioToPlcPhaseType));
    }
  }

  setGradingMLineLabel() {
    const descendingPelvicFloorInMm = this.model.descendingPelvicFloorInMm;

    if (descendingPelvicFloorInMm >= 1 && descendingPelvicFloorInMm < 20) {
      this.gradingType.mLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.normal';
      this.model.descendingPelvicFloorGrading = GradingTypeEnum.Normal;
    } else if (descendingPelvicFloorInMm >= 20 && descendingPelvicFloorInMm <= 40) {
      this.gradingType.mLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.light';
      this.model.descendingPelvicFloorGrading = GradingTypeEnum.Light;
    } else if (descendingPelvicFloorInMm > 40 && descendingPelvicFloorInMm <= 60) {
      this.gradingType.mLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.medium';
      this.model.descendingPelvicFloorGrading = GradingTypeEnum.Medium;
    } else if (descendingPelvicFloorInMm > 60) {
      this.gradingType.mLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.heavy';
      this.model.descendingPelvicFloorGrading = GradingTypeEnum.Heavy;
    } else {
      this.gradingType.mLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';
      this.model.descendingPelvicFloorGrading = GradingTypeEnum.None;
    }
    if (!descendingPelvicFloorInMm) {
      this.model.descendingPelvicFloorGrading = GradingTypeEnum.None;
      this.gradingType.mLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';

      this.model.craniocaudalExtensionInReferenceToMlpPhaseType = PhaseTypeEnum.None;
      this.validationHelperService.removeError(nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensionInReferenceToMlpPhaseType));
    }
  }

  resetGrading() {
    if (!this.model.isHiatalExtension) {
      this.gradingType.hLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';
      this.model.hiatalExtensionGrading = GradingTypeEnum.None;
    }
    if (!this.model.isDescendingPelvicFloor) {
      this.gradingType.mLineGradingTranslate = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';
      this.model.descendingPelvicFloorGrading = GradingTypeEnum.None;
    }
  }
}
