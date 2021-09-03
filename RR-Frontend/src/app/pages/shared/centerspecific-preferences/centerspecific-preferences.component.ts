import { Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { Observable, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { DialogService } from 'primeng/dynamicdialog';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { LoggingService } from '@services/shared';
import { CoreViewsAutosaveService } from '@services/shared/core-views-autosave/core-views-autosave.service';
import { NavigationConnectorService } from '@services/shared/navigation/navigation-connector.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { CoreViewsFindingColumnAutosaveService } from '@services/shared/core-views-autosave/core-views-finding-column-autosave.service';

import { CenterspecificPreferencesTriggerService } from '@sharedPages/centerspecific-preferences/centerspecific-preferences-trigger.service';

import { CenterspecificPreferencesColumnConfig } from '@controls/centerspecific-preferences-column/centerspecific-preferences-column.config';

import { Guid } from '@models/shared/guid/guid';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CenterspecificPreferencesSetUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-set-ui.model';
import { CenterspecificPreferencesModuleUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-module-ui.model';
import { CenterspecificPreferencesSequenceUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-sequence-ui.model';
import { CSPModuleTypeDropdownModel } from '@models/shared/centerspecific-preferences/ui/csp-module-type-dropdown.model';

import { AuthorizedComponent } from '../../../shared/authorized/authorized.component';
import { CenterspecificPreferencesSequenceResetConfirmDialogComponent } from '../../../shared/dialogs/centerspecific-preferences-sequence-reset-confirm-dialog/centerspecific-preferences-sequence-reset-confirm-dialog.component';

import { isEmpty, values } from 'lodash';

import {
  CenterspecificPreferencesModulesCTModuleEnum,
  CenterspecificPreferencesModulesMRIModuleEnum
} from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';
import { WeightingTypeEnum } from '@enums/shared/technology/weighting-type.enum';
import { CenterspecificPreferencesAcquisitionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-acquisition-ui.model';

import { findingCollectionPostSaveCleanup, findingCollectionPreSaveCleanup } from '@abstractions/dynamic-base/finding-save-cleanup';
import { DataStructure } from '@models/shared/slide/data-structure.model';
import { AcquisitionTypeEnum } from '@enums/shared/technology/acquisition-type.enum';
import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';
import { CenterspecificPreferencesReconstructionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-reconstruction-ui.model';

@Component({
  selector: 'rr-centerspecific-preferences',
  templateUrl: './centerspecific-preferences.component.html',
  styleUrls: ['./centerspecific-preferences.component.scss'],
  providers: [
    DialogService,
    {
      provide: ChangeDetectionService,
      useClass: CoreViewsFindingColumnAutosaveService
    }
  ]
})
export class CenterspecificPreferencesComponent implements OnInit, OnDestroy, DoCheck {
  modulesList: CenterspecificPreferencesModuleUiModel[];
  ngValue: CenterspecificPreferencesModuleUiModel; // TODO rename to just 'model'
  selectedModuleId: string;
  subscriptions: Subscription[] = [];
  modulesListTranslationOptions: DropdownModel[];
  modulesListOptions: CSPModuleTypeDropdownModel[];

  handler: DynamicComponentHandler<CenterspecificPreferencesSetUiModel>;

  // TODO here place additional handlers that would appear in future CT modules; consider creating an Array of handlers
  sequenceHandler: DynamicComponentHandler<CenterspecificPreferencesSequenceUiModel>;
  acquisitionHandler: DynamicComponentHandler<CenterspecificPreferencesAcquisitionUiModel>;
  reconstructionHandler: DynamicComponentHandler<ReconstructionUiBaseModel>;

  preferencesColumnConfig: CenterspecificPreferencesColumnConfig;

  isEditMode = false;
  activeTabIndex = 0;

  // TODO make a separate type for the mode and reuse where necessary

  centerspecificPreferencesMRIModules: typeof CenterspecificPreferencesModulesMRIModuleEnum;
  centerspecificPreferencesCTModules: typeof CenterspecificPreferencesModulesCTModuleEnum;
  moduleTypes: typeof ModuleTypesEnum;
  weightingType: typeof WeightingTypeEnum;
  acquisitionType: typeof AcquisitionTypeEnum;

  autosaveService: CoreViewsAutosaveService<CenterspecificPreferencesModuleUiModel>;

  formChangesSubscription: Subscription;
  modelChanged$: Subject<void>;

  dataStructure: DataStructure;

  modelExternalChangeSubscription: Subscription;

  @ViewChild('autosaveForm', { static: true }) ngForm: NgForm;

  constructor(
    private logger: LoggingService,
    private translate: TranslateService,
    private parent: AuthorizedComponent,
    private centerspecificPreferencesHttpService: CenterspecificPreferencesHttpService,
    private dialogService: DialogService,
    private navConnectorService: NavigationConnectorService,
    private router: Router,
    private modelExternalChangeTriggerService: CenterspecificPreferencesTriggerService
  ) {
    this.modulesList = [];
    this.centerspecificPreferencesMRIModules = CenterspecificPreferencesModulesMRIModuleEnum;
    this.centerspecificPreferencesCTModules = CenterspecificPreferencesModulesCTModuleEnum;
    this.moduleTypes = ModuleTypesEnum;
    this.weightingType = WeightingTypeEnum;
    this.acquisitionType = AcquisitionTypeEnum;

    this.ngValue = new CenterspecificPreferencesModuleUiModel();
    this.dataStructure = new DataStructure(this.ngValue);
    this.autosaveService = new CoreViewsAutosaveService(this.centerspecificPreferencesHttpService, this.navConnectorService, this.router);

    // TODO consider if those handlers should be initialized here as there are no findings visible when entering the view
    this.handler = new DynamicComponentHandler(logger, [], CenterspecificPreferencesSetUiModel, true);
    this.sequenceHandler = new DynamicComponentHandler(logger, [], CenterspecificPreferencesSequenceUiModel);
    this.acquisitionHandler = new DynamicComponentHandler(logger, [], CenterspecificPreferencesAcquisitionUiModel);
    this.reconstructionHandler = new DynamicComponentHandler(logger, [], CenterspecificPreferencesReconstructionUiModel);

    /**
     * Unlike other translations, this one subscription must be performed before ngOnInit hook, otherwise a console error
     * concerning header text occurs
     */
    this.initHeaderTranslation();

    this.modelChanged$ = new Subject<void>();
  }

  ngDoCheck(): void {
    this.modelChanged$.next();
  }

  ngOnInit(): void {
    this.initPreferencesColumnConfig();
    // this.initializeAcquisitionColumnConfig();
    this.getPreferences();
    this.initFormChanges();
    this.initModelUpdates();
    this.autosaveService.registerSaveCallback((model: CenterspecificPreferencesModuleUiModel) => {
      this.ngValue.sets.forEach(set => {
        const incomingModel = model.sets.find(x => x.scopeId === set.scopeId);
        if (incomingModel) {
          findingCollectionPostSaveCleanup(set.sequences, incomingModel.sequences);
        }
      });
    });
    this.autosaveService.registerPreSaveCallback((model: CenterspecificPreferencesModuleUiModel) => {
      this.handler.collectionPreSaveCleanup();
      this.ngValue.sets.forEach(set => {
        const incomingModel = model.sets.find(x => x.scopeId === set.scopeId);
        if (incomingModel) {
          findingCollectionPreSaveCleanup(set.sequences);
        }
      });
    });
  }

  private updateModel(data: CenterspecificPreferencesModuleUiModel): void {
    this.handler.collectionPostSaveCleanup(data.sets);
    this.removeDeletedSequencesAndAcquisitions(data);
    if (data.id === this.ngValue.id) {
      this.dataStructure.mapModelIds(data, this.ngValue);
    }
  }

  private getPreferences(): void {
    this.centerspecificPreferencesHttpService.getModules().subscribe((data: CenterspecificPreferencesModuleUiModel[]) => {
      this.modulesList = data;
      this.subscriptions.push(
        this.translate.stream('centerspecificPreferences.modulesListOptions').subscribe((out: DropdownModel[]) => {
          this.modulesListTranslationOptions = values(out);
          this.setModulesDropdown();
        })
      );
    });
  }

  private setModulesDropdown(): void {
    this.modulesListOptions = this.modulesList
      .reduce((csp: CSPModuleTypeDropdownModel[], cspModule: CenterspecificPreferencesModuleUiModel): CSPModuleTypeDropdownModel[] => {
        const cspModuleTranslation = this.modulesListTranslationOptions.find(
          (cspDropdownModel: DropdownModel): boolean => cspDropdownModel.value === cspModule.findingType
        );
        return cspModuleTranslation
          ? [
              ...csp,
              {
                label: cspModuleTranslation.label,
                value: cspModule.id,
                findingType: cspModule.findingType
              }
            ]
          : csp;
      }, [])
      .sort((optionA: CSPModuleTypeDropdownModel, optionB: CSPModuleTypeDropdownModel) => {
        return optionA.label.localeCompare(optionB.label);
      });
  }

  toggleModule(module: CSPModuleTypeDropdownModel): void {
    if (this.isModuleSelected(module.value)) {
      this.getModuleSpecificSets(module.value).subscribe((data: CenterspecificPreferencesModuleUiModel) => {
        this.ngValue = data;
        this.dataStructure.updateModelStructure(data);
        this.autosaveService.setModelToCompareWith(data);
        this.updateHandlers();
      });
    } else {
      this.handler.reinitializeCollection([]);
    }
  }

  private getModuleSpecificSets(moduleId: string): Observable<CenterspecificPreferencesModuleUiModel> {
    return this.centerspecificPreferencesHttpService.get(moduleId);
  }

  private updateHandlers(): void {
    this.handler.reinitializeCollection(this.ngValue.sets);
    this.updateNestedHandlers();
  }

  updateNestedHandlers(): void {
    const currentModuleSetsCollection = this.ngValue.sets;

    if (isEmpty(currentModuleSetsCollection)) {
      return;
    }

    if (this.currentModuleType === ModuleTypesEnum.MRI) {
      this.sequenceHandler.reinitializeCollection(currentModuleSetsCollection[this.handler.currentItemIndex].sequences);
    } else if (this.currentModuleType === ModuleTypesEnum.CT) {
      this.acquisitionHandler.reinitializeCollection(currentModuleSetsCollection[this.handler.currentItemIndex].acquisitions);
      this.updateReconstructionsHandler();
    }
  }

  updateReconstructionsHandler(): void {
    this.reconstructionHandler.reinitializeCollection(this.acquisitionHandler.currentItem.reconstructions);
    this.resetActiveTabIndex();
  }

  private resetActiveTabIndex(): void {
    this.activeTabIndex = 0;
  }

  toggleEditMode(val: boolean): void {
    this.isEditMode = val;
  }

  isModuleSelected(id?: string): boolean {
    const moduleId = id || this.selectedModuleId;
    return ![undefined, 'None', Guid.createEmpty()].includes(moduleId);
  }

  areSetsVisible(): boolean {
    return this.handler.collection.some(item => !item.isDeleted);
  }

  // TODO unify name for sequences and acquisiions
  areSequencesVisible(): boolean {
    return !isEmpty(this.sequenceHandler.collection);
  }

  areAcquisitionsVisible(): boolean {
    return !isEmpty(this.acquisitionHandler.collection);
  }

  areSequencesDisabled(): boolean {
    return this.sequenceHandler.currentItem.weightingType === WeightingTypeEnum.None;
  }

  areAcquisitionsDisabled(): boolean {
    return this.acquisitionHandler.currentItem.acquisitionType === AcquisitionTypeEnum.None;
  }

  isResetButtonDisabled(): boolean {
    if (this.currentModuleType === ModuleTypesEnum.MRI) {
      return this.sequenceHandler.currentItem?.weightingType === WeightingTypeEnum.None;
    } else if (this.currentModuleType === ModuleTypesEnum.CT) {
      return this.acquisitionHandler.currentItem?.acquisitionType === AcquisitionTypeEnum.None;
    }
  }

  getCustomFindingOptionsTranslationKey(): string {
    switch (this.ngValue.findingType) {
      case CenterspecificPreferencesModulesMRIModuleEnum.MRIElbow: {
        return 'shared-templates.technology.customElbowMRTWeightingArray.options';
      }
      case CenterspecificPreferencesModulesMRIModuleEnum.MRIHand: {
        return 'shared-templates.technology.customHandMRTWeightingArray.options';
      }
      case CenterspecificPreferencesModulesMRIModuleEnum.MRIHead: {
        return 'shared-templates.technology.customHeadMRTWeightingArray.options';
      }
      case CenterspecificPreferencesModulesMRIModuleEnum.MRIAbdomen: {
        return 'shared-templates.technology.customAbdomenMRTWeightingArray.options';
      }
      case CenterspecificPreferencesModulesMRIModuleEnum.MRIAngiography: {
        return 'shared-templates.technology.angiographyMRTMethodFullArray.options';
      }
      case CenterspecificPreferencesModulesCTModuleEnum.CTAngiography: {
        return 'shared-templates.technology.angiographyCTAcquisitionsArray.options';
      }
      case CenterspecificPreferencesModulesCTModuleEnum.CTThorax: {
        return 'shared-templates.technology.thoraxCTAcquisitionsArray.options';
      }
      case CenterspecificPreferencesModulesCTModuleEnum.CTSpine: {
        return 'shared-templates.technology.spineCTAcquisitionsArray.options';
      }
      case CenterspecificPreferencesModulesCTModuleEnum.CTHead: {
        return 'shared-templates.technology.headCTAcquisitionsArray.options';
      }
    }
  }

  getCustomFindingPropertyName(): string {
    switch (this.ngValue.findingType) {
      case CenterspecificPreferencesModulesMRIModuleEnum.MRIAngiography: {
        return 'methodType';
      }
    }
  }

  getCustomColumnTitleTranslationKey(): string {
    if (this.ngValue.findingType === CenterspecificPreferencesModulesMRIModuleEnum.MRIAngiography) {
      return 'shared-templates.technology.method.value';
    }
  }

  get currentModuleType(): ModuleTypesEnum {
    const mriModules = Object.values((CenterspecificPreferencesModulesMRIModuleEnum as any) as string[]);
    const ctModules = Object.values((CenterspecificPreferencesModulesCTModuleEnum as any) as string[]);

    if (mriModules.includes(this.ngValue.findingType)) {
      return ModuleTypesEnum.MRI;
    } else if (ctModules.includes(this.ngValue.findingType)) {
      return ModuleTypesEnum.CT;
    }
  }

  onSequencesReset(): void {
    this.dialogService
      .open(CenterspecificPreferencesSequenceResetConfirmDialogComponent, {
        width: '640px',
        showHeader: false,
        data: {
          translationKeyPrefix: 'centerspecificPreferences.sequencesResetConfirmDialog'
        }
      })
      .onClose.subscribe((out: boolean) => {
        if (out) {
          this.sequenceHandler.deleteAllElements();
        }
      });
  }

  onAcquisitionsReset(): void {
    this.dialogService
      .open(CenterspecificPreferencesSequenceResetConfirmDialogComponent, {
        width: '640px',
        showHeader: false,
        data: {
          translationKeyPrefix: 'centerspecificPreferences.acquisitionsResetConfirmDialog'
        }
      })
      .onClose.subscribe((out: boolean) => {
        if (out) {
          this.acquisitionHandler.deleteAllElements();
          this.resetActiveTabIndex();
          this.autosaveService.triggerChange(this.ngValue);
        }
      });
  }

  private initPreferencesColumnConfig(): void {
    this.preferencesColumnConfig = new CenterspecificPreferencesColumnConfig();
    this.preferencesColumnConfig.preferenceBaseRRId = 'fra_07_06';
    this.preferencesColumnConfig.paginatorRRId = 'fra_07_16';
    this.preferencesColumnConfig.mri.buttonRRID = 'fra_07_07';
    this.preferencesColumnConfig.ct.buttonRRID = 'fra_07_19';
    this.subscriptions.push(
      this.translate.stream('centerspecificPreferences.mriAddButton.value').subscribe((out: string) => {
        this.preferencesColumnConfig.mri.buttonText = out;
      }),
      this.translate.stream('centerspecificPreferences.ctAddButton.value').subscribe((out: string) => {
        this.preferencesColumnConfig.ct.buttonText = out;
      }),
      this.translate.stream('centerspecificPreferences.mriSetsFindingHeader.value').subscribe((out: string) => {
        this.preferencesColumnConfig.mri.columnHeader = out;
      }),
      this.translate.stream('centerspecificPreferences.ctSetsFindingHeader.value').subscribe((out: string) => {
        this.preferencesColumnConfig.ct.columnHeader = out;
      })
    );
  }

  private initHeaderTranslation(): void {
    this.subscriptions.push(
      this.translate.stream('centerspecificPreferences.header.value').subscribe((out: string) => {
        this.parent.header = out;
      })
    );
  }

  // TODO below methods that could possibly be extracted to some base class of all core views that should implement autosave
  private initFormChanges(): void {
    this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe(() => {
      this.scheduleFormDetection();
    });
  }

  private initModelUpdates(): void {
    this.autosaveService.getModelUpdatedStream().subscribe(response => {
      if (this.isModuleSelected()) {
        this.dataStructure.updateModelStructure(response);
        this.updateModel(response);
      }

      this.autosaveService.setModelToCompareWith(response);
    });

    this.modelExternalChangeSubscription = this.modelExternalChangeTriggerService.getModelExternalChangesTriggerStream().subscribe(() => {
      this.autosaveService.triggerChange(this.ngValue);
    });
  }

  private removeDeletedSequencesAndAcquisitions(data: CenterspecificPreferencesModuleUiModel): void {
    data.sets.forEach(set => {
      this.sequenceHandler.collectionPostSaveCleanup(set.sequences);
      this.acquisitionHandler.collectionPostSaveCleanup(set.acquisitions);
      set.acquisitions.forEach(acquisition => {
        const currentAcquisition = set.acquisitions.find(dataSet => dataSet.scopeId === acquisition.scopeId);
        findingCollectionPostSaveCleanup(currentAcquisition.reconstructions, acquisition.reconstructions);
      });
    });
  }

  private scheduleFormDetection(): void {
    this.modelChanged$
      .pipe(
        take(1),
        filter(() => !this.autosaveService.isEqualOrEmpty(this.ngValue))
      )
      .subscribe(() => {
        this.autosaveService.triggerChange(this.ngValue);
      });
  }

  ngOnDestroy(): void {
    this.formChangesSubscription.unsubscribe();
    this.autosaveService.unsubscribeSubscriptions();
    this.modelExternalChangeSubscription.unsubscribe();
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
