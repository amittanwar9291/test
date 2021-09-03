import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { SequencesService } from '../../../services/sequences.service';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SequenceUiModel } from '@models/pelvisMRT/ui/technology/sequence-ui.model';
import { CenterspecificPreferencesSequenceUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-sequence-ui.model';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology/weighting-type.enum';

import { ISimpleObject } from '@interfaces/shared/simple-object.interface';

@Component({
  selector: 'rr-pelvis-mrt-sequence',
  templateUrl: './pelvisMRT-sequences.component.html',
  styleUrls: ['./pelvisMRT-sequences.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class PelvisMRTSequencesComponent implements OnInit, OnDestroy {
  @Input() model: SequenceUiModel | CenterspecificPreferencesSequenceUiModel;
  @Input() itemIndex: number;
  @Input() disabled: boolean;
  @Input() formRef: NgForm; // form reference necessary for the rrContentReset directive to work
  @Input() cmReinforcedType: SimpleAnswerEnum;

  @Output() changeInSubcomponent = new EventEmitter();

  sequenceTypes: DropdownModel[];
  orientationTypes: DropdownModel[];
  subscriptions: Subscription[] = [];

  weightingType: typeof WeightingTypeEnum;

  constructor(private translate: TranslateService, private sequencesService: SequencesService) {}

  ngOnInit() {
    this.weightingType = WeightingTypeEnum;

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
      this.translate.stream('shared-templates.technology.pelvisMRTSequenceTypes.options').subscribe((out: DropdownModel[]) => {
        this.sequenceTypes = Object.values(out);
        this.sequencesService.updateSequenceTypeBits(this.sequenceTypes);
      }),
      this.translate.stream('shared-templates.technology.pelvisMRTOrientationTypes.options').subscribe((out: DropdownModel[]) => {
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
