import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { EsuphagusTypeEnum, MediastinumLocalizationTypeEnum } from '@enums/thoraxCT/mediastinum';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

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

  isShortColumn(): boolean {
    return [this.esuphagusTypeEnum.Stenosis, this.esuphagusTypeEnum.Mass, this.esuphagusTypeEnum.ParaesophagealHernia].includes(
      this.model.esuphagusType
    );
  }
}
