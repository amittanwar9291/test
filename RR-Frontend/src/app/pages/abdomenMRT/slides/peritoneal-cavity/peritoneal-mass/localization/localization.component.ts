import { Component, Input } from '@angular/core';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { FormTypeEnum, MarginTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity/peritoneal-mass';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-peritoneal-mass-localization',
  templateUrl: './localization.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isMale: boolean;
  @Input() isFemale: boolean;

  marginType = MarginTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  formType = FormTypeEnum;

  resetBothPlanes(): void {
    if (!this.model.extensionSizeInMm) {
      this.model.secondPlaneInMm = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
