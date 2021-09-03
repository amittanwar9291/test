import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { MlpPositionTypeEnum } from '@enums/pelvisMRT/pelvic-floor/mlp-position-type.enum';
import { PhaseTypeEnum } from '@enums/pelvisMRT/pelvic-floor/phase-type.enum';
import { StageTypeEnum } from '@enums/pelvisMRT/pelvic-floor/stage-type.enum';
import { GradingTypeEnum } from '@enums/pelvisMRT/pelvic-floor/grading-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-anterior-compartment',
  templateUrl: './anterior-compartment.component.html',
  styleUrls: ['./anterior-compartment.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnteriorCompartmentComponent implements OnInit {
  @Input() model: PelvicFloorFindingUiModel;
  @Input() isDynamicOnLocalization: boolean;

  mlpPositionType = MlpPositionTypeEnum;
  phaseType = PhaseTypeEnum;
  gradingTypeText = {
    pclGrading: `pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default`,
    mplGrading: '- -'
  };

  constructor(private validationHelperService: ValidationHelperService) {}

  ngOnInit() {
    this.setPCLGradingValue();
    this.setMPLGradingValue();
  }

  setPCLGradingValue(): void {
    if (this.model.maxCraniocaudalExtensioToPlcInMm === null || this.model.maxCraniocaudalExtensioToPlcInMm < 10) {
      this.gradingTypeText.pclGrading = `pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default`;
      this.model.craniocaudalExtensioToPlcGradingInMm = GradingTypeEnum.None;

      this.model.craniocaudalExtensioToPlcPhaseType = PhaseTypeEnum.None;
      this.validationHelperService.removeError(nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensioToPlcPhaseType));
    } else if (this.model.maxCraniocaudalExtensioToPlcInMm >= 10 && this.model.maxCraniocaudalExtensioToPlcInMm <= 30) {
      this.gradingTypeText.pclGrading = `pelvisMRT.pelvicFloor.mmNormal60ToMm.value.light`;
      this.model.craniocaudalExtensioToPlcGradingInMm = GradingTypeEnum.Light;
    } else if (this.model.maxCraniocaudalExtensioToPlcInMm > 30 && this.model.maxCraniocaudalExtensioToPlcInMm <= 60) {
      this.gradingTypeText.pclGrading = `pelvisMRT.pelvicFloor.mmNormal60ToMm.value.medium`;
      this.model.craniocaudalExtensioToPlcGradingInMm = GradingTypeEnum.Medium;
    } else if (this.model.maxCraniocaudalExtensioToPlcInMm > 60) {
      this.gradingTypeText.pclGrading = `pelvisMRT.pelvicFloor.mmNormal60ToMm.value.heavy`;
      this.model.craniocaudalExtensioToPlcGradingInMm = GradingTypeEnum.Heavy;
    }
  }

  setMPLGradingValue(clearCraniocaudalExtensionInReferenceToMlpInMm?: boolean): void {
    if (clearCraniocaudalExtensionInReferenceToMlpInMm) {
      this.model.craniocaudalExtensionInReferenceToMlpInMm = null;
    }

    if (this.model.craniocaudalExtensionInReferenceToMlpInMm === null) {
      this.model.craniocaudalExtensionInReferenceToMplGradingInMm = StageTypeEnum.None;
      this.gradingTypeText.mplGrading = '- -';
      this.model.craniocaudalExtensionInReferenceToMlpPhaseType = PhaseTypeEnum.None;
      this.validationHelperService.removeError(nameof<PelvicFloorFindingUiModel>(m => m.craniocaudalExtensionInReferenceToMlpPhaseType));
    }

    if (this.model.craniocaudalExtensionInReferenceToMplType === this.mlpPositionType.OrganEversion) {
      this.gradingTypeText.mplGrading = 'pelvisMRT.pelvicFloor.aGrading.stage4';
      this.model.craniocaudalExtensionInReferenceToMplGradingInMm = StageTypeEnum.Stage4;
    } else if (
      this.model.craniocaudalExtensionInReferenceToMlpInMm > 30 &&
      this.model.craniocaudalExtensionInReferenceToMplType === this.mlpPositionType.AboveTheMPL
    ) {
      this.gradingTypeText.mplGrading = 'pelvisMRT.pelvicFloor.aGrading.stage0';
      this.model.craniocaudalExtensionInReferenceToMplGradingInMm = StageTypeEnum.Stage0;
    } else if (
      this.model.craniocaudalExtensionInReferenceToMlpInMm > 10 &&
      this.model.craniocaudalExtensionInReferenceToMlpInMm <= 30 &&
      this.model.craniocaudalExtensionInReferenceToMplType === this.mlpPositionType.AboveTheMPL
    ) {
      this.gradingTypeText.mplGrading = `pelvisMRT.pelvicFloor.aGrading.stage1`;
      this.model.craniocaudalExtensionInReferenceToMplGradingInMm = StageTypeEnum.Stage1;
    } else if (
      this.model.craniocaudalExtensionInReferenceToMlpInMm &&
      this.model.craniocaudalExtensionInReferenceToMlpInMm <= 10 &&
      (this.model.craniocaudalExtensionInReferenceToMplType === this.mlpPositionType.AboveTheMPL ||
        this.model.craniocaudalExtensionInReferenceToMplType === this.mlpPositionType.BelowTheMPL)
    ) {
      this.gradingTypeText.mplGrading = `pelvisMRT.pelvicFloor.aGrading.stage2`;
      this.model.craniocaudalExtensionInReferenceToMplGradingInMm = StageTypeEnum.Stage2;
    } else if (
      this.model.craniocaudalExtensionInReferenceToMlpInMm > 10 &&
      this.model.craniocaudalExtensionInReferenceToMplType === this.mlpPositionType.BelowTheMPL
    ) {
      this.gradingTypeText.mplGrading = `pelvisMRT.pelvicFloor.aGrading.stage3`;
      this.model.craniocaudalExtensionInReferenceToMplGradingInMm = StageTypeEnum.Stage3;
    } else {
      this.gradingTypeText.mplGrading = '- -';
      this.model.craniocaudalExtensionInReferenceToMplGradingInMm = StageTypeEnum.None;
    }
  }

  setMaxExpansionValue(): number {
    if (this.model.craniocaudalExtensionInReferenceToMplType === this.mlpPositionType.AboveTheMPL) {
      return 60;
    } else if (this.model.craniocaudalExtensionInReferenceToMplType === this.mlpPositionType.BelowTheMPL) {
      return 20;
    }
  }

  clearStaticInputs() {
    this.gradingTypeText.pclGrading = `pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default`;
    this.model.craniocaudalExtensioToPlcGradingInMm = GradingTypeEnum.None;
    this.model.craniocaudalExtensionInReferenceToMplGradingInMm = StageTypeEnum.None;
    this.gradingTypeText.mplGrading = '- -';
  }
}
