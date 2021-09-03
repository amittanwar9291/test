import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-decreased-renal-volume',
  templateUrl: './decreased-renal-volume.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DecreasedRenalVolumeComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() differentialDiagnosisOptions: DropdownModel[];
  @Input() isCMReinforced: boolean;
}
