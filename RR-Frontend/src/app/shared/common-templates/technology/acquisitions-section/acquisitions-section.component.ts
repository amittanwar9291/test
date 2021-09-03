import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';

import { CenterspecificPreferencesSetUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-set-ui.model';
import { CenterspecificPreferencesModuleUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-module-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TechnologyCtBaseUiModel } from '@models/shared/newTechnology/ui/technology-ct-base-ui.model';
import { AcquisitionUiBaseModel } from '@models/shared/newTechnology/ui/acquisition-ui-base.model';
import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';
import { CenterspecificPreferencesAcquisitionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-acquisition-ui.model';

import { AcquisitionTypeEnum, SequencesTypeEnum } from '@enums/shared/technology';
import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';
import { ResetDialogComponent } from '../../../dialogs/reset-dialog/reset-dialog.component';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-acquisitions-section',
  templateUrl: './acquisitions-section.component.html',
  styleUrls: ['./acquisitions-section.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AcquisitionsSectionComponent {
  @Input() model: TechnologyCtBaseUiModel<AcquisitionUiBaseModel<ReconstructionUiBaseModel>, ReconstructionUiBaseModel>;
  @Input() acquisitionHandlerRef: DynamicComponentHandler<AcquisitionUiBaseModel<ReconstructionUiBaseModel>>;
  @Input('cspPreferences') set cspPreferencesSetter(val: CenterspecificPreferencesModuleUiModel) {
    this.cspPreferences = val;
    this.initSetsDropdown(val);
  }
  @Input() customColumnTitle: string;
  @Input() findingOptionsTranslationKey: string;
  @Input() customFindingPropertyName: string;
  @Input() customCentreSpecificSetTranslationKey = 'shared-templates.technology.centrespecificSet.value';

  @Output() findingsStructureChanged = new EventEmitter();
  @Output() findingTypeChangedOrActiveFindingChanged = new EventEmitter();
  @Output() acquisitionsResetted = new EventEmitter();

  cspPreferences: CenterspecificPreferencesModuleUiModel;
  acquisitionType: typeof SequencesTypeEnum;
  cspDropdown: DropdownModel[];

  constructor(public dialogService: DialogService, private changeDetectionService: ChangeDetectionService) {
    this.acquisitionType = SequencesTypeEnum;
  }

  private initSetsDropdown(val: CenterspecificPreferencesModuleUiModel): void {
    this.cspDropdown = val.sets.map(
      (set: CenterspecificPreferencesSetUiModel): DropdownModel => {
        return new DropdownModel(set.setName, set.setName);
      }
    );
  }

  isResetButtonDisabled(): boolean {
    const notDeletedAcquisition = this.acquisitionHandlerRef.collection.filter(item => !item.isDeleted);
    return notDeletedAcquisition.length === 1 && notDeletedAcquisition[0].acquisitionType === AcquisitionTypeEnum.None;
  }

  applyPreferences(setName: string) {
    const selectedSetName = setName;
    if (selectedSetName === 'None') {
      this.deleteAllAcquisitions();
      return;
    }

    this.acquisitionHandlerRef.deleteAllElements(true);

    this.cspPreferences.sets
      .find((set: CenterspecificPreferencesSetUiModel): boolean => set.setName === selectedSetName)
      .acquisitions.forEach(acquisition => {
        const modelWithoutIds = this.getAcquisitionsWithoutIds(acquisition);
        this.acquisitionHandlerRef.addElement();
        Object.assign(this.acquisitionHandlerRef.currentItem, modelWithoutIds);
      });

    this.acquisitionHandlerRef.reinitializeCollection(this.model.acquisitions);

    this.findingTypeChangedOrActiveFindingChanged.emit();
  }

  private getAcquisitionsWithoutIds(acquisitionModel: CenterspecificPreferencesAcquisitionUiModel): any {
    const { id, scopeId, ...acquisitionModelWithoutId } = acquisitionModel;
    acquisitionModelWithoutId.reconstructions.forEach(reconstruction => {
      delete reconstruction.id;
    });

    return acquisitionModelWithoutId;
  }

  onAcquisitionsFindingStructureChange(): void {
    this.findingsStructureChanged.emit();
  }

  onAcquisitionTypeChangedOrActiveFindingChanged(): void {
    this.findingTypeChangedOrActiveFindingChanged.emit();
  }

  reset(): void {
    const ref = this.dialogService.open(ResetDialogComponent, {
      data: {
        moduleType: ModuleTypesEnum.CT
      },
      width: '33%',
      showHeader: false
    });
    ref.onClose.subscribe((out: string) => {
      if (out === SimpleAnswerEnum.Yes) {
        this.deleteAllAcquisitions();
        this.changeDetectionService.triggerChange();
        this.acquisitionsResetted.emit();
      }
    });
  }

  private deleteAllAcquisitions() {
    this.acquisitionHandlerRef.deleteAllElements();
  }

  isSetSelected() {
    return this.model.setName && this.model.setName !== 'None';
  }
}
