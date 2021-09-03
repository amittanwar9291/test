import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { VesselsUiModel } from '@models/headCT/ui/vessels/vessels-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { VesselsFindingTypeEnum } from '@enums/headCT/vessels/vessels-finding-type.enum';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { VesselsHelperService } from './vessels-helper.service';
import { TechnologyUiModel } from '@models/headCT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { VesslesValidationModel } from '@models/headCT/ui/vessels/vessels-validation.model';
import { HeadCTVesselsLocalizersTypeEnum } from '@enums/headCT/vessels/headCT-vessels-localizers-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VesselsComponent extends SlideBaseComponent<VesselsUiModel> {
  areFindingsEnum = AreFindingsEnum;
  vesselsFindingTypeEnum = VesselsFindingTypeEnum;
  findingHandler: DynamicComponentHandler<VesselsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  headCTVesselsLocalizersTypeEnum = HeadCTVesselsLocalizersTypeEnum;
  largeLocalizerOpen: HeadCTVesselsLocalizersTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private vesselsHelperService: VesselsHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, VesselsUiModel, commonServices, VesslesValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, VesselsFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();
    this.initLargeLocalizerOpenSubscription();
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

  private registerConnection(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.vesselsHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isFindingType(type: VesselsFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headCT.vessels.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headCT.vessels.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<VesselsFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.autoConfigFindingRRId = 'hea_c_040106';
    this.findingDropdownConfig.itemCount = 7;
  }

  initLargeLocalizerOpenSubscription(): void {
    this.subscriptions.push(
      this.vesselsHelperService.openLocalizer.subscribe(
        (localizerType: HeadCTVesselsLocalizersTypeEnum) => (this.largeLocalizerOpen = localizerType)
      )
    );
  }

  onLargeLocalizerClose(): void {
    this.vesselsHelperService.openLocalizer.next(null);
  }
}
