import { Component, Input } from '@angular/core';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';
import { GradingTypeEnum } from '@enums/angiographyCT/coronary-arteries/calcification/grading-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-calcification',
  templateUrl: './calcification.component.html',
  styleUrls: ['./calcification.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CalcificationComponent {
  gradingTypeEnum = GradingTypeEnum;
  @Input() model: CoronaryArteriesFindingUiModel;
}
