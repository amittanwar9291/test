import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailsInterventionTypeEnum } from '@enums/spineCT/anamnesis/details-intervention-type.enum';
import { IntracranialHypotensionSyndromeTypeEnum } from '@enums/spineCT/anamnesis/intracranial-hypotension-syndrome-type.enum';
import { PreviousInterventionTypeEnum } from '@enums/spineCT/anamnesis/previous-intervention-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { PreviousInterventionUiModel } from '@models/spineCT/ui/anamnesis/previous-intervention-ui.model';
import { compact } from 'lodash';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';

@Component({
  selector: 'rr-previous-interventions',
  templateUrl: './previous-interventions.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PreviousInterventionsComponent {
  @Input() model: PreviousInterventionUiModel;
  @Input() spineLocalizerPermittedSelection = new SpineLocation();

  @Output() emitLocalizer = new EventEmitter<SpineLocationLogicTypeEnum>();

  previousInterventionType = PreviousInterventionTypeEnum;
  intracranialHypotensionSyndromeType = IntracranialHypotensionSyndromeTypeEnum;
  detailsInterventionType = DetailsInterventionTypeEnum;
  spineSelectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;

  isInterventionShown(intervention: PreviousInterventionTypeEnum): boolean {
    return this.model?.previousInterventionType === intervention;
  }

  openComplexLocalizer(): void {
    this.emitLocalizer.emit();
  }

  isSingleSelectOnLocalizer(): boolean {
    return compact(Object.values(this.model.spineLocation)).length === 1;
  }
}
