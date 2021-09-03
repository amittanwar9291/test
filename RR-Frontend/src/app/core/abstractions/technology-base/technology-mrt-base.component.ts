import { OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

import { SequencesTypeEnum } from '@enums/shared/technology';
import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';
import { MagneticFieldStrengthTypeEnum } from '@enums/shared/technology/magnetic-field-strength-type.enum';

import { CenterspecificPreferencesModuleUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-module-ui.model';
import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { WeightingTypeEnum } from '@enums/shared/technology/weighting-type.enum';
import { TechnologyMRIValidationModel } from '@models/shared/validation/technology-MRI-validation.model';
import { FindingBase } from '@models/shared/finding/finding.base';

export class TechnologyMrtBaseComponent<TModel extends TechnologyMrtBaseUiModel<SequenceModel>, SequenceModel extends SequenceUiBaseModel>
  extends SlideBaseComponent<TModel>
  implements OnInit {
  simpleAnswerType: typeof SimpleAnswerEnum;
  sequencesType: typeof SequencesTypeEnum;
  moduleTypes: typeof ModuleTypesEnum;
  magneticFieldStrengthType: typeof MagneticFieldStrengthTypeEnum;

  isSequencePanelActive = false;

  sequenceHandler: DynamicComponentHandler<SequenceModel>;

  centerspecificPreferencesData: CenterspecificPreferencesModuleUiModel;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public dialogService: DialogService,
    public preferencesHttpService: CenterspecificPreferencesHttpService,
    private technologyModelCtor: INoParamConstructor<TModel>,
    public sequencesModel,
    public technologyService: SideEffectsSectionService
  ) {
    super(navService, slideRequestService, changeDetectionService, technologyModelCtor, commonServices, TechnologyMRIValidationModel);

    this.sequenceHandler = new DynamicComponentHandler(this.logger, this.model.sequences, this.sequencesModel);

    this.simpleAnswerType = SimpleAnswerEnum;
    this.sequencesType = SequencesTypeEnum;
    this.moduleTypes = ModuleTypesEnum;
    this.magneticFieldStrengthType = MagneticFieldStrengthTypeEnum;
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
    this.registerGetCallback((outModel: TModel) => {
      this.sequenceHandler.reinitializeCollection(outModel.sequences);
      this.technologyService.triggerSideEffectsReinitialization(outModel.cmSideEffects);
    });

    this.registerSaveCallback((outModel: TModel) => {
      this.sequenceHandler.collectionPostSaveCleanup(outModel.sequences);
      this.technologyService.triggerSideEffectsDeletedItemsRemoval(outModel.cmSideEffects);
    });

    this.registerPreSaveCallback(() => {
      this.sequenceHandler.collectionPreSaveCleanup();
      this.technologyService.triggerSideEffectsPreSaveCleanup();
    });
  }

  /**
   * To be overriden in the module-specific TechnologyComponent for registering page connections.
   */
  protected preparePageConnection(): void {}

  activateSequencePanel(isSequence: boolean): void {
    this.isSequencePanelActive = isSequence;
  }

  isSequenceColumnDisabled(): boolean {
    return this.sequenceHandler.currentItem.weightingType === WeightingTypeEnum.None;
  }

  changeSequencesTypeToIndividual() {
    if (this.model.sequencesType !== SequencesTypeEnum.Individual) {
      this.model.sequencesType = SequencesTypeEnum.Individual;
      this.model.setName = '';
    }
  }

  clearSequences(currentSequenceType: SequencesTypeEnum) {
    if (currentSequenceType === this.model.sequencesType) {
      return;
    }
    this.model.setName = '';
    this.deleteAllSequences();
  }

  onContrastEnhancedChange(): void {
    if (this.model.cmReinforcedType === SimpleAnswerEnum.Yes) {
      return;
    }
    this.technologyService.triggerContrastEnhancedChange();
    this.resetCustomContrastMediumControls();
    this.resetCustomSequencesControls();
  }

  /**
   * To be overriden in the module-specific TechnologyComponent for resetting custom module-specific contrast medium controls
   */
  protected resetCustomContrastMediumControls(): void {}

  /**
   * To be overriden in the module-specific TechnologyComponent for resetting custom module-specific sequences controls
   */
  protected resetCustomSequencesControls(): void {}

  private deleteAllSequences() {
    this.sequenceHandler.deleteAllElements();
  }

  private orderElementsByNumber(firstElement: FindingBase, secondElement: FindingBase): number {
    return firstElement.number > secondElement.number ? 1 : -1;
  }
}
