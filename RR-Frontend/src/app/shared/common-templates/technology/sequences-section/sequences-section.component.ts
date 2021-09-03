import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';

import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';
import { CenterspecificPreferencesSetUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-set-ui.model';
import { CenterspecificPreferencesModuleUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-module-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { ResetDialogComponent } from '../../../dialogs/reset-dialog/reset-dialog.component';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { WeightingTypeEnum } from '@enums/shared/technology/weighting-type.enum';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';

@Component({
  selector: 'rr-sequences-section',
  templateUrl: './sequences-section.component.html',
  styleUrls: ['./sequences-section.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SequencesSectionComponent {
  @Input() model: TechnologyMrtBaseUiModel<SequenceUiBaseModel>;
  @Input() sequenceHandlerRef: DynamicComponentHandler<SequenceUiBaseModel>;
  @Input('cspPreferences') set cspPreferencesSetter(val: CenterspecificPreferencesModuleUiModel) {
    this.cspPreferences = val;
    this.initSetsDropdown(val);
  }
  @Input() customColumnTitle: string;
  @Input() customFindingOptionsTranslationKey: string;
  @Input() customFindingPropertyName: string;
  @Input() customCentreSpecificSetTranslationKey = 'shared-templates.technology.centrespecificSet.value';
  @Input() isAngioMRT: boolean;

  @Output() sequencesFindingColumnChanged = new EventEmitter();

  cspPreferences: CenterspecificPreferencesModuleUiModel;
  sequencesType: typeof SequencesTypeEnum;
  cspDropdown: DropdownModel[];

  constructor(public dialogService: DialogService, private changeDetectionService: ChangeDetectionService) {
    this.sequencesType = SequencesTypeEnum;
  }

  private initSetsDropdown(val: CenterspecificPreferencesModuleUiModel): void {
    this.cspDropdown = val.sets.map(
      (set: CenterspecificPreferencesSetUiModel): DropdownModel => {
        return new DropdownModel(set.setName, set.setName);
      }
    );
  }

  isResetButtonDisabled(): boolean {
    const notDeletedSequences = this.sequenceHandlerRef.collection.filter(item => !item.isDeleted);
    return (
      notDeletedSequences.length === 1 &&
      (this.isAngioMRT ? notDeletedSequences[0].methodType : notDeletedSequences[0].weightingType) === WeightingTypeEnum.None
    );
  }

  applyPreferences(setName: string) {
    const selectedSetName = setName;
    if (selectedSetName === 'None') {
      this.deleteAllSequences();
      return;
    }

    this.sequenceHandlerRef.deleteAllElements(true);

    this.cspPreferences.sets
      .find((set: CenterspecificPreferencesSetUiModel): boolean => set.setName === selectedSetName)
      .sequences.forEach(sequence => {
        const { id, ...sequenceModelWithoutId } = sequence;
        this.sequenceHandlerRef.addElement();
        Object.assign(this.sequenceHandlerRef.currentItem, sequenceModelWithoutId);
      });

    this.sequenceHandlerRef.reinitializeCollection(this.model.sequences);
  }

  onSequencesFindingChange() {
    this.sequencesFindingColumnChanged.emit();
  }

  reset(): void {
    const ref = this.dialogService.open(ResetDialogComponent, {
      data: {
        moduleType: ModuleTypesEnum.MRI
      },
      width: '33%',
      showHeader: false
    });
    ref.onClose.subscribe((out: string) => {
      if (out === SimpleAnswerEnum.Yes) {
        this.deleteAllSequences();
        this.changeDetectionService.triggerChange();
      }
    });
  }

  private deleteAllSequences() {
    this.sequenceHandlerRef.deleteAllElements();
  }

  isSetSelected() {
    return this.model.setName && this.model.setName !== 'None';
  }
}
