import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PossibleEpileptogenicFindingsTypeEnum } from '@enums/headMRT/summary/seizure';
import { SummaryFindingUiModel } from '@models/headMRT/ui/summary/summary-finding-ui.model';

@Component({
  selector: 'rr-seizure',
  templateUrl: './seizure.component.html',
  styleUrls: ['./seizure.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SeizureComponent {
  @Input() model: SummaryFindingUiModel;

  possibleEpileptogenicFindingsType = PossibleEpileptogenicFindingsTypeEnum;
}
