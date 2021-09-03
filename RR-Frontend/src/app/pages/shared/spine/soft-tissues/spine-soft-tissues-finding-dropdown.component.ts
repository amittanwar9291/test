import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { DynamicComponentConfig } from '@controls/dynamic-component-wrapper/dynamic-component-config';

import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

import { SoftTissuesFindingTypeEnum } from '@enums/shared/spine/soft-tissues/soft-tissues-finding-type.enum';

import { SoftTissuesFindingUiModel as spineMRTSoftTisUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { SoftTissuesFindingUiModel as spineCTSoftTisUiModel } from '@models/spineCT';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-spine-soft-tissues-finding-dropdown',
  templateUrl: './spine-soft-tissues-finding-dropdown.component.html',
  styleUrls: ['./spine-soft-tissues-finding-dropdown.component.scss'],
  providers: [MakeProvider(SpineSoftTissuesFindingDropdownComponent)],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SpineSoftTissuesFindingDropdownComponent
  extends NgModelAccessorBase<DynamicComponentHandler<spineMRTSoftTisUiModel | spineCTSoftTisUiModel>>
  implements OnInit, OnDestroy {
  @Input() spineType: string;
  @Input() titleRRId: string;

  @Input() get areFindings() {
    return this.areFindingsValue;
  }

  set areFindings(val: string) {
    this.areFindingsValue = val;
    this.areFindingsChange.emit(this.areFindingsValue);
  }

  @Input() areNotFindingsRadioRRId: string;
  @Input() areFindingsRadioRRId: string;
  @Input() findingRRId: string;
  @Input() buttonRRId: string;

  @Output() areFindingsChange = new EventEmitter<string>();

  areFindingsValue: string;
  subscriptions: Subscription[] = [];
  findingDropdownConfig: DynamicComponentConfig;

  get title() {
    return `${this.spineType}.soft-tissues.findings.value`;
  }

  get areNotFindingsTitle() {
    return `${this.spineType}.soft-tissues.paravertebralSoftTissuesInconspicuous.value`;
  }

  get areFindingsTitle() {
    return `${this.spineType}.soft-tissues.pathology.value`;
  }

  get descriptionTypes() {
    return this.spineType === 'spineMRT'
      ? [SoftTissuesFindingTypeEnum.ParaspinalSpace, SoftTissuesFindingTypeEnum.IntraduralExtramedullarySpace]
      : [];
  }

  constructor(public translate: TranslateService) {
    super();
  }

  ngOnInit(): void {
    this.initializeDynamicDropdownConfig();
    this.initTranslations();
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new DynamicComponentConfig();
    this.findingDropdownConfig.itemCount = this.descriptionTypes.length > 0 ? 5 : 8;
    this.findingDropdownConfig.findingRRId = this.findingRRId;
    this.findingDropdownConfig.buttonRRId = this.buttonRRId;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream(`${this.spineType}.soft-tissues.findingTypes`).subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream(`${this.spineType}.soft-tissues.placeholder`).subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream(`${this.spineType}.soft-tissues.addNewFindings.value`).subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream(`${this.spineType}.soft-tissues.translationBits`).subscribe((out: string) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }

  getCustomLabel(
    index: number,
    findingHandler: DynamicComponentHandler<spineMRTSoftTisUiModel | spineCTSoftTisUiModel>,
    translationBits
  ): string {
    let result = '';
    if (findingHandler) {
      const findingType = findingHandler.collection[index].findingType;

      if (findingType) {
        result = translationBits[findingType];
      }
    }

    return result;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
