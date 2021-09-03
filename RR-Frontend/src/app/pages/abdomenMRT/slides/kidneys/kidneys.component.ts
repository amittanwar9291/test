import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { KidneysUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-ui.model';
import { KidneysValidationModel } from '@models/abdomenMRT/ui/kidneys/kidneys-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { TechnologyUiModel } from '@models/neckMRT/ui/technology/technology-ui.model';
import { KidneysFindingTypeEnum } from '@enums/abdomenMRT/kidneys';
import { AreFindingsEnum } from '@enums/abdomenMRT/kidneys/';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';

@Component({
  selector: 'rr-kidneys',
  templateUrl: './kidneys.component.html',
  styleUrls: ['./kidneys.component.scss']
})
export class KidneysComponent extends SlideBaseComponent<KidneysUiModel> {
  findingHandler: DynamicComponentHandler<KidneysFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  isCMReinforced: boolean;
  isDWI: boolean;

  massDifferentialDiagnosis1: DropdownModel[];
  massDifferentialDiagnosis2And3: DropdownModel[];
  bosniakClassification: DropdownModel[];
  increasedRenalVolumeDifferentialDiagnosis: DropdownModel[];
  decreasedRenalVolumeDifferentialDiagnosis: DropdownModel[];
  severityOptions: DropdownModel[];
  associatedCausalFindingsOptions: DropdownModel[];
  ureterOptions: DropdownModel[];
  extensionOptions: DropdownModel[];

  areFindings = AreFindingsEnum;
  findingType = KidneysFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, KidneysUiModel, commonServices, KidneysValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, KidneysFindingUiModel);
    this.initFindingColumnConfig();

    this.registerCallbacks();
    this.registerConnections();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: KidneysUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: KidneysUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMReinforced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.isDWI = technologyModel.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI);
    });
  }

  isFindingWithTabs(): boolean {
    return [
      KidneysFindingTypeEnum.ObstructiveNephropathy,
      KidneysFindingTypeEnum.Mass,
      KidneysFindingTypeEnum.DecreasedRenalVolume,
      KidneysFindingTypeEnum.IncreasedRenalVolume
    ].includes(this.findingHandler.currentItem.findingType);
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.kidneys.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.kidneys.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('abdomenMRT.kidneys.massDifferentialDiagnosis1Options.options').subscribe((out: DropdownModel[]) => {
        this.massDifferentialDiagnosis1 = out;
      }),
      this.translate.stream('abdomenMRT.kidneys.massDifferentialDiagnosis2And3Options.options').subscribe((out: DropdownModel[]) => {
        this.massDifferentialDiagnosis2And3 = out;
      }),
      this.translate.stream('abdomenMRT.kidneys.bosniakClassificationOptions.options').subscribe((out: DropdownModel[]) => {
        this.bosniakClassification = out;
      }),
      this.translate
        .stream('abdomenMRT.kidneys.decreasedRenalVolumeDifferentialDiagnosisOptions.options')
        .subscribe((out: DropdownModel[]) => {
          this.decreasedRenalVolumeDifferentialDiagnosis = out;
        }),
      this.translate
        .stream('abdomenMRT.kidneys.increasedRenalVolumeDifferentialDiagnosisOptions.options')
        .subscribe((out: DropdownModel[]) => {
          this.increasedRenalVolumeDifferentialDiagnosis = out;
        }),
      this.translate.stream('abdomenMRT.kidneys.severityOptions.options').subscribe((out: DropdownModel[]) => {
        this.severityOptions = out;
      }),
      this.translate.stream('abdomenMRT.kidneys.associatedCausalFindingsOptions.options').subscribe((out: DropdownModel[]) => {
        this.associatedCausalFindingsOptions = out;
      }),
      this.translate.stream('abdomenMRT.kidneys.ureterOptions.options').subscribe((out: DropdownModel[]) => {
        this.ureterOptions = out;
      }),
      this.translate.stream('abdomenMRT.kidneys.extensionOptions.options').subscribe((out: DropdownModel[]) => {
        this.extensionOptions = out;
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'abd_m_070106';
    columnIds.iDescribeLabelRRId = 'tho_m_040112';
    columnIds.iKnowLabelRRId = 'tho_m_0401009';
    columnIds.iDescribeRadioRRId = 'tho_m_040110';
    columnIds.iKnowRadioRRId = 'tho_m_040111';
    columnIds.buttonRRId = 'abd_m_070107';
  }
}
