import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Subscription, Observable, BehaviorSubject } from 'rxjs';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';

import { IDeletable } from '@interfaces/deletable.interface';
import { IChangeEvent } from '@interfaces/change-event.interface';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Guid } from '@models/shared/guid/guid';
import { CorrelationUiModel } from '@models/shared/page-correlation/ui/correlation-ui.model';
import { FindingCorrelationOptionModel } from '@models/shared/page-correlation/ui/finding-correlation-option.model';
import { SummaryFindingCorrelationOptionUiModel } from '@models/shared/page-correlation/ui/summary-finding-correlation-option-ui.model';

import { remove, difference } from 'lodash';
import { UltrasoundFindingTypeEnum } from '@enums/mammaMX/ultrasound-finding';

@Component({
  selector: 'rr-page-correlation',
  templateUrl: './page-correlation.component.html',
  styleUrls: ['./page-correlation.component.scss']
})
export class PageCorrelationComponent<TModel extends IDeletable> implements OnInit, OnDestroy {
  @Input() handler: DynamicComponentHandler<CorrelationUiModel>;
  @Input() allLeftFindings: DropdownModel[];
  @Input('allRightFindings') set _allRightFindings(val: DropdownModel[]) {
    this.allRightFindings = val;
    if (this.dropdownsInitialized) {
      this.initializeDropdownOptions();
    }
  }
  @Input('noCorrelationTranslation') set _noCorrelationTranslation(val: FindingCorrelationOptionModel[]) {
    this.noCorrelationTranslation = val;
    if (this.dropdownsInitialized) {
      this.initializeDropdownOptions();
    }
  }
  @Input() translationBits: DropdownModel[];
  @Input() correlationsPerPage: number;
  @Input() findingListsRrIds: string[];
  @Input() leftFindingsTranslationBaseKey: string;
  @Input() incomingCorrelationFindings: SummaryFindingCorrelationOptionUiModel;
  @Input() pageConnectionPerformed$: Observable<void>;

  /**
   * This flag marks if the autosave should be triggered on page entry.
   * It is demanded when entering the Summary page first time in a specific report.
   * In such case the initial POST request contains an empty 'findingRelations' collection. That is why we have to manually trigger autosave
   * to update the 'findingRelations' collection with correlations automatically created basing on page 5 findings.
   */
  @Input() triggerAutosaveOnPageEntry: boolean;

  dropdownsInitialized = false;
  allRightFindings: DropdownModel[];
  noCorrelationTranslation: FindingCorrelationOptionModel[];
  subscriptions: Subscription[];
  wasModified = false;
  page: number;
  instanceId: string;
  rightFindingDropdownOptions: FindingCorrelationOptionModel[];

  initializationFinished$: BehaviorSubject<boolean>;

  constructor(private changeDetectionService: ChangeDetectionService, private decimalPipe: DecimalPipe) {
    this.instanceId = Guid.create();
    this.page = 1;
    this.subscriptions = [];
    this.initializationFinished$ = new BehaviorSubject(false);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.pageConnectionPerformed$.subscribe(() => {
        this.initializeCorrelations();
        this.initializeDropdownOptions();
      })
    );
  }

  private initializeCorrelations(): void {
    const incomingLeftFindings = this.incomingCorrelationFindings.leftFindings.filter(item => item.findingType !== 'None');
    const incomingRightFindings = this.incomingCorrelationFindings.rightFindings.filter(item => item.findingType !== 'None');
    const incomingLeftFindingsIds = incomingLeftFindings.map(item => item.id);
    const correlationsLeftFindingsIds = this.handler.collection.map(item => item.leftFindingId);

    // Removing correlations bound to already removed 5 page findings
    this.removeCorrelations(incomingLeftFindingsIds, correlationsLeftFindingsIds);

    // Renaming correlations bound to already renamed 5 page findings + resetting their relation to page 7 findings
    this.renameExistingCorrelations(incomingLeftFindings);

    // Resetting right finding correlation bound to changed/removed finding from page 7
    this.resetRightFindingCorrelation(incomingRightFindings);

    // Adding correlations basing on newly created page 5 findings
    this.addNewCorrelation(incomingLeftFindings, correlationsLeftFindingsIds);

    // If any changes to the correlations were made comparing to previous state reenumarate collection according to the left findings order
    if (this.wasModified) {
      this.sortAndReenumerateCorrelations(incomingLeftFindings);
      this.handler.reinitializeCollection(this.handler.collection);
      this.changeDetectionService.triggerChange();
    }
    this.initializationFinished$.next(true);
  }

  private removeCorrelations(incomingLeftFindingsIds: string[], correlationsLeftFindingsIds: string[]): void {
    const removedLeftFindingsIds = difference(correlationsLeftFindingsIds, incomingLeftFindingsIds);
    if (removedLeftFindingsIds.length > 0) {
      remove(this.handler.collection, item => removedLeftFindingsIds.includes(item.leftFindingId));
      this.wasModified = true;
    }
  }

  private renameExistingCorrelations(incomingLeftFindings: FindingCorrelationOptionModel[]): void {
    this.handler.collection.forEach(correlation => {
      const boundLeftFinding = incomingLeftFindings.find(item => item.id === correlation.leftFindingId);
      if (correlation.leftFindingType !== boundLeftFinding.findingType) {
        correlation.leftFindingType = boundLeftFinding.findingType;
        correlation.rightFindingId = null;
        correlation.rightFindingType = 'None';
        correlation.rightFindingSelectedOption = 'None';
        this.wasModified = true;
      }
    });
  }

  private resetRightFindingCorrelation(incomingRightFindings: FindingCorrelationOptionModel[]): void {
    const correlationsWithRightFindingAssigned = this.handler.collection.filter(correlation => correlation.rightFindingId);
    correlationsWithRightFindingAssigned.forEach(correlation => {
      const boundRightFinding = incomingRightFindings.find(item => item.id === correlation.rightFindingId);
      if (!boundRightFinding || boundRightFinding.findingType !== correlation.rightFindingType) {
        correlation.rightFindingId = null;
        correlation.rightFindingType = 'None';
        correlation.rightFindingSelectedOption = 'None';
        this.wasModified = true;
      }
    });
  }

  private addNewCorrelation(incomingLeftFindings: FindingCorrelationOptionModel[], correlationsLeftFindingsIds: string[]): void {
    const newlyAddedPageFindings = incomingLeftFindings.filter(finding => !correlationsLeftFindingsIds.includes(finding.id));
    newlyAddedPageFindings.forEach(finding => {
      this.handler.addElement();
      this.handler.currentItem.leftFindingId = finding.id;
      this.handler.currentItem.leftFindingType = finding.findingType;
      this.wasModified = true;
    });
  }

  private sortAndReenumerateCorrelations(incomingCollection: FindingCorrelationOptionModel[]): void {
    const existingCorrelations = this.handler.collection;
    incomingCollection.forEach((finding, index) => {
      const boundCorrelation = existingCorrelations.find(item => item.leftFindingId === finding.id);
      const boundCorrelationsIndex = existingCorrelations.indexOf(boundCorrelation);
      [existingCorrelations[boundCorrelationsIndex], existingCorrelations[index]] = [
        existingCorrelations[index],
        existingCorrelations[boundCorrelationsIndex]
      ];
      boundCorrelation.number = finding.number;
    });
  }

  private initializeDropdownOptions(): void {
    const incomingRightFindings = this.incomingCorrelationFindings.rightFindings.filter(
      item => item.findingType !== UltrasoundFindingTypeEnum.None
    );

    if (this.isAnyRightFindingSelected(incomingRightFindings)) {
      this.rightFindingDropdownOptions = incomingRightFindings.map((p7Finding: FindingCorrelationOptionModel) => {
        const label = `${this.decimalPipe.transform(p7Finding.number, '2.0-0')} - ${
          this.allRightFindings[this.findRightFindingIndexByValue(p7Finding.findingType)].label
        }`;
        return {
          label,
          value: p7Finding.id,
          findingType: p7Finding.findingType,
          number: p7Finding.number,
          id: p7Finding.id
        };
      });
    } else {
      this.rightFindingDropdownOptions = [];
    }
    this.rightFindingDropdownOptions.unshift(this.noCorrelationTranslation[0]);
    this.dropdownsInitialized = true;
  }

  saveCorrelation(editedCorrelation: CorrelationUiModel, selectedFinding: IChangeEvent): void {
    const selectedOption = this.rightFindingDropdownOptions.find(
      (rightFinCorOption: FindingCorrelationOptionModel) => rightFinCorOption.value === selectedFinding.value
    );

    switch (selectedFinding.value) {
      case UltrasoundFindingTypeEnum.None: {
        editedCorrelation.rightFindingId = null;
        editedCorrelation.rightFindingType = UltrasoundFindingTypeEnum.None;
        editedCorrelation.isNoCorrelation = false;
        break;
      }
      case 'NoSonographicCorrelation': {
        editedCorrelation.rightFindingId = null;
        editedCorrelation.rightFindingType = 'NoCorrelation';
        editedCorrelation.isNoCorrelation = true;
        break;
      }
      default: {
        if (!Guid.isEmpty(selectedFinding.value)) {
          editedCorrelation.rightFindingId = selectedFinding.value;
          editedCorrelation.rightFindingType = selectedOption.findingType;
        } else {
          editedCorrelation.rightFindingId = null;
          editedCorrelation.rightFindingType = UltrasoundFindingTypeEnum.None;
        }

        editedCorrelation.isNoCorrelation = false;
      }
    }

    this.handler.collection = this.handler.collection.map((correlation: CorrelationUiModel) => {
      return correlation.leftFindingId === editedCorrelation.leftFindingId ? editedCorrelation : correlation;
    });

    this.changeDetectionService.triggerChange();
  }

  excludedOptions(currentSelection: string): string[] {
    return this.handler.collection.reduce((elements: string[], correlation: CorrelationUiModel) => {
      if (currentSelection !== correlation.rightFindingSelectedOption) {
        elements.push(correlation.rightFindingSelectedOption);
      }
      return elements;
    }, []);
  }

  private findRightFindingIndexByValue(value: string): number {
    return this.allRightFindings.findIndex(el => el.value === value);
  }

  private isAnyRightFindingSelected(findingCorOptions: FindingCorrelationOptionModel[]): boolean {
    return !(findingCorOptions.length === 0 || (findingCorOptions.length === 1 && findingCorOptions[0].findingType === 'None'));
  }

  getCustomLabel(key: number): DropdownModel {
    return this.translationBits[key];
  }

  getFindingTranslationKey(findingType: string): string {
    return `${this.leftFindingsTranslationBaseKey}.${this.findLeftFindingIndexByFindingType(findingType)}.label`;
  }

  private findLeftFindingIndexByFindingType(findingType: string): number {
    const leftFindingIndex = this.allLeftFindings.findIndex(el => el.value === findingType);
    return leftFindingIndex;
  }

  // pagination methods
  setPage(event: any): void {
    this.page = event;
  }

  getPaginatorClass(page): string {
    if (this.page === page.value) {
      return 'current-invalid';
    } else if (page.label === '...') {
      return 'ellipsis-invalid';
    } else {
      return 'item-invalid';
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription?.unsubscribe());
  }
}
