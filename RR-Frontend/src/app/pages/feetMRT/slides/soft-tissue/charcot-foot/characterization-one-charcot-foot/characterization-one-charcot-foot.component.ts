import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Component({
  selector: 'rr-characterization-one-charcot-foot',
  templateUrl: './characterization-one-charcot-foot.component.html',
  styleUrls: ['./characterization-one-charcot-foot.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneCharcotFootComponent {
  @Input() model: SoftTissueFindingUiModel;
}
