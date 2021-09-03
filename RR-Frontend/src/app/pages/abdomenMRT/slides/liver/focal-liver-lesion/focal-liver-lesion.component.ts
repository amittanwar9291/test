import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-focal-liver-lesion',
  templateUrl: './focal-liver-lesion.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocalLiverLesionComponent {
  @Input() model: LiverFindingUiModel;
  @Input() focalLiverLesionDDOptions1: DropdownModel[];
  @Input() focalLiverLesionDDOptions2: DropdownModel[];
  @Input() growthPatternsDDOptions: DropdownModel[];
}
