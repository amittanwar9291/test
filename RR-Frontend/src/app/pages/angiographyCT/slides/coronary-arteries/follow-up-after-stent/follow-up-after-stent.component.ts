import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NoStenosisTypeEnum } from '@enums/angiographyCT/coronary-arteries/common/no-stenosis-type.enum';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';

@Component({
  selector: 'rr-follow-up-after-stent',
  templateUrl: './follow-up-after-stent.component.html',
  styleUrls: ['./follow-up-after-stent.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FollowUpAfterStentComponent {
  @Input() model: CoronaryArteriesFindingUiModel;
  noStenosisTypeEnum = NoStenosisTypeEnum;
}
