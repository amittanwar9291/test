import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { MediastinumTypeEnum } from '@enums/thoraxMRT/mediastinum';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';

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
