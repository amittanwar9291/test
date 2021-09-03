import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { PancreaticDuctPathologyTypeEnum } from '@enums/abdomenMRT/pancreas/acute-pancreatitis';

@Component({
  selector: 'rr-diffuse-characterization-two',
  templateUrl: './diffuse-characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseCharacterizationTwoComponent {
  @Input() model: PancreasFindingUiModel;

  pancreaticDuctPathologyType = PancreaticDuctPathologyTypeEnum;

  get isStenosisOrAbort() {
    return [PancreaticDuctPathologyTypeEnum.Stenosis, PancreaticDuctPathologyTypeEnum.Abort].includes(
      this.model.pancreaticDuctPathologyType
    );
  }
}
