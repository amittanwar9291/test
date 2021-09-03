import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PancreaticDuctPathologyTypeEnum } from '@enums/abdomenMRT/pancreas/acute-pancreatitis';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';

@Component({
  selector: 'rr-acute-characterization-one',
  templateUrl: './acute-characterization-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AcuteCharacterizationOneComponent {
  @Input() model: PancreasFindingUiModel;

  pancreaticDuctPathologyType = PancreaticDuctPathologyTypeEnum;
}
