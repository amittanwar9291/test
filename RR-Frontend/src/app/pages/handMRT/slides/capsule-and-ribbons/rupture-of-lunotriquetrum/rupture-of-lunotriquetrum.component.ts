import { Component, Input } from '@angular/core';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';
import { NgForm, ControlContainer } from '@angular/forms';

@Component({
  selector: 'rr-rupture-of-lunotriquetrum',
  templateUrl: './rupture-of-lunotriquetrum.component.html',
  styleUrls: ['./rupture-of-lunotriquetrum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RuptureOfLunotriquetrumComponent {
  @Input() model: CapsuleAndRibbonsFindingUiModel;
}
