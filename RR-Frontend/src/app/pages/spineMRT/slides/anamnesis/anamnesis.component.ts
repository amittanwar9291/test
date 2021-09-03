import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { AnamnesisUiModel } from '@models/spineMRT/ui/anamnesis/anamnesis-ui.model';

import { NavigationService } from '@services/shared';

import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { AnamnesisInterventionUiModel } from '@models/spineMRT/ui/anamnesis/anamnesis-intervention-ui.model';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { InterventionTypesEnum } from '@enums/spineMRT/anamnesis/intervention-types.enum';
import { DetailInterventionTypesEnum } from '@enums/spineMRT/anamnesis/detail-intervention-types.enum';
import { ComplaintsTypesEnum } from '@enums/spineMRT/anamnesis/complaints-types.enum';
import { SideTypesEnum } from '@enums/spineMRT/anamnesis/side-types.enum';
import { AnamnesisValidationModel } from '@models/spineMRT/ui/anamnesis/anamnesis-validation.model';
import { nameof } from 'ts-simple-nameof';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';

@Component({
  selector: 'rr-spine-mrt-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  spinelocation: SpineLocation = new SpineLocation();
  placeholder: string;
  bigLocalizerShown: boolean;
  spineLocalizerPermittedSelection: SpineLocation;

  interventionHandler: DynamicComponentHandler<AnamnesisInterventionUiModel>;
  interventionDropdownConfig: FindingColumnConfig;

  readonly interventionTypes = InterventionTypesEnum;
  readonly detailInterventionTypes = DetailInterventionTypesEnum;
  readonly complaintsTypesEnum = ComplaintsTypesEnum;
  readonly sideTypesEnum = SideTypesEnum;

  readonly spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private spineHelperService: SpineHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices, AnamnesisValidationModel);

    this.interventionHandler = new DynamicComponentHandler(this.logger, this.model.interventions, AnamnesisInterventionUiModel);
    this.initializeDynamicDropdownConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: AnamnesisUiModel) => {
      if (modelOut.interventions.length === 0) {
        modelOut.interventions.push(new AnamnesisInterventionUiModel());
      }
      this.interventionHandler.reinitializeCollection(modelOut.interventions);
    });

    this.registerSaveCallback((outModel: AnamnesisUiModel) => {
      this.interventionHandler.collectionPostSaveCleanup(outModel.interventions);
    });

    this.registerPreSaveCallback(() => {
      this.interventionHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.spineLocalizerPermittedSelection = this.spineHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationUiModel);
    });
  }

  toggleLocalizer(): void {
    this.bigLocalizerShown = !this.bigLocalizerShown;
    if (!this.bigLocalizerShown) {
      this.checkAndRemoveLocalizerError();
      if (this.isPartShown(this.interventionTypes.BoneCementApplication) && !this.isSingleElementSelected()) {
        this.interventionHandler.currentItem.detailInterventionType = this.detailInterventionTypes.None;
      }
    }
  }

  private checkAndRemoveLocalizerError() {
    const currentElement = this.interventionHandler.currentItem;
    const invalidValue = this.isPartShown(this.interventionTypes.Spondylodesis) ? 1 : 0;
    if (Object.values(currentElement.spineLocation).filter(elem => elem).length > invalidValue) {
      this.validationHelperService.removeError(nameof<AnamnesisInterventionUiModel>(m => m.spineLocation));
    }
  }

  isPartShown(partName: InterventionTypesEnum): boolean {
    return this.interventionHandler.currentItem.interventionType === partName;
  }

  isAnyPartShown(): boolean {
    return this.interventionHandler.currentItem.interventionType !== this.interventionTypes.None;
  }

  isSingleElementSelected() {
    return Object.values(this.interventionHandler.currentItem.spineLocation).filter(elem => elem).length === 1;
  }

  private initializeDynamicDropdownConfig(): void {
    this.interventionDropdownConfig = new FindingColumnConfig();
    this.interventionDropdownConfig.itemCount = 9;
    this.interventionDropdownConfig.findingType = nameof<AnamnesisInterventionUiModel>(m => m.interventionType);
    this.interventionDropdownConfig.findingColumnIds.findingRRId = 'spi_m_020105';
    this.interventionDropdownConfig.findingColumnIds.buttonRRId = 'spi_m_020106';
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream(`spineMRT.anamnesis.findingTypes.options`).subscribe((out: DropdownModel[]) => {
        this.interventionDropdownConfig.dropdownValues = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.interventionDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream(`spineMRT.anamnesis.addANewIntervention.value`).subscribe((out: string) => {
        this.interventionDropdownConfig.buttonText = out;
      })
    );
  }

  onFindingChange() {
    this.validationDataService.currentPageData.next(this.model);
  }

  getLocalizerLogicAndDescription(): { logicType: SpineLocationLogicTypeEnum; description: string } {
    if (this.isPartShown(this.interventionTypes.Spondylodesis)) {
      return {
        logicType: this.spineLocationLogicTypeEnum.VertebreAndDiscRange,
        description: 'spineMRT.anamnesis.selectTheTopAndBottomFusedVertebra.value'
      };
    }
    if (this.isPartShown(this.interventionTypes.DiscReplacement)) {
      return { logicType: this.spineLocationLogicTypeEnum.DiscEach, description: 'spineMRT.anamnesis.selectIntervertebralDiscs.value' };
    }
    if (
      this.isPartShown(this.interventionTypes.VertebraReplacement) ||
      this.isPartShown(this.interventionTypes.Laminectomy) ||
      this.isPartShown(this.interventionTypes.BoneCementApplication)
    ) {
      return { logicType: this.spineLocationLogicTypeEnum.VertebreEach, description: 'spineMRT.anamnesis.selectAVertebra.value' };
    }
  }
}
