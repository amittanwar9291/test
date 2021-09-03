import { Component, Input } from '@angular/core';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { AscitesQualityTypeEnum, QuantityTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity/ascites';
import { AppConfig } from '../../../../../../app.config';

@Component({
  selector: 'rr-ascites-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  quantityType = QuantityTypeEnum;
  ascitesQualityType = AscitesQualityTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.peritonealCavity.fileUpload;
  }
}
