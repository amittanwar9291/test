import { Component, Input } from '@angular/core';
import { FredericsonStadiumTypeEnum } from '@enums/feetMRT/soft-tissue';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-tibial-stress-syndrome',
  templateUrl: './tibial-stress-syndrome.component.html',
  styleUrls: ['./tibial-stress-syndrome.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TibialStressSyndromeComponent {
  @Input() model: SoftTissueFindingUiModel;

  fredericsonStadiumTypeEnum: typeof FredericsonStadiumTypeEnum;

  constructor() {
    this.fredericsonStadiumTypeEnum = FredericsonStadiumTypeEnum;
  }
}
