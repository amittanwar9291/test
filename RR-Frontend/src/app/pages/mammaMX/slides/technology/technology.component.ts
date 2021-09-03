import { Component } from '@angular/core';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { TechnologyUiModel } from '@models/mammaMX/ui/technology/technology-ui.model';
import { TechnologyFindingUiModel } from '@models/mammaMX/ui/technology/technology-finding-ui.model';
import { TechnologyValidation } from '@models/mammaMX/ui/technology/technology-validation.model';
import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { TechnologyFindingType } from '@enums/mammaMX/technology';
import { values } from 'lodash';
import { nameof } from 'ts-simple-nameof/index';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html'
})
export class TechnologyComponent extends SlideBaseComponent<TechnologyUiModel> {
  technologyFinding: FindingDropdownModel[];
  technologyFindingHandler: DynamicComponentHandler<TechnologyFindingUiModel>;
  technologyFindingConfig: FindingColumnConfig;

  findingType: typeof TechnologyFindingType;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, TechnologyUiModel, commonServices, TechnologyValidation);
    this.technologyFindingHandler = new DynamicComponentHandler(this.logger, this.model.findings, TechnologyFindingUiModel);
    this.technologyFinding = [];

    this.findingType = TechnologyFindingType;

    this.initializeDynamicDropdownConfig();
    this.registerCallbacks();
  }

  private registerCallbacks(): void {
    this.registerGetCallback((outModel: TechnologyUiModel) => {
      this.technologyFindingHandler.reinitializeCollection(outModel.findings);
    });
    this.registerSaveCallback((outModel: TechnologyUiModel) => {
      this.technologyFindingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.technologyFindingHandler.collectionPreSaveCleanup();
    });
  }

  private initializeDynamicDropdownConfig(): void {
    this.technologyFindingConfig = new FindingColumnConfig();
    this.technologyFindingConfig.findingColumnIds.findingRRId = 'mam_mx_030202';
    this.technologyFindingConfig.findingColumnIds.buttonRRId = 'mam_mx_030203';
    this.technologyFindingConfig.itemCount = 8;
  }

  handleLocalizerValidationError(modelName: string): void {
    this.validationHelperService.removeError(modelName);
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('mammaMX.technology.findingTypes.options').subscribe((out: FindingDropdownModel[]) => {
        this.technologyFindingConfig.dropdownValues = values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.technologyFindingConfig.placeholder = out;
      }),
      this.translate.stream('mammaMX.technology.addNewSetting.value').subscribe((out: string) => {
        this.technologyFindingConfig.buttonText = out;
      })
    );
  }

  clearMammographyLocalizers(): void {
    this.model.breastLocationCC = new BreastSimple();
    this.model.breastLocationMLO = new BreastSimple();
    this.validationHelperService.removeError(nameof<TechnologyUiModel>(m => m.breastLocationCC));
    this.validationHelperService.removeError(nameof<TechnologyUiModel>(m => m.breastLocationMLO));
  }

  clearSonographyLocalizers(): void {
    this.model.breastLocationSonography = new BreastSimple();
    this.validationHelperService.removeError(nameof<TechnologyUiModel>(m => m.breastLocationSonography));
  }

  get isNeitherGalactographySideSelected(): boolean {
    return (
      this.technologyFindingHandler.currentItem.findingType !== this.findingType.GalactographyLeft &&
      this.technologyFindingHandler.currentItem.findingType !== this.findingType.GalactographyRight
    );
  }
}
