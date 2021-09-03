import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SandersAndFrykbergClassificationTypeEnum } from '@enums/feetMRT/soft-tissue';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Component({
  selector: 'rr-characterization-two-charcot-foot',
  templateUrl: './characterization-two-charcot-foot.component.html',
  styleUrls: ['./characterization-two-charcot-foot.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoCharcotFootComponent {
  @Input() model: SoftTissueFindingUiModel;
  sandersAndFrykbergClassificationTypeEnum: typeof SandersAndFrykbergClassificationTypeEnum;

  constructor() {
    this.sandersAndFrykbergClassificationTypeEnum = SandersAndFrykbergClassificationTypeEnum;
  }
}
