import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import { SideTypeEnum } from '@enums/headMRT/anamnesis/side-type.enum';
import { nameof } from 'ts-simple-nameof';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-dural-avfistula',
  templateUrl: './dural-avfistula.component.html',
  styleUrls: ['./dural-avfistula.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DuralAVFistulaComponent {
  @Input() model: VesselsFindingUiModel;
  sideTypeEnum = SideTypeEnum;
  detailsValidation = [
    nameof<VesselsFindingUiModel>(m => m.isFrontal),
    nameof<VesselsFindingUiModel>(m => m.isTemporal),
    nameof<VesselsFindingUiModel>(m => m.isParietal),
    nameof<VesselsFindingUiModel>(m => m.isOccipital),
    nameof<VesselsFindingUiModel>(m => m.isInfratentorial)
  ];

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.headMRT.vessels.fileUpload;
  }
}
