import { Component, OnInit } from '@angular/core';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { SummaryUiModel } from '@models/cardioMRT/ui/summary/summary-ui.model';
import { SummaryValidationModel } from '@models/cardioMRT/ui/summary/summary-validation.model';
import { FindingsVentriclesUiModel } from '@models/cardioMRT/ui/findings-ventricles/findings-ventricles-ui.model';
import { AreaOfExaminationUiModel } from '@models/cardioMRT/ui/area-of-examination/area-of-examination-ui.model';
import { RightVentricleUiModel } from '@models/cardioMRT/ui/right-ventricle/right-ventricle-ui.model';
import { TechnologyUiModel } from '@models/cardioMRT/ui/technology/technology-ui.model';
import { FollowUpTime } from '@enums/cardioMRT/summary/follow-up-time.enum';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { NavigationService } from '@services/shared';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { FunctionTypeEnum } from '@enums/cardioMRT';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> implements OnInit {
  diagnosisTypeDropdown1: DropdownGroupedModel[];
  diagnosisTypeDropdown2: DropdownGroupedModel[];

  isPharmaStress = false;
  isFunctionType = false;
  patientGender = GenderTypeEnum.None;
  rvedvAndBSAInMlM2 = null;
  rvefInPercent = null;

  followUpTime: typeof FollowUpTime;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices, SummaryValidationModel);

    this.followUpTime = FollowUpTime;

    this.registerConnection();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  private registerConnection() {
    this.registerConnectionCallback(1, AreaOfExaminationUiModel, (model: AreaOfExaminationUiModel) => {
      this.patientGender = model.patientInformation.gender;
    });
    this.registerConnectionCallback(3, TechnologyUiModel, (model: TechnologyUiModel) => {
      this.isPharmaStress = model.pharmacologicalStressType !== 'None';
    });
    this.registerConnectionCallback(5, FindingsVentriclesUiModel, (model: FindingsVentriclesUiModel) => {
      this.rvedvAndBSAInMlM2 = model.rvedvAndBSAInMlM2;
      this.rvefInPercent = model.rvefInPercent;
    });
    this.registerConnectionCallback(7, RightVentricleUiModel, (model: RightVentricleUiModel) => {
      this.isFunctionType = model.functionType !== FunctionTypeEnum.None;
      this.applyEvaluationARVCALogic();
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('cardioMRT.summary.diagnosisTypeDropdown1.options').subscribe((out: DropdownGroupedModel[]) => {
        this.diagnosisTypeDropdown1 = out;
      }),
      this.translate.stream('cardioMRT.summary.diagnosisTypeDropdown2.options').subscribe((out: DropdownGroupedModel[]) => {
        this.diagnosisTypeDropdown2 = out;
      })
    );
  }

  applyEvaluationARVCALogic() {
    this.model.isMajorCriteria = false;
    this.model.isMinorCriteria = false;

    if (!this.model.isEvaluationARVCAccordingToTaskForceCriteria) {
      return;
    }

    if (this.isFunctionType) {
      this.model.isMajorCriteria = this.isMajorCriteria();
      this.model.isMinorCriteria = this.isMinorCritera();
    }
  }

  resetDiffDiagnosis1Column() {
    this.model.isSuspicionOf = false;
    this.model.isEvaluationARVCAccordingToTaskForceCriteria = false;
    this.model.isMajorCriteria = false;
    this.model.isMinorCriteria = false;
    this.model.differentialDiagnosisTo01 = 'None';
    this.clearIsSubordinatedAndDD02Dependent();
  }

  clearIsSubordinatedAndDD02Dependent() {
    this.model.isSubordinated = false;
    this.model.differentialDiagnosis02 = 'None';
  }

  private isMajorCriteria(): boolean {
    return (
      (this.patientGender === GenderTypeEnum.Male && this.rvedvAndBSAInMlM2 >= 110) ||
      (this.patientGender === GenderTypeEnum.Female && this.rvedvAndBSAInMlM2 >= 100) ||
      (this.rvefInPercent !== null && this.rvefInPercent <= 40)
    );
  }

  private isMinorCritera(): boolean {
    return (
      (this.patientGender === GenderTypeEnum.Male && this.rvedvAndBSAInMlM2 >= 100 && this.rvedvAndBSAInMlM2 < 110) ||
      (this.patientGender === GenderTypeEnum.Female && this.rvedvAndBSAInMlM2 >= 90 && this.rvedvAndBSAInMlM2 < 100) ||
      (this.rvefInPercent > 40 && this.rvefInPercent <= 45)
    );
  }
}
