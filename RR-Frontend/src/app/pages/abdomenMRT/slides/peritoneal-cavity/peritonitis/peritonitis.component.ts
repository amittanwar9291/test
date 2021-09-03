import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { AppConfig } from '../../../../../app.config';

@Component({
  selector: 'rr-peritonitis',
  templateUrl: './peritonitis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PeritonitisComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.peritonealCavity.fileUpload;
  }
}
