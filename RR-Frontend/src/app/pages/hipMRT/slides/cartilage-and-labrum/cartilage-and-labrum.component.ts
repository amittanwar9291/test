import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { CartilageAndLabrumFindingUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CartilageAndLabrumUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-ui.model';
import { CartilageTranslations } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-translations';
import { CartilageAndLabrumValidationModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-validation.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { FindingTypeEnum } from '@enums/hipMRT/cartilage-and-labrum';
import { nameof } from 'ts-simple-nameof';

import { values } from 'lodash';

@Component({
  selector: 'rr-cartilage-and-labrum',
  templateUrl: './cartilage-and-labrum.component.html',
  styleUrls: ['./cartilage-and-labrum.component.scss']
})
export class CartilageAndLabrumComponent extends SlideBaseComponent<CartilageAndLabrumUiModel> {
  findingHandler: DynamicComponentHandler<CartilageAndLabrumFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  isLargeLocalizerOpened: boolean;
  areFindings = AreFindingsEnum;
  findingType = FindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      CartilageAndLabrumUiModel,
      commonServices,
      CartilageAndLabrumValidationModel
    );

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, CartilageAndLabrumFindingUiModel);
    this.registerCallbacks();
    this.findingsConfiguration();
    this.isLargeLocalizerOpened = false;
  }

  private registerCallbacks() {
    this.registerSaveCallback((modelOut: CartilageAndLabrumUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: CartilageAndLabrumUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  closeLocalizer(): void {
    this.isLargeLocalizerOpened = false;
    this.model.findings.forEach((finding: CartilageAndLabrumFindingUiModel) => {
      if (Object.values(finding.cartilageLocalizer).some((val: boolean) => !!val)) {
        this.validationHelperService.removeError(
          nameof<CartilageAndLabrumFindingUiModel>(m => m.cartilageLocalizer),
          finding.validationId
        );
      }
    });
  }

  openLocalizer(): void {
    this.isLargeLocalizerOpened = true;
  }

  findingsConfiguration(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'hip_m_050107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'hip_m_050106';
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  getCustomLabel(
    index: number,
    findingHandler: DynamicComponentHandler<CartilageAndLabrumFindingUiModel>,
    translationBits: CartilageTranslations
  ): string {
    const currSelected = findingHandler.collection[index].findingType;
    const keys = Object.keys(translationBits);
    let result = '';

    const titleKey = keys.find(x => x.toUpperCase() === currSelected.toUpperCase());
    result = translationBits[titleKey];
    const value = findingHandler.collection[index].sideType;
    const valueKey = keys.find(x => x.toUpperCase() === value.toUpperCase());
    if (valueKey) {
      result += ' ' + translationBits[valueKey];
    }

    return result;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('hipMRT.cartilageAndLabrum.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('hipMRT.cartilageAndLabrum.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('hipMRT.cartilageAndLabrum.cartilageTranslations').subscribe((out: CartilageTranslations) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }
}
