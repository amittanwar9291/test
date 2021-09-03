import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { BladderHelperService } from './bladder-helper.service';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { BladderUiModel } from '@models/pelvisMRT/ui/bladder/bladder-ui.model';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { BladderValidationModel } from '@models/pelvisMRT/ui/bladder/bladder-validation.model';
import { SharedUrinaryBladderColumnModel } from '@models/pelvisMRT/ui/bladder/shared-urinary-bladder-column.model';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SummaryUiModel } from '@models/pelvisMRT/ui/summary/summary-ui.model';

import { BladderFindingTypeEnum } from '@enums/pelvisMRT/bladder/bladder-finding-type.enum';
import { BladderDiagnosisTypeEnum } from '@enums/pelvisMRT/bladder';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TnStagingTypeEnum } from '@enums/pelvisMRT/summary/tn-staging-type.enum';
import { TStageTypeEnum } from '@enums/pelvisMRT/summary/t-stage-type.enum';
import { NStageTypeEnum } from '@enums/pelvisMRT/summary/n-stage-type.enum';

@Component({
  selector: 'rr-bladder',
  templateUrl: './bladder.component.html',
  styleUrls: ['./bladder.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BladderComponent extends SlideBaseComponent<BladderUiModel> implements OnInit, OnDestroy {
  findingHandler: DynamicComponentHandler<BladderFindingUiModel>;
  findingColumnConfig: FindingColumnConfig;

  gender: GenderTypeEnum;
  sharedUrinaryBladderColumnModel: SharedUrinaryBladderColumnModel;

  areFindingsEnum = AreFindingsEnum;
  bladderFindingTypeEnum = BladderFindingTypeEnum;

  urinaryBladderFindingTypes = [
    BladderFindingTypeEnum.UrinaryBladderWallThickening,
    BladderFindingTypeEnum.UrinaryBladderDiverticulum,
    BladderFindingTypeEnum.UrinaryBladderStandardVariationAnomalies,
    BladderFindingTypeEnum.UrinaryBladderTrauma
  ];

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private bladderHelperService: BladderHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, BladderUiModel, commonServices, BladderValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BladderFindingUiModel);
    this.initFindingColumnConfig();
    this.registerCallbacks();
    this.registerConnections();
  }

  ngOnInit() {
    super.ngOnInit();
    this.subscriptions.push(
      this.bladderHelperService.sharedUrinaryBladderColumnModel.subscribe((value: SharedUrinaryBladderColumnModel) => {
        this.sharedUrinaryBladderColumnModel = value;
        this.updateUrinaryBladderFindings();
      })
    );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.bladderHelperService.gender.next(GenderTypeEnum.None);
    this.bladderHelperService.isCM.next(false);
    this.bladderHelperService.sharedUrinaryBladderColumnModel.next(new SharedUrinaryBladderColumnModel());
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingColumnConfig.placeholder = out;
      }),
      this.translate.stream('pelvisMRT.bladder.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingColumnConfig.dropdownValues = out;
        this.setPeritonealNodulesFindingTypeDisabled();
      }),
      this.translate.stream('pelvisMRT.bladder.addNewFinding.value').subscribe((out: string) => {
        this.findingColumnConfig.buttonText = out;
      }),
      this.translate.stream('pelvisMRT.bladder.translationBits').subscribe((out: any) => {
        this.findingColumnConfig.translationBits = out;
      })
    );
  }

  setPeritonealNodulesFindingTypeDisabled() {
    this.findingColumnConfig.dropdownValues
      .filter(option => option.value === BladderFindingTypeEnum.PeritonealNodules)
      .map(option => (option.disabled = this.gender !== GenderTypeEnum.Female));
  }

  initFindingColumnConfig() {
    this.findingColumnConfig = new FindingColumnConfig();
    this.findingColumnConfig.itemCount = 4;
    this.findingColumnConfig.autoConfigFindingRRId = 'pel_m_090106';
  }

  getCustomLabel(index: number, findingHandler: DynamicComponentHandler<BladderFindingUiModel>, translationBits: any): string {
    const findingType = findingHandler.collection[index].findingType;

    if (
      [BladderFindingTypeEnum.UrinaryBladderStandardVariationAnomalies, BladderFindingTypeEnum.PeripheralNerveSheathTumor].includes(
        findingType
      )
    ) {
      return translationBits[findingType];
    }
    return '';
  }

  registerCallbacks() {
    this.registerGetCallback((model: BladderUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
      this.initUrinaryBladderColumnModel();
    });
    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
    this.registerSaveCallback((model: BladderUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });
  }

  registerConnections() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      this.gender = localizationModel?.patientInformation?.gender;
      this.setPeritonealNodulesFindingTypeDisabled();
      this.bladderHelperService.gender.next(this.gender);
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      const isCM = technologyModel?.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.bladderHelperService.isCM.next(isCM);
    });

    this.addPageConnection(
      12,
      SummaryUiModel,
      () => {
        return (
          this.findingHandler.collection.filter(
            finding =>
              !finding.isDeleted &&
              finding.findingType === BladderFindingTypeEnum.UrinaryBladderWallThickening &&
              finding.differentialDiagnosis1 === BladderDiagnosisTypeEnum.UrinaryBladderCarcinoma
          ).length === 0
        );
      },
      (model: SummaryUiModel) => {
        if (model.tnStagingType === TnStagingTypeEnum.BladderCarcinoma) {
          model.tnStagingType = TnStagingTypeEnum.None;
          model.bladderCarcinomaTStageType = TStageTypeEnum.None;
          model.bladderCarcinomaNStageType = NStageTypeEnum.None;
        }
      }
    );
  }

  private initUrinaryBladderColumnModel() {
    const urinaryBladderFindings = this.getUrinaryBladderFindings();
    if (urinaryBladderFindings.length > 0) {
      this.sharedUrinaryBladderColumnModel = new SharedUrinaryBladderColumnModel(
        urinaryBladderFindings[0].isArtifacts,
        urinaryBladderFindings[0].isNotSufficientBladderFilling,
        urinaryBladderFindings[0].isInsertedBladderCatheter,
        urinaryBladderFindings[0].isDoubleJCatheterRight,
        urinaryBladderFindings[0].isDoubleJCatheterLeft
      );
    } else {
      this.sharedUrinaryBladderColumnModel = new SharedUrinaryBladderColumnModel();
    }
  }

  private getUrinaryBladderFindings(): BladderFindingUiModel[] {
    return this.findingHandler.collection.filter(
      finding => this.urinaryBladderFindingTypes.includes(finding.findingType) && !finding.isDeleted
    );
  }

  private updateUrinaryBladderFindings() {
    this.findingHandler.collection
      .filter(finding => this.urinaryBladderFindingTypes.includes(finding.findingType))
      .map(finding => this.setFindingUrinaryBladderColumn(finding));
  }

  private setFindingUrinaryBladderColumn(finding: BladderFindingUiModel) {
    finding.isArtifacts = this.sharedUrinaryBladderColumnModel.isArtifacts;
    finding.isNotSufficientBladderFilling = this.sharedUrinaryBladderColumnModel.isNotSufficientBladderFilling;
    finding.isInsertedBladderCatheter = this.sharedUrinaryBladderColumnModel.isInsertedBladderCatheter;
    finding.isDoubleJCatheterRight = this.sharedUrinaryBladderColumnModel.isDoubleJCatheterRight;
    finding.isDoubleJCatheterLeft = this.sharedUrinaryBladderColumnModel.isDoubleJCatheterLeft;
  }

  onFindingTypeChange() {
    if (this.urinaryBladderFindingTypes.includes(this.findingHandler.currentItem.findingType)) {
      this.setFindingUrinaryBladderColumn(this.findingHandler.currentItem);
    } else if (this.getUrinaryBladderFindings().length === 0) {
      this.resetSharedUrinaryBladderColumnModel();
    }
  }

  onFindingRemoved() {
    if (this.getUrinaryBladderFindings().length === 0) {
      this.resetSharedUrinaryBladderColumnModel();
    }
  }

  resetSharedUrinaryBladderColumnModel() {
    this.sharedUrinaryBladderColumnModel = new SharedUrinaryBladderColumnModel();
  }
}
