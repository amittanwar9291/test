import { Component, Input } from '@angular/core';

import { ControlContainer, NgForm } from '@angular/forms';

import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['../../labrum-and-ribbons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: LabrumAndRibbonsFindingUiModel;
  @Input() characterizationCheckboxGroup: string;

  constructor() {}
}
