import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component, OnDestroy } from '@angular/core';
import { SupraaorticVesselsUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-ui.model';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SupraaorticVesselsFindingTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/supraaortic-vessels-finding-type.enum';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SupraaorticVesselsFindingUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { SupraaorticVesselsValidationModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-validation.model';
import { SupraaorticVesselsHelperService, SupraaorticVesselsLoclizerType } from './supraaortic-vessels-helper.service';
import { Subscription } from 'rxjs';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/angiographyCT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-supraaortic-vessels',
  templateUrl: './supraaortic-vessels.component.html',
  styleUrls: ['./supraaortic-vessels.component.scss']
})
export class SupraaorticVesselsComponent extends SlideBaseComponent<SupraaorticVesselsUiModel> implements OnDestroy {
  largeLocalizerOpened: SupraaorticVesselsLoclizerType;
  isLargeLocalizerOpenedSubscription: Subscription;

  findingHandler: DynamicComponentHandler<SupraaorticVesselsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  supraaorticVesselsLoclizerType = SupraaorticVesselsLoclizerType;
  supraaorticVesselsFindingTypeEnum = SupraaorticVesselsFindingTypeEnum;
  areFindingsEnum = AreFindingsEnum;

  isCMYes: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private supraaorticVesselsHelperService: SupraaorticVesselsHelperService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      SupraaorticVesselsUiModel,
      commonServices,
      SupraaorticVesselsValidationModel
    );

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SupraaorticVesselsFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallback();
    this.registerConnection();

    this.isLargeLocalizerOpenedSubscription = this.supraaorticVesselsHelperService.isLargeLocalizerOpened.subscribe(
      (v: SupraaorticVesselsLoclizerType) => {
        return (this.largeLocalizerOpened = v);
      }
    );
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: SupraaorticVesselsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: SupraaorticVesselsUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyCT.supraaorticVessels.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyCT.supraaorticVessels.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
        this.findingDropdownConfig.translationBits = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyCT.supraaorticVessels.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_c_050106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_c_050107';
    this.findingDropdownConfig.itemCount = 9;
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  isFindingType(type: SupraaorticVesselsFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }
  isArteryFindingType(): boolean {
    const arteryFindings = [
      SupraaorticVesselsFindingTypeEnum.AnatomicVariants,
      SupraaorticVesselsFindingTypeEnum.CerebralVeinsOrVenousSinuses,
      SupraaorticVesselsFindingTypeEnum.None
    ];
    return !arteryFindings.includes(this.findingHandler.currentItem.findingType);
  }

  onLargeLocalizerClosed() {
    this.supraaorticVesselsHelperService.isLargeLocalizerOpened.next(null);
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMYes = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.supraaorticVesselsHelperService.isLargeLocalizerOpened.next(null);
    this.isLargeLocalizerOpenedSubscription.unsubscribe();
  }
}
