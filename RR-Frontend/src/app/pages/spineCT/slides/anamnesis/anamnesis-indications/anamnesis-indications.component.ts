import { Component, Input, Output } from '@angular/core';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { AnamnesisIndicationTypeEnum } from '@enums/spineCT/anamnesis/anamnesis-indication-type.enum';
import { AnamnesisIndicationUiModel } from '@models/spineCT/ui/anamnesis/anamnesis-indication-ui.model';
import { EventEmitter } from '@angular/core';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { IntracranialHypotensionSyndromeTypeEnum } from '@enums/spineCT/anamnesis/intracranial-hypotension-syndrome-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-anamnesis-indications',
  templateUrl: './anamnesis-indications.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnamnesisIndicationsComponent {
  @Input() model: AnamnesisIndicationUiModel;
  @Input() spineLocalizerPermittedSelection = new SpineLocation();

  @Output() emitDirectionalLocalizer = new EventEmitter();
  @Output() emitComplexLocalizer = new EventEmitter();

  anamnesisIndicationType = AnamnesisIndicationTypeEnum;
  spineSelectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  intracranialHypotensionSyndromeType = IntracranialHypotensionSyndromeTypeEnum;

  isIndicationShown(indication: AnamnesisIndicationTypeEnum): boolean {
    return this.model?.anamnesisIndicationType === indication;
  }

  openDirectionalLocalizer(): void {
    this.emitDirectionalLocalizer.emit();
  }

  openComplexLocalizer(): void {
    this.emitComplexLocalizer.emit();
  }
}
