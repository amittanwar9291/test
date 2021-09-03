import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { NeuritisLocalizationType, NUlnarisType, NMedianusType, CompressionType } from '@enums/elbowMRT/soft-tissue/';

@Component({
  selector: 'rr-neuritis',
  templateUrl: './neuritis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NeuritisComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() isTechnologyCMReinforcedChecked: boolean;

  neuritisLocalizationType: typeof NeuritisLocalizationType;
  nUlnarisType: typeof NUlnarisType;
  nMedianusType: typeof NMedianusType;
  compressionType: typeof CompressionType;

  constructor() {
    this.neuritisLocalizationType = NeuritisLocalizationType;
    this.nUlnarisType = NUlnarisType;
    this.nMedianusType = NMedianusType;
    this.compressionType = CompressionType;
  }
}
