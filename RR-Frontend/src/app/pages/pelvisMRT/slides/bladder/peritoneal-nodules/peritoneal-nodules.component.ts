import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { PeritonealNodulesCharacterizationTypeEnum } from '@enums/pelvisMRT/bladder';

@Component({
  selector: 'rr-peritoneal-nodules',
  templateUrl: './peritoneal-nodules.component.html',
  styleUrls: ['./peritoneal-nodules.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PeritonealNodulesComponent {
  @Input() model: BladderFindingUiModel;
  peritonealNodulesCharacterizationTypeEnum = PeritonealNodulesCharacterizationTypeEnum;
}
