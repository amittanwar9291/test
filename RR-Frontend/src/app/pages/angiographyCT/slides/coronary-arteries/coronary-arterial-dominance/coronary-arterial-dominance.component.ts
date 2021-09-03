import { Component, Input } from '@angular/core';
import { CoronaryArterialDominanceTypeEnum } from '@enums/angiographyCT/coronary-arteries/coronary-arterial-dominance/coronary-arterial-dominance-type.enum';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-coronary-arterial-dominance',
  templateUrl: './coronary-arterial-dominance.component.html',
  styleUrls: ['./coronary-arterial-dominance.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CoronaryArterialDominanceComponent {
  coronaryArterialDominanceTypeEnum = CoronaryArterialDominanceTypeEnum;

  @Input() model: CoronaryArteriesFindingUiModel;
}
