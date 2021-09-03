import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { AfterContentChecked, Component } from '@angular/core';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { AnamnesisFindingTypeEnum } from '@enums/thoraxCT/anamnesis/anamnesis-finding-type.enum';
import { LungInterstitiumFindingTypeEnum } from '@enums/thoraxCT/lung-interstitium';
import { LungParenchymaDensityTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-density-type.enum';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-finding-type.enum';
import { LungParenchymaLocalizationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-localization-type.enum';
import { SubsolidTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/subsolid-type.enum';
import { BiopsyTypeEnum } from '@enums/thoraxCT/summary/biopsy-type.enum';
import { Covid19CTGroupsTypeEnum } from '@enums/thoraxCT/summary/covid19-ct-groups-type.enum';
import { CtFollowUpTypeEnum } from '@enums/thoraxCT/summary/ct-follow-up-type.enum';
import { DynamicFindingsTypeEnum } from '@enums/thoraxCT/summary/dynamic-findings-type.enum';
import { EvaluationInterdisciplinaryBoardTypeEnum } from '@enums/thoraxCT/summary/evaluation-interdisciplinary-board-type.enum';
import { ScenarioTypeEnum } from '@enums/thoraxCT/summary/scenario-type.enum';
import { TnStagingTypeEnum } from '@enums/thoraxCT/summary/tn-staging-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AnamnesisFindingUiModel } from '@models/thoraxCT/ui/anamnesis/anamnesis-finding-ui.model';
import { AnamnesisUiModel } from '@models/thoraxCT/ui/anamnesis/anamnesis-ui.model';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';
import { LungInterstitiumUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-ui.model';
import { LungParenchymaUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-ui.model';
import { StudyAreaUiModel } from '@models/thoraxCT/ui/study-area/study-area-ui.model';

import { SummaryUiModel } from '@models/thoraxCT/ui/summary/summary-ui.model';
import { SummaryValidationModel } from '@models/thoraxCT/ui/summary/summary-validation.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { RiskCalculatorValues } from './risk-calculator-constants';
import { RiskCalculatorHelperService } from './risk-calculator-helper.service';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> implements AfterContentChecked {
  riskRecalculated = false;
  isRundherdOrRaumforderung = false;
  methodValidationGroup =
    'isCTAbdomen isCTNeck isMammographyAndBreastUltrasound isMRIChest isMRIAbdomen isMRIThoracicSpine ' +
    'isMRINeck isCardiacDiagnostics isCTAngiography isCTPA isPETCT isSPECT isBoneScan';

  bronchialCarcinomaTStaging: DropdownModel[];
  bronchialCarcinomaNStaging: DropdownModel[];
  pleuralMesotheliomaTStaging: DropdownModel[];
  pleuralMesotheliomaNStaging: DropdownModel[];
  scenarioOptions: DropdownModel[];

  sliderScoreLabels: string[];

  ctFollowUpTypeEnum = CtFollowUpTypeEnum;
  biopsyTypeEnum = BiopsyTypeEnum;
  evaluationInterdisciplinaryBoardTypeEnum = EvaluationInterdisciplinaryBoardTypeEnum;
  dynamicFindingsTypeEnum = DynamicFindingsTypeEnum;
  tnStagingTypeEnum = TnStagingTypeEnum;
  covid19CTGroupsTypeEnum = Covid19CTGroupsTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private riskCalculatorHelperService: RiskCalculatorHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices, SummaryValidationModel);
    this.registerConnection();
  }

  private registerConnection() {
    this.registerConnectionCallback(1, StudyAreaUiModel, (studyAreaUiModel: StudyAreaUiModel) => {
      const { age, gender } = studyAreaUiModel.patientInformation;
      this.riskCalculatorHelperService.initializeFirstPage(age, gender);
    });

    this.registerConnectionCallback(2, AnamnesisUiModel, (anamnesisUiModel: AnamnesisUiModel) => {
      const isActiveLungCancerHistoryFinding = anamnesisUiModel.findings.some(
        finding => finding.findingType === AnamnesisFindingTypeEnum.PositiveFamilyHistoryOfLungCancer && !finding.isDeleted
      );

      this.riskCalculatorHelperService.initializeSecondPage(isActiveLungCancerHistoryFinding);
    });

    this.registerConnectionCallback(5, LungParenchymaUiModel, (lungParenchymaUiModel: LungParenchymaUiModel) => {
      const roundStoveFinding = this.getFifthPageRoundStoveFinding(lungParenchymaUiModel);

      if (!roundStoveFinding) {
        this.model.isLungRADS = false;
        this.model.signalType = 0;
        this.model.scenarioType = ScenarioTypeEnum.None;
        this.model.isRiskCalculator = false;
        this.model.numberOfRoundHearths = null;
        this.model.cancerProbability = null;

        return;
      }

      this.isRundherdOrRaumforderung = true;
      this.riskCalculatorHelperService.initializeFifthPage(roundStoveFinding);
    });

    this.registerConnectionCallback(6, LungInterstitiumUiModel, (lungInterstitiumUiModel: LungInterstitiumUiModel) => {
      const isActiveEmphysemaFinding = lungInterstitiumUiModel.findings.some(
        finding => finding.findingType === LungInterstitiumFindingTypeEnum.Emphysema && !finding.isDeleted
      );

      this.riskCalculatorHelperService.initializeSixthPage(isActiveEmphysemaFinding);
    });
  }

  getFifthPageRoundStoveFinding(pageModel: LungParenchymaUiModel) {
    const roundStovePossibleFinding = [LungParenchymaFindingTypeEnum.Nodule, LungParenchymaFindingTypeEnum.Mass];

    return pageModel.findings.find(finding => roundStovePossibleFinding.includes(finding.findingType) && !finding.isDeleted);
  }

  ngAfterContentChecked() {
    if (this.modelInitialized && this.riskCalculatorHelperService.isServiceInitialized() && !this.riskRecalculated) {
      this.setNoduleCountAndCalcuateRisk(this.model.numberOfRoundHearths);
      this.riskRecalculated = true;
    }
  }

  setNoduleCountAndCalcuateRisk(value: number) {
    this.riskCalculatorHelperService.riskDataModel.noduleCount = value;
    this.model.cancerProbability = value === null ? null : this.riskCalculatorHelperService.calculateRisk();
  }

  initTranslations() {
    super.initTranslations();

    this.subscriptions.push(
      this.translate.stream('thoraxCT.summary.sliderScoreLabels').subscribe((out: string[]) => {
        this.sliderScoreLabels = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.summary.bronchialCarcinomaTStaging.options').subscribe((out: DropdownModel[]) => {
        this.bronchialCarcinomaTStaging = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.summary.bronchialCarcinomaNStaging.options').subscribe((out: DropdownModel[]) => {
        this.bronchialCarcinomaNStaging = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.summary.pleuralMesotheliomaTStaging.options').subscribe((out: DropdownModel[]) => {
        this.pleuralMesotheliomaTStaging = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.summary.pleuralMesotheliomaNStaging.options').subscribe((out: DropdownModel[]) => {
        this.pleuralMesotheliomaNStaging = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.summary.scenarioOptions.options').subscribe((out: DropdownModel[]) => {
        this.scenarioOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearSlider() {
    this.model.signalType = 0;
    this.model.scenarioType = ScenarioTypeEnum.None;
  }

  clearStagingDropdowns(value: string): string {
    return this.model.tnStagingType === value ? '' : 'stagingDropdowns-block';
  }
}
