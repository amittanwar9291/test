import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { SequenceUiModel } from '@models/spineMRT/ui/technology/sequence-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CenterspecificPreferencesSequenceUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-sequence-ui.model';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

import { SequencesService } from '../../../services/sequences.service';

import { ISimpleObject } from '@interfaces/shared/simple-object.interface';

@Component({
  selector: 'rr-spine-mrt-sequence',
  templateUrl: './spineMRT-sequences.component.html',
  styleUrls: ['./spineMRT-sequences.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SpineMRTSequencesComponent implements OnInit, OnDestroy {
  @Input() model: SequenceUiModel | CenterspecificPreferencesSequenceUiModel;
  @Input() itemIndex: number;
  @Input() disabled: boolean;
  @Input() cmReinforcedType: SimpleAnswerEnum;

  @Output() changeInSubcomponent = new EventEmitter();

  sequenceTypes: DropdownModel[];
  orientationTypes: DropdownModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService, private sequencesService: SequencesService) {}

  ngOnInit(): void {
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
      this.translate.stream('shared-templates.technology.spineMRTSequenceTypes.options').subscribe((out: DropdownModel[]) => {
        this.sequenceTypes = Object.values(out);
        this.sequencesService.updateSequenceTypeBits(this.sequenceTypes);
      }),
      this.translate.stream('shared-templates.technology.spineMRTOrientationTypes.options').subscribe((out: DropdownModel[]) => {
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
