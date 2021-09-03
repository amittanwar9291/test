import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';

@Component({
  selector: 'rr-thyroid-goiter-mass-inflammation',
  templateUrl: './thyroid-goiter-mass-inflammation.component.html',
  styleUrls: ['./thyroid-goiter-mass-inflammation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThyroidGoiterMassInflammationComponent {
  @Input() model: ThyroidFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;
}
