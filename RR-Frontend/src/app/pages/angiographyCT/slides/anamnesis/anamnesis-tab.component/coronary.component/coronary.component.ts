import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';
import { AnginaPectorisTypeEnum } from '@enums/angiographyCT/anamnesis/coronary-artery-disease/angina-pectoris-type.enum';
import { PreviousDiseaseTypeEnum } from '@enums/angiographyCT/anamnesis/coronary-artery-disease/previous-disease-type.enum';

@Component({
  selector: 'rr-coronary',
  templateUrl: 'coronary.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CoronaryComponent {
  @Input() model: IndicationFindingUiModel;

  anginaPectorisType = AnginaPectorisTypeEnum;
  previousDisease = PreviousDiseaseTypeEnum;
}
