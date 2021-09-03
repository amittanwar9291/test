import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';

@Component({
  selector: 'rr-side-effect',
  templateUrl: './side-effect.component.html',
  styleUrls: ['./side-effect.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SideEffectComponent implements OnInit, OnDestroy {
  @Input() model: SideEffectUiBaseModel;
  @Input() itemIndex: number;

  subscriptions: Subscription[] = [];
  translationBits: { light: string; mid: string; severe: string; sideEffectTypes: string[] }; // TODO check if translationBits are used at all
  durationOfSideEffects: DropdownModel[];

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  get sideEffectFindingTitle(): string {
    if (!this.translationBits) {
      return;
    }
    const { sideEffectTypes } = this.translationBits;
    const { cmSideEffectType } = this.model;

    if (!sideEffectTypes) {
      return;
    }
    return sideEffectTypes[cmSideEffectType] || '';
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate
        .stream('shared-templates.technology.sideEffectTranslationBits') // TODO duplicate is in SideEffectsFindingColumnComponent...
        .subscribe((out: { light: string; mid: string; severe: string; sideEffectTypes: string[] }) => {
          this.translationBits = out;
        }),
      this.translate.stream('shared-templates.technology.durationOfSideEffectsArray.options').subscribe((out: DropdownModel[]) => {
        this.durationOfSideEffects = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
