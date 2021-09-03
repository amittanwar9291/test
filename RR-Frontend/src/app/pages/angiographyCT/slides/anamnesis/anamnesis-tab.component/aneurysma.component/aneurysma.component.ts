import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';

@Component({
  selector: 'rr-aneurysma',
  templateUrl: 'aneurysma.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AneurysmaComponent {
  @Input() model: IndicationFindingUiModel;
}
