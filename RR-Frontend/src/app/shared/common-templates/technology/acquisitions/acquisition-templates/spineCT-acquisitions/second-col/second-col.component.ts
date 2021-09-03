import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AcquisitionUiModel } from '@models/spineCT/ui/technology/acquisition-ui.model';

import { InvestigationTechniqueTypeEnum } from '@enums/shared/technology/investigation-technique-type.enum';
import { CenterspecificPreferencesAcquisitionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-acquisition-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-spine-ct-second-col',
  templateUrl: './second-col.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SecondColComponent {
  @Input() model: AcquisitionUiModel | CenterspecificPreferencesAcquisitionUiModel;
  @Input() formRef: NgForm;
  @Input() positionTypeOptions: DropdownModel[];
  @Input() cmReinforcedType: SimpleAnswerEnum;

  @Output() changeInSubcomponent = new EventEmitter();

  constructor() {}

  emitModelChangeInSubcomponent(): void {
    this.changeInSubcomponent.emit();
  }

  isNumberOfLinesDisabled(): boolean {
    const allowedTechniqueTypes = [InvestigationTechniqueTypeEnum.MultisliceCT, InvestigationTechniqueTypeEnum.DualSourceCT];
    return !allowedTechniqueTypes.includes(this.model.techniqueType);
  }

  isTubeCurrentDisabled(): boolean {
    return this.model.techniqueType !== InvestigationTechniqueTypeEnum.DualSourceCT;
  }

  areTubeCurrentControlsDisabled(): boolean {
    return this.model.referenceValueInMAs !== null;
  }

  resetInvestigationTechniqueDependentControls(value: InvestigationTechniqueTypeEnum): void {
    const allowedTechniqueTypes = [InvestigationTechniqueTypeEnum.MultisliceCT, InvestigationTechniqueTypeEnum.DualSourceCT];
    if (!allowedTechniqueTypes.includes(value)) {
      this.model.numberOfLines = null;
      this.model.tubeVoltage2KV = null;
      this.model.tubeCurrent2MAs = null;
    }
  }

  resetReferenceValue(): void {
    this.model.referenceValueInMAs = null;
  }

  resetTubeCurrentValues(): void {
    this.model.tubeCurrent1MAs = null;
    this.model.tubeCurrent2MAs = null;
  }

  isSecondColumnDisabled(): boolean {
    return this.cmReinforcedType && this.cmReinforcedType !== SimpleAnswerEnum.Yes;
  }
}
