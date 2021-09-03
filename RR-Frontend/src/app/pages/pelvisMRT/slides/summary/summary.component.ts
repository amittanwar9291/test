import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SummaryUiModel } from '@models/pelvisMRT/ui/summary/summary-ui.model';
import { SummaryValidationModel } from '@models/pelvisMRT/ui/summary/summary-validation.model';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { ProcedureTypeEnum } from '@enums/pelvisMRT/summary/procedure-type.enum';
import { BiopsyRecommendedTypeEnum } from '@enums/pelvisMRT/summary/biopsy-recommended-type.enum';
import { DynamicsOfFindingTypeEnum } from '@enums/pelvisMRT/summary/dynamics-of-finding-type.enum';
import { TumorRegressionGradeTypeEnum } from '@enums/pelvisMRT/summary/tumor-regression-grade-type.enum';
import { TnStagingTypeEnum } from '@enums/pelvisMRT/summary/tn-staging-type.enum';
import { TStageTypeEnum } from '@enums/pelvisMRT/summary/t-stage-type.enum';
import { NStageTypeEnum } from '@enums/pelvisMRT/summary/n-stage-type.enum';
import { MStageTypeEnum } from '@enums/pelvisMRT/summary/m-stage-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { ProstateUiModel } from '@models/pelvisMRT/ui/prostate/prostate-ui.model';
import { RectumUiModel } from '@models/pelvisMRT/ui/rectum/rectum-ui.model';
import { BladderUiModel } from '@models/pelvisMRT/ui/bladder/bladder-ui.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { filter } from 'lodash';
import { BladderFindingTypeEnum, BladderDiagnosisTypeEnum } from '@enums/pelvisMRT/bladder';
import { FindingTypesEnum } from '@enums/pelvisMRT/rectum/common/finding-types.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/common/differential-diagnosis-type.enum';
import { ProstataFindingTypeEnum } from '@enums/pelvisMRT/prostate/prostata-finding-type.enum';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  localizationModel: LocalizationUiModel;
  rectumModel: RectumUiModel;
  bladderModel: BladderUiModel;

  isProstateCarcinomaEnabled = false;

  procedureType = ProcedureTypeEnum;
  biopsyRecommendedType = BiopsyRecommendedTypeEnum;
  dynamicsOfFindingType = DynamicsOfFindingTypeEnum;
  tumorRegressionGradeType = TumorRegressionGradeTypeEnum;
  tNStagingType = TnStagingTypeEnum;
  tStageType = TStageTypeEnum;
  nStageType = NStageTypeEnum;
  mStageType = MStageTypeEnum;
  genderType = GenderTypeEnum;
  mRIFollowUpOptions: DropdownModel[];

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices, SummaryValidationModel);

    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      this.localizationModel = localizationModel ? localizationModel : new LocalizationUiModel();
    });

    this.registerConnectionCallback(4, ProstateUiModel, (prostateModel: ProstateUiModel) => {
      const anyTZOrPZFinding = prostateModel.findings.find(
        finding =>
          [ProstataFindingTypeEnum.TransitionZoneTZ, ProstataFindingTypeEnum.PeripheralZonePZ].includes(finding.findingType) &&
          !finding.isDeleted
      );

      this.model.piradsScoreTotal = anyTZOrPZFinding ? anyTZOrPZFinding.piradsScoreTotal : null;
      this.isProstateCarcinomaEnabled = anyTZOrPZFinding?.piradsScoreTotal > 3;
    });

    this.registerConnectionCallback(8, RectumUiModel, (rectumModel: RectumUiModel) => {
      this.rectumModel = rectumModel ? rectumModel : new RectumUiModel();
    });

    this.registerConnectionCallback(9, BladderUiModel, (bladderModel: BladderUiModel) => {
      this.bladderModel = bladderModel ? bladderModel : new BladderUiModel();
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('pelvisMRT.summary.mRIFollowUpType.options').subscribe((out: DropdownModel[]) => {
        this.mRIFollowUpOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  bladderCarciomaIsDisabled(): boolean {
    if (this.bladderModel && this.bladderModel.findings) {
      return (
        this.bladderModel.findings.filter(
          finding =>
            !finding.isDeleted &&
            finding.findingType === BladderFindingTypeEnum.UrinaryBladderWallThickening &&
            finding.differentialDiagnosis1 === BladderDiagnosisTypeEnum.UrinaryBladderCarcinoma
        ).length === 0
      );
    }
    return true;
  }

  rectalCancerIsDisabled(): boolean {
    if (this.rectumModel && this.rectumModel.findings) {
      return (
        filter(this.rectumModel.findings, {
          findingType: 'RectalCarcinoma',
          isDeleted: false
        }).length === 0
      );
    }
    return true;
  }

  sigmoidColonCancerIsDisabled(): boolean {
    if (this.rectumModel) {
      return (
        filter(this.rectumModel.findings, {
          findingType: FindingTypesEnum.SigmaMass,
          sigmaMassDifferentialDiagnosisType: DifferentialDiagnosisTypeEnum.SigmoidColonCancer,
          isDeleted: false
        }).length === 0
      );
    }
    return true;
  }
}
