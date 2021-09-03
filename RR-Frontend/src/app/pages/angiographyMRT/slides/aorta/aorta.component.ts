import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { NavigationService } from '@services/shared';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { AortaHelperService } from './aorta-helper.service';
import { AortaUiModel } from '@models/angiographyMRT/ui/aorta/aorta-ui.model';
import { AortaFindingUiModel } from '@models/angiographyMRT/ui/aorta/aorta-finding-ui.model';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AortaValidationModel } from '@models/angiographyMRT/ui/aorta/aorta-validation.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { nameof } from 'ts-simple-nameof';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { AortaFindingTypeEnum } from '@enums/angiographyMRT/aorta/aorta-finding-type.enum';
import { TechnologyUiModel } from '@models/angiographyMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-aorta',
  templateUrl: './aorta.component.html',
  styleUrls: ['./aorta.component.scss']
})
export class AortaComponent extends SlideBaseComponent<AortaUiModel> implements OnDestroy {
  largeLocalizerOpened: boolean;
  isLargeLocalizerOpenedSubscription: Subscription;
  localizationModelType: string;
  isLocalizerSingleChoice: boolean;

  areFindingsEnum = AreFindingsEnum;
  aortaFindingTypeEnum = AortaFindingTypeEnum;

  findingHandler: DynamicComponentHandler<AortaFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private aortaHelperService: AortaHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, AortaUiModel, commonServices, AortaValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, AortaFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerConnection();
    this.registerCallback();

    this.isLargeLocalizerOpenedSubscription = this.aortaHelperService.isLargeLocalizerOpened.subscribe(v => {
      this.largeLocalizerOpened = !!v;
      if (v) {
        this.localizationModelType = v.isLocalizationReentry
          ? nameof<AortaFindingUiModel>(m => m.aortaLocationReentry)
          : nameof<AortaFindingUiModel>(m => m.aortaLocation);
        this.isLocalizerSingleChoice = v.isSingleChoice;
      }
    });
  }
  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.aortaHelperService.isCMYes.next(technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: AortaUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: AortaUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_m_060106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_m_060107';
    this.findingDropdownConfig.itemCount = 9;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.aorta.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyMRT.aorta.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
        this.findingDropdownConfig.translationBits = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyMRT.aorta.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isFindingType(type: AortaFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  onLargeLocalizerCosed() {
    this.aortaHelperService.isLargeLocalizerOpened.next(null);
    if (Object.values(this.findingHandler.currentItem[this.localizationModelType]).filter(elem => elem).length > 0) {
      this.validationHelperService.removeError(this.localizationModelType);
    }
  }

  ngOnDestroy() {
    this.aortaHelperService.isLargeLocalizerOpened.next(null);
    super.ngOnDestroy();
    this.isLargeLocalizerOpenedSubscription.unsubscribe();
  }
}
