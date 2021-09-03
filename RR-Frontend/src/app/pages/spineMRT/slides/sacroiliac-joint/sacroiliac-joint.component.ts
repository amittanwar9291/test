import { Component } from '@angular/core';

import { NavigationService } from '@services/shared';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SacroiliacJointUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-ui.model';
import { SacroiliacJointFindingUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';

import { NgForm, ControlContainer } from '@angular/forms';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SacroiliacJointAreFindingTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliac-joint-are-finding-types.enum';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { SacroiliacJointFindingTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliac-joint-finding-types.enum';
import { JointSurfaceSubTypesEnum } from '@enums/spineMRT/sacroiliac-joint/joint-surface-sub-types.enum';
import { SclerosisTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sclerosis-types.enum';
import { SacroiliacJointEntheitisTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliac-joint-entheitis-types.enum';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';
import { TechnologyUiModel } from '@models/spineMRT/ui/technology/technology-ui.model';
import { ScanAreaTypesEnum } from '@enums/spineMRT/localization/area-of-examination-types.enum';
import { SacroiliacjJointDiagnosisTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliacj-joint-diagnosis-types.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SacroiliacJointValidationModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-validation.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { DialogService } from 'primeng/dynamicdialog';
import { SparccScoreEditorDialogComponent } from './sparcc-score-editor-dialog/sparcc-score-editor-dialog.component';
import { ScoreEditorModel } from '@models/spineMRT/ui/sacroiliac-joint/score-editor.model';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { SacroiliacJointPresetsHttpService } from '@services/spineMRT/http/sacroiliac-joint/sacroiliac-joint-presets-http.service';

@Component({
  selector: 'rr-spine-mrt-sacroiliac-joint',
  templateUrl: './sacroiliac-joint.component.html',
  styleUrls: ['./sacroiliac-joint.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    DialogService,
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SacroiliacJointPresetsHttpService
    }
  ]
})
export class SacroiliacJointComponent extends SlideBaseComponent<SacroiliacJointUiModel> {
  findingHandler: DynamicComponentHandler<SacroiliacJointFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  differentialDiagnosisOptions1: DropdownModel[];
  differentialDiagnosisOptions2: DropdownModel[];

  sacroiliacJointAreFindingTypesEnum = SacroiliacJointAreFindingTypesEnum;
  sacroiliacJointFindingTypesEnum = SacroiliacJointFindingTypesEnum;
  jointSurfaceSubTypesEnum = JointSurfaceSubTypesEnum;
  sclerosisTypesEnum = SclerosisTypesEnum;
  sacroiliacJointEntheitisTypesEnum = SacroiliacJointEntheitisTypesEnum;
  sacroiliacjJointDiagnosisTypesEnum = SacroiliacjJointDiagnosisTypesEnum;

  isDedicatedISGInvestigation: boolean;
  isCMYes: boolean;

  isScoreEditorOpen: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private spineHelperService: SpineHelperService,
    private dialogService: DialogService
  ) {
    super(navService, slideRequestService, changeDetectionService, SacroiliacJointUiModel, commonServices, SacroiliacJointValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SacroiliacJointFindingUiModel);

    this.initializeDynamicDropdownConfig();

    this.registerCallbacks();
    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: SacroiliacJointUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: SacroiliacJointUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      this.isDedicatedISGInvestigation = localizationModel.scanAreaType === ScanAreaTypesEnum.DedicatedSIJScan;
    });
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMYes = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineMRT.sacroiliacJoint.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineMRT.sacroiliacJoint.differentialDiagnosisOptions1.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions1 = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineMRT.sacroiliacJoint.differentialDiagnosisOptions2.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions2 = Object.values(out);
      })
    );
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== this.sacroiliacJointAreFindingTypesEnum.PathologicFinding;
  }

  isPartShown(partName: SacroiliacJointFindingTypesEnum): boolean {
    return this.findingHandler.currentItem.findingType === partName;
  }

  areEntheitisOfTheJointActive(): boolean {
    return this.findingHandler.currentItem.isEnthesitis;
  }

  isDescriptionTypeIKnow(): boolean {
    return this.findingHandler.currentItem.descriptionType === DescriptionTypeEnum.IKnow;
  }

  isDifferentialDiagnosis01Selected(): boolean {
    return (
      this.findingHandler.currentItem.iKnowDifferentialDiagnosis01 !== this.sacroiliacjJointDiagnosisTypesEnum.None ||
      this.findingHandler.currentItem.iDescribeDifferentialDiagnosis01 !== this.sacroiliacjJointDiagnosisTypesEnum.None
    );
  }

  resetSPARCScore(): void {
    this.spineHelperService.resetSPARCScore(this.findingHandler.currentItem);
  }

  private initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.findingType = 'findingType';
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'spi_m_090107';
    columnIds.iDescribeLabelRRId = 'spi_m_090108';
    columnIds.iKnowLabelRRId = 'spi_m_090109';
    columnIds.iDescribeRadioRRId = 'spi_m_090110';
    columnIds.iKnowRadioRRId = 'spi_m_090111';
    columnIds.buttonRRId = 'spi_m_090112';
  }

  clearSecondary() {
    this.findingHandler.currentItem.isSecondary = false;
  }

  toggleScoreEditor() {
    this.dialogService
      .open(SparccScoreEditorDialogComponent, {
        showHeader: false,
        data: {
          model: this.findingHandler.currentItem
        }
      })
      .onClose.subscribe((editorModel: ScoreEditorModel) => {
        if (editorModel) {
          this.findingHandler.currentItem.sparccScore = editorModel.scoreSum;
          this.findingHandler.currentItem.score1 = editorModel.scores.find(item => item.step === 1).data;
          this.findingHandler.currentItem.score2 = editorModel.scores.find(item => item.step === 2).data;
          this.findingHandler.currentItem.score3 = editorModel.scores.find(item => item.step === 3).data;
          this.findingHandler.currentItem.score4 = editorModel.scores.find(item => item.step === 4).data;
          this.findingHandler.currentItem.score5 = editorModel.scores.find(item => item.step === 5).data;
          this.findingHandler.currentItem.score6 = editorModel.scores.find(item => item.step === 6).data;
        }
      });
  }
}
