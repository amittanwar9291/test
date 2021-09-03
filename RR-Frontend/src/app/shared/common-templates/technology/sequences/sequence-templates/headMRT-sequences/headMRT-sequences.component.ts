import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { CenterspecificPreferencesSequenceUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-sequence-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { SequencesService } from '@commonTemplates/technology/services/sequences.service';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

import { ISimpleObject } from '@interfaces/shared/simple-object.interface';
import { SequenceUiModel } from '@models/headMRT/ui/technology/sequence-ui.model';
import { WeightingTypeEnum } from '@enums/shared/technology';

@Component({
  selector: 'rr-head-mrt-sequence',
  templateUrl: './headMRT-sequences.component.html',
  styleUrls: ['./headMRT-sequences.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class HeadMRTSequencesComponent implements OnInit, OnDestroy {
  @Input() model: SequenceUiModel | CenterspecificPreferencesSequenceUiModel;
  @Input() itemIndex: number;
  @Input() disabled: boolean;
  @Input() isCmReinforcedTypeNoSelected = false;
  @Input() cmReinforcedType: SimpleAnswerEnum;
  @Output() changeInSubcomponent = new EventEmitter();
  @Input() formRef: NgForm;

  sequenceTypes: DropdownModel[];
  orientationTypes: DropdownModel[];
  otherApplicationsTypes: DropdownModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService, private sequencesService: SequencesService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  emitModelChangeInSubcomponent() {
    this.changeInSubcomponent.emit();
  }

  isPostContrastDisabled(): boolean {
    return this.cmReinforcedType && this.cmReinforcedType !== SimpleAnswerEnum.Yes;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.orientationTypeTranslationBits').subscribe((out: ISimpleObject) => {
        this.sequencesService.updateOrientationTypeBits(out);
      }),
      this.translate.stream('shared-templates.technology.headMRTSequenceTypes.options').subscribe((out: DropdownModel[]) => {
        this.sequenceTypes = Object.values(out);
        this.sequencesService.updateSequenceTypeBits(this.sequenceTypes);
      }),
      this.translate.stream('shared-templates.technology.headMRTOrientationTypes.options').subscribe((out: DropdownModel[]) => {
        this.orientationTypes = Object.values(out);
      }),
      this.translate.stream('shared-templates.technology.otherApplicationsTypesHeadMRT.options').subscribe((out: DropdownModel[]) => {
        this.otherApplicationsTypes = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  isTechniqueDWIEnabled() {
    return this.model.weightingType && this.model.weightingType === WeightingTypeEnum.DWI;
  }
}
