import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';
import { IndicationFindingTypeEnum } from '@enums/angiographyCT/anamnesis';

@Component({
  selector: 'rr-aortic-vaskulitis',
  templateUrl: 'aortic.vaskulitis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AorticVaskulitisComponent {
  @Input() model: IndicationFindingUiModel;
  indicationFindingType = IndicationFindingTypeEnum;
}
