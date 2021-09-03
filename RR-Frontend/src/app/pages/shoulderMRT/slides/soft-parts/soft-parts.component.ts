import { Component, AfterViewInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftPartsUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-ui.model';
import { MusculatureUiModel } from '@models/shoulderMRT/ui/soft-parts/musculature-ui.model';
import { SoftPartsFindingUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { SoftPartsValidation } from '@models/shoulderMRT/ui/soft-parts/soft-parts-validation.model';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationService } from '@services/shared';

import { SoftPartsFindingTypeEnum } from '@enums/shoulderMRT/soft-parts';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

import { remove } from 'lodash';
import { findingCollectionPreSaveCleanup, findingCollectionPostSaveCleanup } from '@abstractions/dynamic-base/finding-save-cleanup';

@Component({
  selector: 'rr-soft-parts',
  templateUrl: './soft-parts.component.html',
  styleUrls: ['./soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftPartsComponent extends SlideBaseComponent<SoftPartsUiModel> implements AfterViewInit {
  findingHandler: DynamicComponentHandler<SoftPartsFindingUiModel>;
  findingMusculatureHandler: DynamicComponentHandler<MusculatureUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  findingMusculatureDropdownConfig: FindingColumnConfig;

  findingType: typeof SoftPartsFindingTypeEnum;
  areFindings: typeof AreFindingsEnum;

  musculature: FindingDropdownModel[];

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftPartsUiModel, commonServices, SoftPartsValidation);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SoftPartsFindingUiModel);
    this.findingMusculatureHandler = new DynamicComponentHandler(this.logger, [], MusculatureUiModel);

    this.musculature = [];

    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'sho_m_080106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'sho_m_080107';
    this.findingDropdownConfig.subFindings = ['musculatureFindings'];

    this.findingMusculatureDropdownConfig = new FindingColumnConfig();
    this.findingMusculatureDropdownConfig.findingColumnIds.findingRRId = 'sho_m_080303';
    this.findingMusculatureDropdownConfig.findingColumnIds.buttonRRId = 'sho_m_080305';
    this.findingMusculatureDropdownConfig.itemCount = 7;

    this.findingType = SoftPartsFindingTypeEnum;
    this.areFindings = AreFindingsEnum;

    this.registerCallbacks();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: SoftPartsUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
      const findingCurrentItemIndex = this.findingHandler.currentItemIndex;
      this.findingMusculatureHandler.reinitializeCollection(modelOut.findings[findingCurrentItemIndex].musculatureFindings);
    });

    this.registerSaveCallback((modelOut: SoftPartsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
      this.removeDeletedMusculatureFindings(modelOut);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
      this.model.findings.forEach(finding => {
        findingCollectionPreSaveCleanup(finding.musculatureFindings);
      });
    });
  }

  private removeDeletedMusculatureFindings(modelOut: SoftPartsUiModel): void {
    this.model.findings.forEach(finding => {
      const incomingModel = modelOut.findings.find(x => x.scopeId === finding.scopeId);
      if (incomingModel) {
        findingCollectionPostSaveCleanup(finding.musculatureFindings, incomingModel.musculatureFindings);
      }
    });
  }

  updateMusculatureFindingHandler(): void {
    this.findingMusculatureHandler.reinitializeCollection(this.findingHandler.currentItem.musculatureFindings);
  }

  isFindingHeaderDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes || this.findingHandler.currentItem.findingType === SoftPartsFindingTypeEnum.None;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
        this.findingMusculatureDropdownConfig.placeholder = out;
      }),
      this.translate.stream('shoulderMRT.softParts.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shoulderMRT.softParts.findingTypesNested.options').subscribe((out: DropdownModel[]) => {
        this.findingMusculatureDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shoulderMRT.softParts.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shoulderMRT.softParts.addAdditionallyPathology.value').subscribe((out: string) => {
        this.findingMusculatureDropdownConfig.buttonText = out;
      })
    );
  }
}
