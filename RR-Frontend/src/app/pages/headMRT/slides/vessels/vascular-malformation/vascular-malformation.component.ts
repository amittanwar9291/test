import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import { WithAVShuntTypeEnum, WithoutAVShuntTypeEnum } from '@enums/headMRT/vessels';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-vascular-malformation',
  templateUrl: './vascular-malformation.component.html',
  styleUrls: ['./vascular-malformation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VascularMalformationComponent {
  @Input() model: VesselsFindingUiModel;
  withoutAVShuntTypeEnum = WithoutAVShuntTypeEnum;
  withAVShuntTypeEnum = WithAVShuntTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.headMRT.vessels.fileUpload;
  }
}
