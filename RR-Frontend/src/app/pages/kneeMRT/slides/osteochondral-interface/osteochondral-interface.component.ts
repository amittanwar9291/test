import { Component } from '@angular/core';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { OsteochondralInterfaceUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-ui.model';
import { OsteochondralInterfaceFindingUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-finding-ui.model';
import { OsteochondralInterfaceTranslations } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-translations';
import { OsteochondralInterfaceValidationModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-validation-model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { FindingTypeEnum } from '@enums/kneeMRT/osteochondral-interface';

@Component({
  selector: 'rr-knee-mrt-osteochondral-interface',
  templateUrl: './osteochondral-interface.component.html',
  styleUrls: ['./osteochondral-interface.component.scss']
})
export class OsteochondralInterfaceComponent extends SlideBaseComponent<OsteochondralInterfaceUiModel> {
  findingHandler: DynamicComponentHandler<OsteochondralInterfaceFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  areFindings: typeof AreFindingsEnum;
  findingType: typeof FindingTypeEnum;

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
      OsteochondralInterfaceUiModel,
      commonServices,
      OsteochondralInterfaceValidationModel
    );
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, OsteochondralInterfaceFindingUiModel);

    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'kne_m_060106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'kne_m_060107';
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.translationBits = new OsteochondralInterfaceTranslations();

    this.areFindings = AreFindingsEnum;
    this.findingType = FindingTypeEnum;

    this.registerCallbacks();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: OsteochondralInterfaceUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: OsteochondralInterfaceUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  getCustomLabel(
    index: number,
    findingHandler: DynamicComponentHandler<OsteochondralInterfaceFindingUiModel>,
    translationBits: OsteochondralInterfaceTranslations
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

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('kneeMRT.osteoInterface.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),

      this.translate.stream('kneeMRT.osteoInterface.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),

      this.translate.stream('kneeMRT.osteoInterface.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),

      this.translate.stream('kneeMRT.osteoInterface.translationBits').subscribe((out: OsteochondralInterfaceTranslations) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }
}
