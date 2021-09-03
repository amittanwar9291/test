import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { EsuphagusTypeEnum, MediastinumLocalizationTypeEnum } from '@enums/thoraxMRT/mediastinum';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';

@Component({
  selector: 'rr-esuphagus',
  templateUrl: './esuphagus.component.html',
  styleUrls: ['./esuphagus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EsuphagusComponent {
  @Input() model: MediastinumFindingUiModel;

  esuphagusTypeEnum = EsuphagusTypeEnum;
  mediastinumLocalizationTypeEnum = MediastinumLocalizationTypeEnum;
}
