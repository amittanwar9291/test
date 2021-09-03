import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { MainSoftPartsFindingTypeEnum } from '@enums/kneeMRT/soft-parts/soft-parts-finding-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { SoftPartsUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-ui.model';
import { SoftPartsValidationModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-validation.model';
import { TechnologyUiModel } from '@models/kneeMRT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

@Component({
  selector: 'rr-knee-mrt-soft-parts',
  templateUrl: './soft-parts.component.html',
  styleUrls: ['./soft-parts.component.scss']
})
export class SoftPartsComponent extends SlideBaseComponent<SoftPartsUiModel> {
  findingTypes: DropdownModel[];
  findingHandler: DynamicComponentHandler<SoftPartsFindingUiModel>;
  currentItemIndex: number;
  placeholder: string;
  synoviaDifferentialDiagnosisOptions: DropdownModel[];
  findingDropdownConfig: FindingColumnConfig;

  cmReinforcedType: typeof SimpleAnswerEnum;
  isCMReinforcedTypeYes = false;

  findingType: typeof MainSoftPartsFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftPartsUiModel, commonServices, SoftPartsValidationModel);
    this.findingType = MainSoftPartsFindingTypeEnum;
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SoftPartsFindingUiModel);

    this.cmReinforcedType = SimpleAnswerEnum;

    this.initializeDynamicDropdownConfig();

    this.registerCallbacks();

    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: SoftPartsUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: SoftPartsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (modelTechnology: TechnologyUiModel) => {
      this.isCMReinforcedTypeYes = modelTechnology.cmReinforcedType === this.cmReinforcedType.Yes;
    });
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.autoConfigFindingRRId = 'kne_m_080106';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('kneeMRT.softParts.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('kneeMRT.softParts.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('kneeMRT.softParts.addNewFindings.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );

    this.subscriptions.push(
      this.translate.stream('kneeMRT.softParts.differentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.synoviaDifferentialDiagnosisOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  isCurrentItem(item: string): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }
}
