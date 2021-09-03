import { Component, Input } from '@angular/core';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { ExtensionTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity/ascites';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-ascites-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isMale: boolean;
  @Input() isFemale: boolean;
  @Input() isDWI: boolean;

  extensionType = ExtensionTypeEnum;
}
