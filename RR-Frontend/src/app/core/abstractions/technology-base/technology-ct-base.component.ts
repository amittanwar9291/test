import { OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';

import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { AcquisitionTypeEnum, SequencesTypeEnum } from '@enums/shared/technology';
import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';

import { TechnologyCtBaseUiModel } from '@models/shared/newTechnology/ui/technology-ct-base-ui.model';
import { AcquisitionUiBaseModel } from '@models/shared/newTechnology/ui/acquisition-ui-base.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CenterspecificPreferencesModuleUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-module-ui.model';
import { TechnologyCTValidationModel } from '@models/shared/validation/technology-CT-validation.model';

import { remove } from 'lodash';
import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { FindingBase } from '@models/shared/finding/finding.base';

export class TechnologyCtBaseComponent<
  TModel extends TechnologyCtBaseUiModel<AcquisitionModel, ReconstructionsUiModel>,
  AcquisitionModel extends AcquisitionUiBaseModel<ReconstructionsUiModel>,
  ReconstructionsUiModel extends ReconstructionUiBaseModel
> extends SlideBaseComponent<TModel> implements OnInit {
  isAcquisitionPanelActive = false;

  acquisitionHandler: DynamicComponentHandler<AcquisitionModel>;
  reconstructionHandler: DynamicComponentHandler<ReconstructionsUiModel>;

  centerspecificPreferencesData: CenterspecificPreferencesModuleUiModel;

  activeAcquisitionsTabIndex = 0;

  simpleAnswerType: typeof SimpleAnswerEnum;
  sequencesType: typeof SequencesTypeEnum;
  moduleTypes: typeof ModuleTypesEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public dialogService: DialogService,
    public preferencesHttpService: CenterspecificPreferencesHttpService,
    private technologyModelCtor: INoParamConstructor<TModel>,
    public acquisitionsModel,
    public reconstructionModel,
    public technologyService: SideEffectsSectionService
  ) {
    super(navService, slideRequestService, changeDetectionService, technologyModelCtor, commonServices, TechnologyCTValidationModel);

    this.acquisitionHandler = new DynamicComponentHandler(this.logger, this.model.acquisitions, acquisitionsModel);
    this.reconstructionHandler = new DynamicComponentHandler(this.logger, [], reconstructionModel);

    this.simpleAnswerType = SimpleAnswerEnum;
    this.sequencesType = SequencesTypeEnum;
    this.moduleTypes = ModuleTypesEnum;
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.registerCallbacks();
    this.preparePageConnection();
  }

  protected getPreferences(moduleName: CenterspecificPreferencesModulesEnum): void {
    this.preferencesHttpService.getCollection(`type/${moduleName}`).subscribe((data: CenterspecificPreferencesModuleUiModel) => {
      data.sets.sort(this.orderElementsByNumber);
      this.centerspecificPreferencesData = data;
    });
  }

  protected registerCallbacks(): void {
    this.registerGetCallback((outModel: TechnologyCtBaseUiModel<AcquisitionModel, ReconstructionsUiModel>) => {
      this.technologyService.triggerSideEffectsReinitialization(outModel.cmSideEffects);

      this.acquisitionHandler.reinitializeCollection(outModel.acquisitions);
      this.updateReconstructionsHandler();
    });

    this.registerSaveCallback((outModel: TechnologyCtBaseUiModel<AcquisitionModel, ReconstructionsUiModel>) => {
      this.technologyService.triggerSideEffectsDeletedItemsRemoval(outModel.cmSideEffects);

      this.removeDeletedReconstructions();
      this.acquisitionHandler.collectionPostSaveCleanup(outModel.acquisitions);

      this.reconstructionHandler.collectionPostSaveCleanup(this.acquisitionHandler.currentItem.reconstructions);
    });

    this.registerPreSaveCallback(() => {
      this.technologyService.triggerSideEffectsPreSaveCleanup();
      this.acquisitionHandler.collectionPreSaveCleanup();
    });
  }

  /**
   * To be overriden in the module-specific TechnologyComponent for registering page connections.
   */
  protected preparePageConnection(): void {}

  activateAcquisitionPanel(isAcquisition: boolean): void {
    this.isAcquisitionPanelActive = isAcquisition;
  }

  isAcquisitionColumnDisabled(): boolean {
    return this.acquisitionHandler.currentItem.acquisitionType === AcquisitionTypeEnum.None;
  }

  isResetButtonDisabled(): boolean {
    const notDeletedSequences = this.acquisitionHandler.collection.filter(item => !item.isDeleted);
    return notDeletedSequences.length === 1 && notDeletedSequences[0].acquisitionType === AcquisitionTypeEnum.None;
  }

  changeAcquisitionTypeToIndividual() {
    if (this.model.sequencesType !== SequencesTypeEnum.Individual) {
      this.model.sequencesType = SequencesTypeEnum.Individual;
      this.model.setName = '';
    }
  }

  clearAcquisitions(currentSequenceType: SequencesTypeEnum) {
    if (currentSequenceType === this.model.sequencesType) {
      return;
    }
    this.model.setName = '';
    this.deleteAllAcquisitions();
    this.resetAcquisitionsActiveTab();
  }

  onContrastEnhancedChange(): void {
    if (this.model.cmReinforcedType === SimpleAnswerEnum.Yes) {
      return;
    }
    this.technologyService.triggerContrastEnhancedChange();
    this.resetCustomContrastMediumControls();
    this.resetCustomAcquisitionsControls();
  }

  /**
   * To be overriden in the module-specific TechnologyComponent for resetting custom module-specific contrast medium controls
   */
  protected resetCustomContrastMediumControls(): void {}

  /**
   * To be overriden in the module-specific TechnologyComponent for resetting custom module-specific sequences controls
   */
  protected resetCustomAcquisitionsControls(): void {}

  updateReconstructionsHandler(): void {
    // TODO consider handling it in a separate service
    const currentAcquisition = this.acquisitionHandler.currentItem;
    this.reconstructionHandler.reinitializeCollection(currentAcquisition.reconstructions);

    this.resetAcquisitionsActiveTab();
  }

  private removeDeletedReconstructions(): void {
    // Here we remove all deleted reconstruction (the ones containing 'isDeleted: true' flag) findings FROM ALL acquisitions
    this.acquisitionHandler.collection.forEach(acquisition => {
      remove(acquisition.reconstructions, reconstruction => reconstruction.isDeleted);
    });
  }

  protected deleteAllAcquisitions() {
    this.acquisitionHandler.deleteAllElements();
  }

  resetAcquisitionsActiveTab(): void {
    this.activeAcquisitionsTabIndex = 0;
  }

  private orderElementsByNumber(firstElement: FindingBase, secondElement: FindingBase): number {
    return firstElement.number > secondElement.number ? 1 : -1;
  }
}
