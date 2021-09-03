import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-side-effects-finding-column',
  templateUrl: './side-effects-finding-column.component.html',
  styleUrls: ['./side-effects-finding-column.component.scss']
})
export class SideEffectsFindingColumnComponent implements OnInit, OnDestroy {
  @Input() handler: DynamicComponentHandler<SideEffectUiBaseModel>;
  @Input() disabled: boolean;
  @Input() customSideEffectValuesTranslationKey: string;

  subscriptions: Subscription[] = [];
  findingDropdownConfig: FindingColumnConfig;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.initializeDynamicDropdownConfig();
    this.initTranslations();
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'cmSideEffectType';
    this.findingDropdownConfig.itemCount = 7;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'uni_x_030303-1';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'uni_x_030304';
    this.findingDropdownConfig.groupedOptions = true;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate
        .stream(
          this.customSideEffectValuesTranslationKey
            ? this.customSideEffectValuesTranslationKey
            : 'shared-templates.technology.sideEffectsArray.options'
        )
        .subscribe((out: DropdownModel[]) => {
          this.findingDropdownConfig.dropdownValues = out;
        }),

      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),

      this.translate.stream('shared-templates.technology.addCMSideEffect.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),

      this.translate.stream('shared-templates.technology.sideEffectTranslationBits').subscribe((out: string) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }

  getSideEffectCustomLabel(index: number, sideEffectHandler: DynamicComponentHandler<SideEffectUiBaseModel>, translationBits): string {
    if (!translationBits) {
      return;
    }

    let base = '';
    const mild = [
      'LimitedUrticaria',
      'LimitedPruritus',
      'LimitedErythema',
      'LimitedCutaneousEdema',
      'NeckScratching',
      'RhinorrhoeaSneezing',
      'Conjunctivitis',
      'NauseaVomitting'
    ];
    const medium = [
      'DiffuseUrticaria',
      'DiffusePruritus',
      'DiffuseErythemaStableVitalFunctions',
      'FacialEdemaWithoutDyspnoea',
      'ThroatTightness',
      'HoarsenessWithoutDyspnoea',
      'MildBronchospasmWithoutHypoxia'
    ];
    const severe = [
      'DiffuseEdema',
      'FacialEdemaDyspnoea',
      'DiffuseErythemaHypotension',
      'LaryngealEdemaStridor',
      'Bronchospasm',
      'Hypoxia',
      'AnaphylacticShock'
    ];
    const noneToNull = (element: string) => (element === 'None' ? null : element);
    const currentSideEffect = sideEffectHandler.collection[index];

    if (noneToNull(currentSideEffect.cmSideEffectType)) {
      if (mild.includes(currentSideEffect.cmSideEffectType)) {
        base += translationBits.mild;
      }
      if (medium.includes(currentSideEffect.cmSideEffectType)) {
        base += translationBits.mid;
      }
      if (severe.includes(currentSideEffect.cmSideEffectType)) {
        base += translationBits.severe;
      }
      base = base + ' • ' + translationBits.sideEffectTypes[currentSideEffect.cmSideEffectType];
    }
    return base;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
