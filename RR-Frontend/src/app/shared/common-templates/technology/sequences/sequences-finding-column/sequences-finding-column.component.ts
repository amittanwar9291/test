import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SequencesService } from '../../services/sequences.service';

import { isEmpty } from 'lodash';
import { TranslationBitsConfig } from '@commonTemplates/technology/sequences/sequences-finding-column/translation-bits-config';
import { ISimpleObject } from '@interfaces/shared/simple-object.interface';
import { WeightingTypeEnum } from '@enums/shared/technology/weighting-type.enum';

@Component({
  selector: 'rr-sequences-finding-column',
  templateUrl: './sequences-finding-column.component.html',
  styleUrls: ['./sequences-finding-column.component.scss']
})
export class SequencesFindingColumnComponent implements OnInit, OnDestroy {
  @Input() handler: DynamicComponentHandler<SequenceUiBaseModel>;
  @Input() customItemCount: number;
  @Input('isCSPMode') set _isCSPMode(val: boolean) {
    this.isCSPMode = val;
    this.setItemCount();
  }
  @Input() customColumnTitleTranslationKey: string;
  @Input() set customFindingOptionsTranslationKey(val: string) {
    this.setFindingOptionsDropdownValues(val);
  }
  @Input() set customFindingPropertyName(val: string) {
    this.findingDropdownConfig.findingType = val || 'weightingType';
  }

  @Output() changeInSubcomponent = new EventEmitter();

  subscriptions: Subscription[] = [];
  findingDropdownConfig: FindingColumnConfig;
  isCSPMode: boolean;

  constructor(private translate: TranslateService, private sequencesService: SequencesService) {
    this.findingDropdownConfig = new FindingColumnConfig();
  }

  ngOnInit(): void {
    this.initializeDynamicDropdownConfig();
    this.initTranslations();
  }

  private initializeDynamicDropdownConfig(): void {
    this.setItemCount();
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'uni_x_030210';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'uni_x_030211';
    this.findingDropdownConfig.translationBits = new TranslationBitsConfig();
  }

  private setItemCount(): void {
    this.findingDropdownConfig.itemCount = this.customItemCount ? this.customItemCount : this.isCSPMode ? 6 : 7;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),

      this.translate.stream('shared-templates.technology.addNewSequence.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),

      this.sequencesService
        .getOrientationTypeBitsStream()
        .pipe(delay(0))
        .subscribe(orientationTypeBits => {
          this.updateOrientationTypeBits(orientationTypeBits);
        }),

      this.sequencesService
        .getSequenceTypeBitsStream()
        .pipe(delay(0))
        .subscribe(sequenceTypeBits => {
          this.updateSequenceTypeBits(sequenceTypeBits);
        })
    );
  }

  setFindingOptionsDropdownValues(val: string) {
    this.translate.stream(val || 'shared-templates.technology.weightingArray.options').subscribe((out: DropdownModel[]) => {
      this.findingDropdownConfig.dropdownValues = Object.values(out);
    });
  }

  private updateOrientationTypeBits(orientationTypes: ISimpleObject): void {
    if (this.findingDropdownConfig.findingType === 'weightingType' && !isEmpty(orientationTypes)) {
      this.findingDropdownConfig.translationBits.orientationTypeBits = orientationTypes;
    } else {
      this.findingDropdownConfig.translationBits.orientationTypeBits = null;
    }
  }

  private updateSequenceTypeBits(sequenceTypes: DropdownModel[]): void {
    if (this.findingDropdownConfig.findingType === 'weightingType' && !isEmpty(sequenceTypes)) {
      this.findingDropdownConfig.translationBits.sequenceTypeBits = this.mapSequenceTypeToTranslationBitsObject(sequenceTypes);
    } else {
      this.findingDropdownConfig.translationBits.sequenceTypeBits = null;
    }
  }

  private mapSequenceTypeToTranslationBitsObject(sequences: DropdownModel[]): ISimpleObject {
    const sequencesTranslationBitsObject = {};
    sequences.forEach(item => (sequencesTranslationBitsObject[item.value] = item.label));

    return sequencesTranslationBitsObject;
  }

  getSequenceCustomLabel(
    index: number,
    sequenceHandler: DynamicComponentHandler<SequenceUiBaseModel>,
    translationBits,
    findingTypes
  ): string {
    if (
      sequenceHandler.collection[index].weightingType === WeightingTypeEnum.None ||
      (!translationBits.orientationTypeBits && !translationBits.sequenceTypeBits)
    ) {
      return;
    }

    const currentFindingElement = sequenceHandler.collection[index];
    const weightingTypeLabel =
      currentFindingElement.weightingType !== WeightingTypeEnum.None
        ? findingTypes.find(item => item.value === currentFindingElement.weightingType).label
        : currentFindingElement.weightingType;

    const firstBit =
      currentFindingElement.sequenceType !== 'None' && translationBits.sequenceTypeBits
        ? translationBits.sequenceTypeBits[currentFindingElement.sequenceType]
        : null;

    const secondBit =
      currentFindingElement.orientationType !== 'None' && translationBits.orientationTypeBits
        ? translationBits.orientationTypeBits[currentFindingElement.orientationType]
        : null;

    return `${weightingTypeLabel} ${firstBit ? '• ' + firstBit : ''} ${secondBit ? '• ' + secondBit : ''}`;
  }

  emitModelChangeInSubcomponent() {
    this.changeInSubcomponent.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
