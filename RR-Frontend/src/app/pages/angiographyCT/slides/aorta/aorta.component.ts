import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/angiographyCT';
import { AortaFindingTypeEnum } from '@enums/angiographyCT/aorta/aorta-finding-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { AortaFindingUiModel } from '@models/angiographyCT/ui/aorta/aorta-finding-ui.model';
import { AortaUiModel } from '@models/angiographyCT/ui/aorta/aorta-ui.model';
import { AortaValidationModel } from '@models/angiographyCT/ui/aorta/aorta-validation.model';
import { TechnologyUiModel } from '@models/angiographyCT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { nameof } from 'ts-simple-nameof';
import { AortaHelperService } from './aorta-helper.service';

@Component({
  selector: 'rr-aorta',
  templateUrl: './aorta.component.html',
  styleUrls: ['./aorta.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AortaComponent extends SlideBaseComponent<AortaUiModel> implements OnDestroy {
  largeLocalizerOpened: boolean;
  isLargeLocalizerOpenedSubscription: Subscription;
  localizationModelType: string;
  isLocalizerSingleChoice: boolean;
  isLocalizerAdjacentChoice: boolean;
  isLocalizerAortaDivided: boolean;

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
          ? nameof<AortaFindingUiModel>(m => m.aortaLocations2)
          : nameof<AortaFindingUiModel>(m => m.aortaLocations1);
        this.isLocalizerSingleChoice = v.isSingleChoice;
        this.isLocalizerAdjacentChoice = v.isAdjacentChoice;
        this.isLocalizerAortaDivided = v.isArcusAortaeDivided;
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
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_c_070106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_c_070107';
    this.findingDropdownConfig.itemCount = 8;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyCT.aorta.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
        this.findingDropdownConfig.translationBits = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyCT.aorta.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  isNoMorePathologiesDisabled(): boolean {
    const shouldBeDisabled =
      this.model.areFindings === this.areFindingsEnum.False ||
      this.findingHandler.collection.filter(finding => finding.findingType !== AortaFindingTypeEnum.None && !finding.isDeleted).length ===
        0;

    if (shouldBeDisabled) {
      this.model.isNoMoreAorticPathologies = false;
    }
    return shouldBeDisabled;
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.True;
  }

  isFindingType(type: AortaFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  onLargeLocalizerClosed() {
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
