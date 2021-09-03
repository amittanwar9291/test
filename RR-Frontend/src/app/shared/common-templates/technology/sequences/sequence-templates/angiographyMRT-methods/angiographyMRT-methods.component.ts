import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CenterspecificPreferencesSequenceUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-sequence-ui.model';
import { MethodUiModel } from '@models/angiographyMRT/ui/technology/method-ui.model';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

import { MethodTypeEnum } from '@enums/shared/technology/method-type.enum';
import { SequencesService } from '@commonTemplates/technology/services/sequences.service';

@Component({
  selector: 'rr-angiography-mrt-method',
  templateUrl: './angiographyMRT-methods.component.html',
  styleUrls: ['./angiographyMRT-methods.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class AngiographyMRTMethodsComponent implements OnInit, OnDestroy {
  @Input() model: MethodUiModel | CenterspecificPreferencesSequenceUiModel;
  @Input() itemIndex: number;
  @Input() disabled: boolean;
  @Input() cmReinforcedType: SimpleAnswerEnum;

  @Output() changeInSubcomponent = new EventEmitter();

  nonContrastEnhancedMRAngiographyTypes: DropdownModel[];
  contrastEnhancedMRAngiographyTypes: DropdownModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService, private sequencesService: SequencesService) {}

  ngOnInit() {
    this.initTranslations();
  }

  emitModelChangeInSubcomponent() {
    this.changeInSubcomponent.emit();
  }

  isNonContrastEnhancedDropdownDisabled(): boolean {
    return this.model.methodType !== MethodTypeEnum.NonContrastEnhancedMRAngiography;
  }

  isContrastEnhancedDropdownDisabled(): boolean {
    return this.model.methodType !== MethodTypeEnum.ContrastEnhancedMRAngiography;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.nonContrastEnhancedAngiographyMRT.options').subscribe((out: DropdownModel[]) => {
        this.nonContrastEnhancedMRAngiographyTypes = Object.values(out);
      }),
      this.translate.stream('shared-templates.technology.contrastEnhancedAngiographyMRT.options').subscribe((out: DropdownModel[]) => {
        this.contrastEnhancedMRAngiographyTypes = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  getSelectedNonContrastEnhancedMRAngiographyType(): string {
    if (this.model.nonContrastEnhancedMRAngiographyType === 'PhaseContrastAngiographyPhaseContrastMeasurement') {
      return 'shared-templates.technology.phaseContrastAngiographyShort';
    } else {
      return this.nonContrastEnhancedMRAngiographyTypes.find(item => item.value === this.model.nonContrastEnhancedMRAngiographyType).label;
    }
  }
}
