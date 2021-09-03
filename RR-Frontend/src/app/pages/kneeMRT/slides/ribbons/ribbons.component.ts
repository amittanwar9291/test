import { Component } from '@angular/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { RibbonsFindingUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-finding-ui.model';
import { RibbonsUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-ui.model';
import { RibbonsTranslations } from '@models/kneeMRT/ui/ribbons/ribbons-translations';
import { RibbonsValidationModel } from '@models/kneeMRT/ui/ribbons/ribbons-validation-model';

import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationService } from '@services/shared';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { RibbonsFindingTypeEnum } from '@enums/kneeMRT/ribbons';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

@Component({
  selector: 'rr-knee-mrt-ribbons',
  templateUrl: './ribbons.component.html',
  styleUrls: ['./ribbons.component.scss']
})
export class RibbonsComponent extends SlideBaseComponent<RibbonsUiModel> {
  findingHandler: DynamicComponentHandler<RibbonsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  findingType: typeof RibbonsFindingTypeEnum;
  areFindings: typeof AreFindingsEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, RibbonsUiModel, commonServices, RibbonsValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, RibbonsFindingUiModel);

    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'kne_m_050106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'kne_m_050107';
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.translationBits = new RibbonsTranslations();

    this.findingType = RibbonsFindingTypeEnum;
    this.areFindings = AreFindingsEnum;

    this.registerCallbacks();
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: RibbonsUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: RibbonsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  getCustomLabel(
    index: number,
    findingHandler: DynamicComponentHandler<RibbonsFindingUiModel>,
    translationBits: RibbonsTranslations
  ): string {
    let result = '';
    if (findingHandler) {
      const findingType = findingHandler.collection[index].findingType;
      if (findingType) {
        result = translationBits[findingType];
      }
    }
    return result;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('kneeMRT.ribbons.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('kneeMRT.ribbons.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('kneeMRT.ribbons.translationBits').subscribe((out: any) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }
}
