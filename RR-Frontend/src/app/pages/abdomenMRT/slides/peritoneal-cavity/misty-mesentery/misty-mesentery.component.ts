import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AppConfig } from '../../../../../app.config';

@Component({
  selector: 'rr-misty-mesentery',
  templateUrl: './misty-mesentery.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MistyMesenteryComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() ddW051: DropdownModel[];

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.peritonealCavity.fileUpload;
  }
}
