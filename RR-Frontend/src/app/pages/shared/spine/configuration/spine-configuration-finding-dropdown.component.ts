import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { DynamicComponentConfig } from '@controls/dynamic-component-wrapper/dynamic-component-config';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { ConfigurationFindingUiModel as spineConfUiModel } from '@models/spineMRT/ui/configuration/configuration-finding-ui.model';
import { ConfigurationFindingUiModel as spineCTConfUiModel } from '@models/spineCT/ui/configuration/configuration-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-spine-configuration-finding-dropdown',
  templateUrl: './spine-configuration-finding-dropdown.component.html',
  styleUrls: ['spine-configuration-finding-dropdown.component.scss'],
  providers: [MakeProvider(SpineConfigurationFindingDropdownComponent)],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SpineConfigurationFindingDropdownComponent
  extends NgModelAccessorBase<DynamicComponentHandler<spineConfUiModel | spineCTConfUiModel>>
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
    return `${this.spineType}.configuration.configurations.value`;
  }

  get areNotFindingsTitle() {
    return `${this.spineType}.configuration.regularFormRegularAlignment.value`;
  }

  get areFindingsTitle() {
    return `${this.spineType}.configuration.findings.value`;
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
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingRRId = this.findingRRId;
    this.findingDropdownConfig.buttonRRId = this.buttonRRId;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream(`${this.spineType}.configuration.findingTypes.options`).subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream(`${this.spineType}.configuration.placeholder`).subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream(`${this.spineType}.configuration.addNewFindings.value`).subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
