import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { LiverFindingTypeEnum, LiverAreFindingsEnum } from '@enums/abdomenMRT/liver';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { LiverUiModel } from '@models/abdomenMRT/ui/liver/liver-ui.model';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LiverValidationModel } from '@models/abdomenMRT/ui/liver/liver-validation.model';
import { TechnologyUiModel } from '@models/abdomenMRT/ui/technology/technology-ui.model';
import { SequenceUiModel } from '@models/abdomenMRT/ui/technology/sequence-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { LiverHelperService } from './liver-helper.service';
import { SummaryUiModel } from '@models/abdomenMRT/ui/summary/summary-ui.model';
import { LiRADSTreatmentResponseCategoryTypeEnum } from '@enums/abdomenMRT/summary';

@Component({
  selector: 'rr-liver',
  templateUrl: './liver.component.html',
  styleUrls: ['./liver.component.scss']
})
export class LiverComponent extends SlideBaseComponent<LiverUiModel> {
  focalLiverLesionDDOptions1: DropdownModel[];
  focalLiverLesionDDOptions2: DropdownModel[];
  diffuseParenchymalChangesDDOptions: DropdownModel[];
  gallBladderWallThickeningDDOptions: DropdownModel[];
  bileDuctNormVariantDDOptions: DropdownModel[];
  biliaryDuctalDilatationDDOptions: DropdownModel[];
  bileDuctLeakageDDOptions: DropdownModel[];
  bileDuctMassDDOptions: DropdownModel[];
  growthPatternsDDOptions: DropdownModel[];

  findingHandler: DynamicComponentHandler<LiverFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindings = LiverAreFindingsEnum;
  findingType = LiverFindingTypeEnum;

  isLargeLocalizerOpened: boolean;
  isDWIInAnySequence: boolean;
  isGadotericAcid: boolean;
  isGadotericAcidOrGadobenicAcid: boolean;
  isCMReinforced: boolean;
  isOneLocalizerSectionSelected: boolean;

  isLiverPathologyLocalizerOpened: boolean;
  isLiverPathologyLocalizerOpened2: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private liverHelperService: LiverHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, LiverUiModel, commonServices, LiverValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, LiverFindingUiModel);
    this.initFindingColumnConfig();

    this.registerCallbacks();
    this.registerConnection();
    this.addConnection();

    this.subscriptions.push(
      this.liverHelperService.isLocalizerOpened.subscribe(v => {
        this.isLargeLocalizerOpened = v;
      })
    );
    this.isLiverPathologyLocalizerOpened = false;
    this.isLiverPathologyLocalizerOpened2 = false;
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: LiverUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: LiverUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.liverHelperService.isCMReinforced.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
      this.liverHelperService.isDWIInAnySequence.next(
        technologyModel && technologyModel.sequences.some((model: SequenceUiModel) => model.weightingType === 'DWI')
      );
      this.liverHelperService.technologyContrastMediumType.next(technologyModel.contrastMediumType);
    });
  }

  addConnection() {
    this.addPageConnection(
      12,
      SummaryUiModel,
      () => {
        return true;
      },
      (model: SummaryUiModel) => {
        if (this.model.findings.filter(item => item.findingType !== LiverFindingTypeEnum.FocalLiverLesion)) {
          model.liRADSCategoryType = 0;
          model.liRADSTreatmentResponseCategoryType = LiRADSTreatmentResponseCategoryTypeEnum.None;
        }
      }
    );
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.liver.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.liver.focalLiverLesionDDOptions1.options').subscribe((out: DropdownModel[]) => {
        this.focalLiverLesionDDOptions1 = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.liver.focalLiverLesionDDOptions2.options').subscribe((out: DropdownModel[]) => {
        this.focalLiverLesionDDOptions2 = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.liver.diffuseParenchymalChangesDDOptions.options').subscribe((out: DropdownModel[]) => {
        this.diffuseParenchymalChangesDDOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.liver.gallBladderWallThickeningDDOptions.options').subscribe((out: DropdownModel[]) => {
        this.gallBladderWallThickeningDDOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.liver.bileDuctNormVariantDDOptions.options').subscribe((out: DropdownModel[]) => {
        this.bileDuctNormVariantDDOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.liver.biliaryDuctalDilatationDDOptions.options').subscribe((out: DropdownModel[]) => {
        this.biliaryDuctalDilatationDDOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.liver.bileDuctLeakageDDOptions.options').subscribe((out: DropdownModel[]) => {
        this.bileDuctLeakageDDOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.liver.bileDuctMassDDOptions.options').subscribe((out: DropdownModel[]) => {
        this.bileDuctMassDDOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.liver.growthPatternsDDOptions.options').subscribe((out: DropdownModel[]) => {
        this.growthPatternsDDOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.liver.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'abd_m_040106';
    columnIds.iDescribeLabelRRId = 'abd_m_040114';
    columnIds.iKnowLabelRRId = 'abd_m_040109';
    columnIds.iDescribeRadioRRId = 'abd_m_040110';
    columnIds.iKnowRadioRRId = 'abd_m_040111';
    columnIds.buttonRRId = 'abd_m_040107';
  }

  get isFindingWithTabs(): boolean {
    return [
      LiverFindingTypeEnum.FocalLiverLesion,
      LiverFindingTypeEnum.DiffuseParenchymalChanges,
      LiverFindingTypeEnum.BileDuctMass,
      LiverFindingTypeEnum.BiliaryDuctalDilatation
    ].includes(this.findingHandler.currentItem.findingType);
  }

  get findingHeaderStyles(): string {
    if (this.isFindingWithTabs) {
      return 'm-h-53 c-pad-l';
    } else if (this.findingHandler.currentItem.findingType === LiverFindingTypeEnum.GallbladderWallThickening) {
      return 'm-h-124';
    } else {
      return 'm-h-143';
    }
  }

  closeLocalizer(): void {
    this.liverHelperService.isLocalizerOpened.next(false);
  }

  openLocalizer(): void {
    this.isLargeLocalizerOpened = true;
  }

  resetDoubleDuct(): boolean {
    if (!this.findingHandler.currentItem.liverPathologyLocations.ductusCholedochusCloseToPapilla) {
      return (this.findingHandler.currentItem.isDoubleDuctSign = false);
    }
  }

  conditionallyDisableReferencePicture(): void {
    this.liverHelperService.checkIfShouldDisableReferencePicture(this.findingHandler.currentItem);
  }
  closeLiverPathologyLocalizer(): void {
    this.isLiverPathologyLocalizerOpened = false;
  }

  openLiverPathologyLocalizer(): void {
    this.isLiverPathologyLocalizerOpened = true;
  }
  closeLiverPathologyLocalizer2(): void {
    this.isLiverPathologyLocalizerOpened2 = false;
  }

  openLiverPathologyLocalizer2(): void {
    this.isLiverPathologyLocalizerOpened2 = true;
  }
}
