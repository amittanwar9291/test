import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AcquisitionUiModel } from '@models/thoraxCT/ui/technology/acquisition-ui.model';

import { InvestigationTechniqueTypeEnum } from '@enums/shared/technology/investigation-technique-type.enum';
import { TubeCurrentDoseModulationTypeEnum } from '@enums/shared/technology/tube-current-dose-modulation-type.enum';
import { CenterspecificPreferencesAcquisitionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-acquisition-ui.model';

@Component({
  selector: 'rr-head-ct-first-col',
  templateUrl: './first-col.component.html',
  styleUrls: ['./first-col.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class FirstColComponent {
  @Input() model: AcquisitionUiModel | CenterspecificPreferencesAcquisitionUiModel;
  @Input() investigationTechniquesTypeOptions: DropdownModel[];

  @Output() changeInSubcomponent = new EventEmitter();

  tubeCurrentDoseModulationType = TubeCurrentDoseModulationTypeEnum;

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

  isReferenceValueDisabled(): boolean {
    return this.model.tubeCurrent1MAs !== null || this.model.tubeCurrent2MAs !== null;
  }

  areTubeCurrentControlsDisabled(): boolean {
    return this.model.referenceValueInMAs !== null;
  }

  resetInvestigationTechniqueDependentControls(value: InvestigationTechniqueTypeEnum): void {
    const allowedTechniqueTypes = [InvestigationTechniqueTypeEnum.DualSourceCT];
    this.model.numberOfLines = null;
    if (!allowedTechniqueTypes.includes(value)) {
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
}
