import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SummaryValidationModel } from '@models/thoraxMRT/ui/summary/summary-validation.model';
import { SummaryUiModel } from '@models/thoraxMRT/ui/summary/summary-ui.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { BiopsyRecommendedTypeEnum } from '@enums/thoraxMRT/summary/biopsy-recommended-type.enum';
import { DynamicFindingsTypeEnum } from '@enums/thoraxMRT/summary/dynamic-findings-type.enum';

import { MriFollowUpTypeEnum } from '@enums/thoraxMRT/summary/mri-follow-up-type.enum';
import { TNStagingTypeEnum } from '@enums/thoraxMRT/summary/TNStaging-type.enum';
import { LungParenchymaFindingUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { LungParenchymaUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-ui.model';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/lung-parenchyma-finding-type.enum';
import { CysticFibrosisTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/cystic-fibrosis/cystic-fibrosis-type.enum';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  methodValidationGroup =
    'isCTThorax isCTAbdomen isCTNeck isMammographyAndBreastUltrasound isMRIAbdomen isMRISpine ' +
    'isMRINeck isCardiacDiagnostics isCTAngiography isCTPA isPETCT isSPECT isBoneScan';

  bronchialCarcinomaTStaging: DropdownModel[];
  bronchialCarcinomaNStaging: DropdownModel[];
  pleuralMesotheliomaTStaging: DropdownModel[];
  pleuralMesotheliomaNStaging: DropdownModel[];

  mriFollowUpTypeEnum = MriFollowUpTypeEnum;
  biopsyRecommendedTypeEnum = BiopsyRecommendedTypeEnum;
  dynamicFindingsTypeEnum = DynamicFindingsTypeEnum;
  tnStagingTypeEnum = TNStagingTypeEnum;
  cysticFibrosisDynamicFindingsType = DynamicFindingsTypeEnum;

  isFifthColumnVisible = false;
  score: number;

  sliderScoreLabels: string[];
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices, SummaryValidationModel);

    this.registerConnection();
  }

  private registerConnection() {
    this.registerConnectionCallback(5, LungParenchymaUiModel, (lungParenchymaUiModel: LungParenchymaUiModel) => {
      lungParenchymaUiModel.findings.forEach((finding: LungParenchymaFindingUiModel) => {
        const isQuantitativeSelected =
          finding.findingType === LungParenchymaFindingTypeEnum.CysticFibrosis &&
          finding.cysticFibrosisType === CysticFibrosisTypeEnum.QuantitativeEichingerScore;

        if (isQuantitativeSelected) {
          this.score = finding.score;
          this.getScoreExamination();
        } else {
          this.model.cysticFibrosisDynamicFindingsType = DynamicFindingsTypeEnum.None;
          this.model.scorePreliminaryExaminationPoints = 0;
        }

        this.isFifthColumnVisible = isQuantitativeSelected;
      });
    });
  }

  clearStagingDropdowns(value: string): string {
    return this.model.tnStagingType === TNStagingTypeEnum.None ? '' : 'stagingDropdowns-block';
  }

  initTranslations() {
    super.initTranslations();

    this.subscriptions.push(
      this.translate.stream('thoraxMRT.summary.bronchialCarcinomaTStaging').subscribe((out: DropdownModel[]) => {
        this.bronchialCarcinomaTStaging = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxMRT.summary.bronchialCarcinomaNStaging').subscribe((out: DropdownModel[]) => {
        this.bronchialCarcinomaNStaging = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxMRT.summary.pleuralMesotheliomaTStaging').subscribe((out: DropdownModel[]) => {
        this.pleuralMesotheliomaTStaging = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxMRT.summary.pleuralMesotheliomaNStaging').subscribe((out: DropdownModel[]) => {
        this.pleuralMesotheliomaNStaging = Object.keys(out).map(e => out[e]);
      })
    );
  }

  getScoreExamination() {
    if (this.model.isQuantitativeEvaluationCysticFibrosis && this.model.scorePreliminaryExaminationPoints > 0 && this.score > 0) {
      const scoreDiffrence = this.model.scorePreliminaryExaminationPoints - this.score;

      if (scoreDiffrence >= 1) {
        this.model.cysticFibrosisDynamicFindingsType = DynamicFindingsTypeEnum.Improvement;
      } else if (scoreDiffrence === 0) {
        this.model.cysticFibrosisDynamicFindingsType = DynamicFindingsTypeEnum.NoChange;
      } else if (scoreDiffrence < 0) {
        this.model.cysticFibrosisDynamicFindingsType = DynamicFindingsTypeEnum.Deterioration;
      }
    } else {
      this.model.cysticFibrosisDynamicFindingsType = DynamicFindingsTypeEnum.None;
    }
  }
}
