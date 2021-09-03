import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { MediastinumTypeEnum } from '@enums/thoraxCT/mediastinum/mediastinum-finding/mediastinum-type.enum';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

@Component({
  selector: 'rr-mediastinum-finding',
  templateUrl: './mediastinum-finding.component.html',
  styleUrls: ['./mediastinum-finding.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MediastinumFindingComponent {
  @Input() model: MediastinumFindingUiModel;

  mediastinumTypeEnum = MediastinumTypeEnum;
  locationTypeEnum = LocationTypeEnum;
}
