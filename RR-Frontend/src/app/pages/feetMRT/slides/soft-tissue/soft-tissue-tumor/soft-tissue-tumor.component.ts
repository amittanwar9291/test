import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Component({
  selector: 'rr-soft-tissue-tumor',
  templateUrl: './soft-tissue-tumor.component.html',
  styleUrls: ['./soft-tissue-tumor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftTissueTumorComponent {
  @Input() model: SoftTissueFindingUiModel;
}
