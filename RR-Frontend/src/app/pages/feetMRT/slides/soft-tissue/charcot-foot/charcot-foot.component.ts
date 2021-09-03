import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Component({
  selector: 'rr-charcot-foot',
  templateUrl: './charcot-foot.component.html',
  styleUrls: ['./charcot-foot.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharcotFootComponent {
  @Input() model: SoftTissueFindingUiModel;
}
