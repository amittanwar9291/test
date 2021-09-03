import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { AneurysmLocalizationType } from '@enums/elbowMRT/soft-tissue/';

@Component({
  selector: 'rr-aneurysm',
  templateUrl: './aneurysm.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AneurysmComponent {
  @Input() model: SoftTissueFindingUiModel;

  aneurysmLocalizationType: typeof AneurysmLocalizationType;

  constructor() {
    this.aneurysmLocalizationType = AneurysmLocalizationType;
  }
}
