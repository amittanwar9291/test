import { Component, Input } from '@angular/core';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { ExtensionTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity/ascites';
import { AppConfig } from '../../../../../../app.config';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-hemorrhage-characterization',
  templateUrl: './characterization.component.html',
  styleUrls: ['./characterization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isDWI: boolean;

  extensionType = ExtensionTypeEnum;

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

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.peritonealCavity.fileUpload;
  }
}
