import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VascularExtentTypeEnum } from '@enums/thoraxCT/mediastinum';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

@Component({
  selector: 'rr-cardio-thoracic-aorta',
  templateUrl: './cardio-thoracic-aorta.component.html',
  styleUrls: ['./cardio-thoracic-aorta.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CardioThoracicAortaComponent {
  @Input() model: MediastinumFindingUiModel;

  vascularExtentTypeEnum = VascularExtentTypeEnum;
}
