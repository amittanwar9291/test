import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { LocalizationType, MarginType } from '@enums/elbowMRT/soft-tissue/';

@Component({
  selector: 'rr-bursitis',
  templateUrl: './bursitis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BursitisComponent {
  @Input() model: SoftTissueFindingUiModel;

  localizationType: typeof LocalizationType;
  marginType: typeof MarginType;

  constructor() {
    this.localizationType = LocalizationType;
    this.marginType = MarginType;
  }
}
