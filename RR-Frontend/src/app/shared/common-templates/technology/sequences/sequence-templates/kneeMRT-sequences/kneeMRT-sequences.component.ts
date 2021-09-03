import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

import { SequenceUiModel } from '@models/kneeMRT/ui/technology/sequence-ui.model';
import { CenterspecificPreferencesSequenceUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-sequence-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

import { SequencesService } from '../../../services/sequences.service';

import { ISimpleObject } from '@interfaces/shared/simple-object.interface';

@Component({
  selector: 'rr-knee-mrt-sequence',
  templateUrl: './kneeMRT-sequences.component.html',
  styleUrls: ['./kneeMRT-sequences.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class KneeMRTSequencesComponent implements OnInit, OnDestroy {
  @Input() model: SequenceUiModel | CenterspecificPreferencesSequenceUiModel;
  @Input() itemIndex: number;
  @Input() disabled: boolean;
  @Input() cmReinforcedType: SimpleAnswerEnum;

  @Output() changeInSubcomponent = new EventEmitter();

  sequenceTypes: DropdownModel[];
  orientationTypes: DropdownModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService, private sequencesService: SequencesService) {}

  ngOnInit() {
    this.initTranslations();
  }

  emitModelChangeInSubcomponent() {
    this.changeInSubcomponent.emit();
  }

  isSecondColumnDisabled(): boolean {
    return this.cmReinforcedType && this.cmReinforcedType !== SimpleAnswerEnum.Yes;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.orientationTypeTranslationBits').subscribe((out: ISimpleObject) => {
        this.sequencesService.updateOrientationTypeBits(out);
      }),
      this.translate.stream('shared-templates.technology.kneeMRTSequenceTypes.options').subscribe((out: DropdownModel[]) => {
        this.sequenceTypes = Object.values(out);
        this.sequencesService.updateSequenceTypeBits(this.sequenceTypes);
      }),
      this.translate.stream('shared-templates.technology.kneeMRTOrientationTypes.options').subscribe((out: DropdownModel[]) => {
        this.orientationTypes = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
