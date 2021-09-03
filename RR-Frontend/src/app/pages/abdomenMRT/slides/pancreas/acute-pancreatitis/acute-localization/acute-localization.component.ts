import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AcutePancreatitisExpansionTypeEnum } from '@enums/abdomenMRT/pancreas/acute-pancreatitis';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';

@Component({
  selector: 'rr-acute-localization',
  templateUrl: './acute-localization.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AcuteLocalizationComponent {
  @Input() model: PancreasFindingUiModel;

  acutePancreatitisExpansionType = AcutePancreatitisExpansionTypeEnum;
}
