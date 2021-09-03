import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsExtendedEnum, PancreasFindingTypeEnum } from '@enums/abdomenMRT/pancreas';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { PancreasUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-ui.model';
import { PancreasValidationModel } from '@models/abdomenMRT/ui/pancreas/pancreas-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/abdomenMRT/ui/technology/technology-ui.model';
import { WeightingTypeEnum } from '@enums/shared/technology';

@Component({
  selector: 'rr-pancreas',
  templateUrl: './pancreas.component.html',
  styleUrls: ['./pancreas.component.scss']
})
export class PancreasComponent extends SlideBaseComponent<PancreasUiModel> {
  findingHandler: DynamicComponentHandler<PancreasFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  isCMReinforced: boolean;
  isDWI: boolean;

  areFindings: typeof AreFindingsExtendedEnum;
  findingType: typeof PancreasFindingTypeEnum;

  acutePancreatitisOptions: DropdownModel[];
  mainMassOptions1: DropdownModel[];
  mainMassOptions2: DropdownModel[];
  diffuseParenchymaOptions: DropdownModel[];
  contrastEnhancementDistributionDropdown: DropdownModel[];
  diffuseParenchymalDifferentialDiagnosis1Options: DropdownModel[];

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, PancreasUiModel, commonServices, PancreasValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, PancreasFindingUiModel);
    this.initFindingColumnConfig();
    this.registerCallbacks();
    this.registerConnections();

    this.areFindings = AreFindingsExtendedEnum;
    this.findingType = PancreasFindingTypeEnum;
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: PancreasUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: PancreasUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMReinforced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.isDWI = technologyModel.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted);
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.pancreas.findingTypes').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.pancreas.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('abdomenMRT.pancreas.acutePancreatitisOptions.options').subscribe((out: DropdownModel[]) => {
        this.acutePancreatitisOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.pancreas.mainMassOptions1').subscribe((out: DropdownModel[]) => {
        this.mainMassOptions1 = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.pancreas.mainMassOptions2').subscribe((out: DropdownModel[]) => {
        this.mainMassOptions2 = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.pancreas.diffuseParenchymaOptions').subscribe((out: DropdownModel[]) => {
        this.diffuseParenchymaOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.pancreas.contrastEnhancementDistributionOptions.options').subscribe((out: DropdownModel[]) => {
        this.contrastEnhancementDistributionDropdown = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.pancreas.diffuseParenchymaOptions').subscribe((out: DropdownModel[]) => {
        this.diffuseParenchymalDifferentialDiagnosis1Options = Object.values(out);
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'abd_m_060106';
  }

  get isFindingWithTabs(): boolean {
    return [
      PancreasFindingTypeEnum.AcutePancreatitis,
      PancreasFindingTypeEnum.Mass,
      PancreasFindingTypeEnum.DiffuseParenchymalChanges
    ].includes(this.findingHandler.currentItem.findingType);
  }
}
