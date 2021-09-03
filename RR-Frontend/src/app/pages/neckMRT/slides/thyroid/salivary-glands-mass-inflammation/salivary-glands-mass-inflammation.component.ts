import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-salivary-glands-mass-inflammation',
  templateUrl: './salivary-glands-mass-inflammation.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SalivaryGlandsMassInflammationComponent {
  @Input() model: ThyroidFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;
  @Input() salivaryGlandsDDOptions: DropdownModel[];
  @Input() salivaryGlandsDDOptions2: DropdownModel[];
}
