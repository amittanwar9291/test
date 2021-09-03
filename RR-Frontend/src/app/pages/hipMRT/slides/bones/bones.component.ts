import { Component, ViewChild } from '@angular/core';
import { values } from 'lodash';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { BonesUiModel } from '@models/hipMRT/ui/bones/bones-ui.model';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { BonesValidationModel } from '@models/hipMRT/ui/bones/bones-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TechnologyUiModel } from '@models/hipMRT/ui/technology/technology-ui.model';
import { SummaryUiModel } from '@models/hipMRT/ui/summary/summary-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { HipBonesLocalizerElementsEnum } from '@enums/hipMRT/bones/hip-bones-localizer-elements.enum';
import { BonesFindingTypeEnum, MassOsteolysisDifferentialDiagnosisTypeEnum } from '@enums/hipMRT/bones/';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TClassificationTypeEnum } from '@enums/hipMRT/summary';
import { IPageConnection } from '@interfaces/page-connection.interface';
import { StressFractureComponent } from './stress-fracture/stress-fracture.component';

@Component({
  selector: 'rr-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss']
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> {
  @ViewChild(StressFractureComponent) stressFractureComponent: StressFractureComponent;

  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  isLargeLocalizerOpened: boolean;
  isExpansionLocalizer: boolean;
  largeLocalizerActiveElements: HipBonesLocalizerElementsEnum[];

  areFindings = AreFindingsEnum;
  findingType = BonesFindingTypeEnum;

  isContrastEnhanced: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BonesFindingUiModel);

    this.registerCallbacks();
    this.registerConnections();
    this.initializeDynamicDropdownConfig();

    const PC09 = this.preparePage9ConnectionObject();
    this.addPageConnection(PC09.pageNr, SummaryUiModel, PC09.condition, PC09.callback);

    this.isLargeLocalizerOpened = false;
    this.isExpansionLocalizer = false;
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  closeLocalizer(): void {
    this.isLargeLocalizerOpened = false;
  }

  openLocalizer(params: { elem: HipBonesLocalizerElementsEnum[]; isExpansion: boolean }): void {
    this.largeLocalizerActiveElements = params.elem;
    this.isLargeLocalizerOpened = true;
    this.isExpansionLocalizer = params.isExpansion;
  }

  initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'hip_m_040106';
    columnIds.iDescribeLabelRRId = 'hip_m_040111';
    columnIds.iKnowLabelRRId = 'hip_m_040112';
    columnIds.iDescribeRadioRRId = 'hip_m_040113';
    columnIds.iKnowRadioRRId = 'hip_m_040114';
    columnIds.buttonRRId = 'hip_m_040107';
    this.findingDropdownConfig.itemCount = 4;
  }

  resetFemoralNeckDependentInStressFracture(): void {
    this.stressFractureComponent?.applyFemoralNeckLogic();
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  private preparePage9ConnectionObject(): IPageConnection<SummaryUiModel> {
    const condition = () => true;
    const callback = (model: SummaryUiModel) => {
      if (!this.isAnyRequiredDDOptionSelected) {
        model.tClassificationType = TClassificationTypeEnum.None;
      }
    };

    return {
      pageNr: 9,
      condition,
      callback
    };
  }

  get isAnyRequiredDDOptionSelected() {
    const diffDiagnosisRequiredOptions = [
      MassOsteolysisDifferentialDiagnosisTypeEnum.EwingSarcoma,
      MassOsteolysisDifferentialDiagnosisTypeEnum.Chondrosarcoma,
      MassOsteolysisDifferentialDiagnosisTypeEnum.Osteosarcoma
    ];
    let isAnyRequiredDDOptionSelectedFlag = false;

    this.model.findings.forEach(finding => {
      if (finding.findingType === BonesFindingTypeEnum.MassOrOsteolysis) {
        isAnyRequiredDDOptionSelectedFlag = [
          finding.mainDiagnosisType,
          finding.differentialDiagnosis1,
          finding.differentialDiagnosis2,
          finding.differentialDiagnosis3
        ].some(el => diffDiagnosisRequiredOptions.includes(el));
      }
    });

    return isAnyRequiredDDOptionSelectedFlag;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('hipMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('hipMRT.bones.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  clearSlidersAndReferencePicture(): void {
    this.findingHandler.currentItem.t1w = 0;
    this.findingHandler.currentItem.t2w = 0;
  }
}
