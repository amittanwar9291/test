import { Component, OnDestroy } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { VesselsUiModel } from '@models/neckMRT/ui/vessels/vessels-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { VesselsFindingTypeEnum } from '@enums/neckMRT/vessels';
import { TechnologyUiModel } from '@models/neckMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { VesselsValidationModel } from '@models/neckMRT/ui/vessels/vessels-validation.model';
import { SupraaorticVesselsHelperService, SupraaorticVesselsLocalizerType } from './supraaortic-vessels-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss']
})
export class VesselsComponent extends SlideBaseComponent<VesselsUiModel> implements OnDestroy {
  largeLocalizerOpened: SupraaorticVesselsLocalizerType;
  isLargeLocalizerOpenedSubscription: Subscription;
  supraaorticVesselsLocalizerType = SupraaorticVesselsLocalizerType;

  findingHandler: DynamicComponentHandler<VesselsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindings = AreFindingsEnum;
  findingType = VesselsFindingTypeEnum;

  isContrastEnhanced: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private supraaorticVesselsHelperService: SupraaorticVesselsHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, VesselsUiModel, commonServices, VesselsValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, VesselsFindingUiModel);
    this.initFindingColumnConfig();
    this.registerCallbacks();
    this.registerConnections();

    this.isLargeLocalizerOpenedSubscription = this.supraaorticVesselsHelperService.isLargeLocalizerOpened.subscribe(
      (v: SupraaorticVesselsLocalizerType) => (this.largeLocalizerOpened = v)
    );
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: VesselsUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: VesselsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('neckMRT.vessels.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('neckMRT.vessels.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'nec_m_090107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'nec_m_090106';
  }

  onLargeLocalizerCosed(): void {
    this.supraaorticVesselsHelperService.isLargeLocalizerOpened.next(null);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.supraaorticVesselsHelperService.isLargeLocalizerOpened.next(null);
    this.isLargeLocalizerOpenedSubscription.unsubscribe();
  }
}
