import { Component, Input } from '@angular/core';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';

@Component({
  selector: 'rr-parathyroid-gland-mass',
  templateUrl: './parathyroid-gland-mass.component.html',
  styleUrls: ['./parathyroid-gland-mass.component.scss']
})
export class ParathyroidGlandMassComponent {
  @Input() model: ThyroidFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;
}
