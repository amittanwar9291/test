import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';
import { IndicationFindingTypeEnum } from '@enums/angiographyCT/anamnesis';

@Component({
  selector: 'rr-penetrating-intramural-dissection',
  templateUrl: 'penetrating.intramural.dissection.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PenetratingIntramuralDissectionComponent {
  @Input() model: IndicationFindingUiModel;
  indicationFindingType = IndicationFindingTypeEnum;
}
