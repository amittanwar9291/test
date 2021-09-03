import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';
import { StadiumAccordingToFontaineTypeEnum } from '@enums/angiographyCT/anamnesis/peripheral-artery-disease-pad';

@Component({
  selector: 'rr-pavk',
  templateUrl: 'pavk.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PavkComponent {
  @Input() model: IndicationFindingUiModel;

  stadiumType = StadiumAccordingToFontaineTypeEnum;
}
