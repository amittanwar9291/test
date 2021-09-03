import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { TranslationBitsConfig } from '@commonTemplates/technology/sequences/sequences-finding-column/translation-bits-config';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AcquisitionUiBaseModel } from '@models/shared/newTechnology/ui/acquisition-ui-base.model';
import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';

@Component({
  selector: 'rr-acquisitions-finding-column',
  templateUrl: './acquisitions-finding-column.component.html',
  styleUrls: ['./acquisitions-finding-column.component.scss']
})
export class AcquisitionsFindingColumnComponent implements OnInit, OnDestroy {
  @Input() handler: DynamicComponentHandler<AcquisitionUiBaseModel<ReconstructionUiBaseModel>>;
  @Input() customItemCount: number;
  @Input('isCSPMode') set _isCSPMode(val: boolean) {
    this.isCSPMode = val;
    this.setItemCount();
  }
  @Input() customColumnTitleTranslationKey: string;
  @Input() set findingOptionsTranslationKey(val: string) {
    this.setFindingOptionsDropdownValues(val);
  }
  @Input() set customFindingPropertyName(val: string) {
    this.findingDropdownConfig.findingType = val || 'acquisitionType';
  }

  @Output() findingsStructureChanged = new EventEmitter();
  @Output() findingTypeChangedOrActiveFindingChanged = new EventEmitter();

  subscriptions: Subscription[] = [];
  findingDropdownConfig: FindingColumnConfig;
  isCSPMode: boolean;

  constructor(private translate: TranslateService) {
    this.findingDropdownConfig = new FindingColumnConfig();
  }

  ngOnInit(): void {
    this.initializeDynamicDropdownConfig();
    this.initTranslations();
  }

  private initializeDynamicDropdownConfig(): void {
    this.setItemCount();
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'uni_xc_030208';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'uni_xc_030209';
    this.findingDropdownConfig.subFindings = ['reconstructions'];
    this.findingDropdownConfig.translationBits = new TranslationBitsConfig();
  }

  private setItemCount(): void {
    this.findingDropdownConfig.itemCount = this.customItemCount ? this.customItemCount : this.isCSPMode ? 8 : 10;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('shared-templates.technology.addNewProtocol.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  setFindingOptionsDropdownValues(val: string) {
    this.translate.stream(val).subscribe((out: DropdownModel[]) => {
      this.findingDropdownConfig.dropdownValues = Object.values(out);
    });
  }

  onFindingStructureChanged(): void {
    this.findingsStructureChanged.emit();
  }

  onFindingTypeChangedOrActiveFindingChanged(): void {
    this.findingTypeChangedOrActiveFindingChanged.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
