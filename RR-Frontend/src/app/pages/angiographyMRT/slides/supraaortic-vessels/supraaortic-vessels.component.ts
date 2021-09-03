import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SupraaorticVesselsUiModel } from '@models/angiographyMRT/ui/supraaortic-vessels/supraaortic-vessels-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SupraaorticVesselsFindingUi } from '@models/angiographyMRT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SupraaorticVesselsHelperService, SupraaorticVesselsLoclizerType } from './supraaortic-vessels-helper.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SupraaorticVesselsValidationModel } from '@models/angiographyMRT/ui/supraaortic-vessels/supraaortic-vessels-validation.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { SupraaorticVesselsFindingTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/supraaortic-vessels-finding-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { TechnologyUiModel } from '@models/spineMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-supraaortic-vessels',
  templateUrl: './supraaortic-vessels.component.html',
  styleUrls: ['./supraaortic-vessels.component.scss']
})
export class SupraaorticVesselsComponent extends SlideBaseComponent<SupraaorticVesselsUiModel> implements OnDestroy {
  largeLocalizerOpened: SupraaorticVesselsLoclizerType;
  isLargeLocalizerOpenedSubscription: Subscription;

  findingHandler: DynamicComponentHandler<SupraaorticVesselsFindingUi>;
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

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SupraaorticVesselsFindingUi);
    this.initDynamicComponentConfig();
    this.registerCallback();
    this.registerConnection();

    this.isLargeLocalizerOpenedSubscription = this.supraaorticVesselsHelperService.isLargeLocalizerOpened.subscribe(
      (v: SupraaorticVesselsLoclizerType) => (this.largeLocalizerOpened = v)
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

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMYes = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.supraaorticVessels.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyMRT.supraaorticVessels.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
        this.findingDropdownConfig.translationBits = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyMRT.supraaorticVessels.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_m_040106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_m_040107';
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

  onLargeLocalizerCosed() {
    this.supraaorticVesselsHelperService.isLargeLocalizerOpened.next(null);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.supraaorticVesselsHelperService.isLargeLocalizerOpened.next(null);
    this.isLargeLocalizerOpenedSubscription.unsubscribe();
  }
}
