import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-complication-reference-image',
  templateUrl: './complication-reference-image.component.html',
  styleUrls: ['./complication-reference-image.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ComplicationReferenceImageComponent {
  @Input() model: LarynxFindingUiModel;

  constructor() {}

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.larynx.fileUpload;
  }
}
