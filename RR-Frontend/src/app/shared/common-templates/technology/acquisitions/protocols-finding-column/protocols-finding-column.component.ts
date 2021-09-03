import { Component, Input, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AcquisitionUiBaseModel } from '@models/shared/newTechnology/ui/acquisition-ui-base.model';
import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';

@Component({
  selector: 'rr-protocols-finding-column',
  templateUrl: './protocols-finding-column.component.html',
  styleUrls: ['./protocols-finding-column.component.scss']
})
export class ProtocolsFindingColumnComponent implements OnInit, OnDestroy {
  @Input() handler: DynamicComponentHandler<AcquisitionUiBaseModel<ReconstructionUiBaseModel>>;

  @Output() changeInSubcomponent = new EventEmitter();
  @Output() findingToggled = new EventEmitter();
  @Output() activeFindingChanged = new EventEmitter();
  @Output() findingTypeChanged = new EventEmitter();
  @Output() findingAdded = new EventEmitter();
  @Output() findingRemoved = new EventEmitter();

  acquisitionTypes: DropdownModel[];
  subscriptions: Subscription[] = [];
  findingDropdownConfig: FindingColumnConfig;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initializeDynamicDropdownConfig();
    this.initTranslations();
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'protocolType';
    this.findingDropdownConfig.itemCount = 9;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'uni_xc_030217';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'uni_xc_030218';
    this.findingDropdownConfig.subFindings = ['reconstructions'];
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.protocolTypes').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),

      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),

      this.translate.stream('shared-templates.technology.addNewProtocol.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  emitModelChangeInSubcomponent(): void {
    this.changeInSubcomponent.emit();
  }

  emitFindingToggle(): void {
    this.findingToggled.emit();
  }

  emitActiveFindingChanged(): void {
    this.activeFindingChanged.emit();
  }

  emitFindingTypeChanged(): void {
    this.findingTypeChanged.emit();
  }

  emitFindingAdded(): void {
    this.findingAdded.emit();
  }

  emitFindingRemoved(): void {
    this.findingRemoved.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
