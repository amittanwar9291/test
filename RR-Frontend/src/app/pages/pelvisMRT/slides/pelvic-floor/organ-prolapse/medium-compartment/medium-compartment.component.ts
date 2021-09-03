import { Component, Input, OnInit } from '@angular/core';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { MPLGrading } from '@interfaces/mpl-garding.interface';
import { PCLGrading } from '@interfaces/pcl-garding.interface';
import { MlpPositionTypeEnum } from '@enums/pelvisMRT/pelvic-floor/mlp-position-type.enum';
import { PhaseTypeEnum } from '@enums/pelvisMRT/pelvic-floor/phase-type.enum';
import { GradingTypeEnum } from '@enums/pelvisMRT/pelvic-floor/grading-type.enum';
import { StageTypeEnum } from '@enums/pelvisMRT/pelvic-floor/stage-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-medium-compartment',
  templateUrl: './medium-compartment.component.html',
  styleUrls: ['./medium-compartment.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MediumCompartmentComponent implements OnInit {
  @Input() model: PelvicFloorFindingUiModel;
  @Input() MPLGrading: MPLGrading;
  @Input() PCLGrading: PCLGrading;
  @Input() isDynamicOnLocalization: boolean;

  defaultGradingValue = '- -';
  mlpPositionType = MlpPositionTypeEnum;
  phaseType = PhaseTypeEnum;
  gradingTypeText = {
    pclGrading: '- -',
    mplGrading: '- -'
  };

  constructor(private validationHelperService: ValidationHelperService) {}

  ngOnInit() {
    this.setPCLGradingValue();
    this.setMPLGradingValue();
  }

  setPCLGradingValue(): void {
    if (this.model.maxMiddleCraniocaudalExtensionToPclInMm === null || this.model.maxMiddleCraniocaudalExtensionToPclInMm < 10) {
      this.gradingTypeText.pclGrading = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';
      this.model.middleCraniocaudalExtensionToPclGradingInMm = GradingTypeEnum.None;
      this.model.middleCraniocaudalExtensionToPclPhaseType = PhaseTypeEnum.None;
      this.validationHelperService.removeError(nameof<PelvicFloorFindingUiModel>(m => m.middleCraniocaudalExtensionToPclPhaseType));
    } else if (this.model.maxMiddleCraniocaudalExtensionToPclInMm >= 10 && this.model.maxMiddleCraniocaudalExtensionToPclInMm <= 30) {
      this.gradingTypeText.pclGrading = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.light';
      this.model.middleCraniocaudalExtensionToPclGradingInMm = GradingTypeEnum.Light;
    } else if (this.model.maxMiddleCraniocaudalExtensionToPclInMm > 30 && this.model.maxMiddleCraniocaudalExtensionToPclInMm <= 60) {
      this.gradingTypeText.pclGrading = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.medium';
      this.model.middleCraniocaudalExtensionToPclGradingInMm = GradingTypeEnum.Medium;
    } else if (this.model.maxMiddleCraniocaudalExtensionToPclInMm > 60) {
      this.gradingTypeText.pclGrading = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.heavy';
      this.model.middleCraniocaudalExtensionToPclGradingInMm = GradingTypeEnum.Heavy;
    }
  }

  setMPLGradingValue(): void {
    if (this.model.middleCraniocoudalExtensionToMPLInMm === null) {
      this.model.middleCraniocaudalExtensionToMplGradingInMm = StageTypeEnum.None;
      this.gradingTypeText.mplGrading = '- -';
      this.model.middleCraniocaudalExtensionToMplPhaseType = PhaseTypeEnum.None;
      this.validationHelperService.removeError(nameof<PelvicFloorFindingUiModel>(m => m.middleCraniocaudalExtensionToMplPhaseType));
    }
    if (this.model.middleCraniocoudalExtensionMlpPositionType === this.mlpPositionType.OrganEversion) {
      this.gradingTypeText.mplGrading = `pelvisMRT.pelvicFloor.aGrading.stage4`;
      this.model.middleCraniocaudalExtensionToMplGradingInMm = StageTypeEnum.Stage4;
    } else if (
      this.model.middleCraniocoudalExtensionToMPLInMm > 30 &&
      this.model.middleCraniocoudalExtensionMlpPositionType === this.mlpPositionType.AboveTheMPL
    ) {
      this.gradingTypeText.mplGrading = `pelvisMRT.pelvicFloor.aGrading.stage0`;
      this.model.middleCraniocaudalExtensionToMplGradingInMm = StageTypeEnum.Stage0;
    } else if (
      this.model.middleCraniocoudalExtensionToMPLInMm > 10 &&
      this.model.middleCraniocoudalExtensionToMPLInMm <= 30 &&
      this.model.middleCraniocoudalExtensionMlpPositionType === this.mlpPositionType.AboveTheMPL
    ) {
      this.gradingTypeText.mplGrading = `pelvisMRT.pelvicFloor.aGrading.stage1`;
      this.model.middleCraniocaudalExtensionToMplGradingInMm = StageTypeEnum.Stage1;
    } else if (
      this.model.middleCraniocoudalExtensionToMPLInMm &&
      this.model.middleCraniocoudalExtensionToMPLInMm <= 10 &&
      (this.model.middleCraniocoudalExtensionMlpPositionType === this.mlpPositionType.AboveTheMPL ||
        this.model.middleCraniocoudalExtensionMlpPositionType === this.mlpPositionType.BelowTheMPL)
    ) {
      this.gradingTypeText.mplGrading = `pelvisMRT.pelvicFloor.aGrading.stage2`;
      this.model.middleCraniocaudalExtensionToMplGradingInMm = StageTypeEnum.Stage2;
    } else if (
      this.model.middleCraniocoudalExtensionToMPLInMm > 10 &&
      this.model.middleCraniocoudalExtensionMlpPositionType === this.mlpPositionType.BelowTheMPL
    ) {
      this.gradingTypeText.mplGrading = `pelvisMRT.pelvicFloor.aGrading.stage3`;
      this.model.middleCraniocaudalExtensionToMplGradingInMm = StageTypeEnum.Stage3;
    } else {
      this.gradingTypeText.mplGrading = '- -';
      this.model.craniocaudalExtensionInReferenceToMplGradingInMm = StageTypeEnum.None;
    }
  }

  setMaxExpansionValue(): number {
    if (this.model.middleCraniocoudalExtensionMlpPositionType === this.mlpPositionType.AboveTheMPL) {
      return 60;
    } else if (this.model.middleCraniocoudalExtensionMlpPositionType === this.mlpPositionType.BelowTheMPL) {
      return 20;
    }
  }

  clearStaticInputs() {
    this.gradingTypeText.pclGrading = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';
    this.model.middleCraniocaudalExtensionToPclGradingInMm = GradingTypeEnum.None;
    this.model.middleCraniocaudalExtensionToMplGradingInMm = StageTypeEnum.None;
    this.gradingTypeText.mplGrading = '- -';
  }
}
