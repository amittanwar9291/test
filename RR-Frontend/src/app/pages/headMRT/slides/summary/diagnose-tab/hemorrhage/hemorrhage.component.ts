import { Component, Input } from '@angular/core';
import { SummaryFindingUiModel } from '@models/headMRT/ui/summary/summary-finding-ui.model';
import {
  AtraumaticEtiologyTypeEnum,
  CharacterizationTypeEnum,
  EtiologyTypeEnum,
  HemorrhageLocalizationTypeEnum
} from '@enums/headMRT/summary/hemorrhage';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-hemorrhage',
  templateUrl: './hemorrhage.component.html',
  styleUrls: ['./hemorrhage.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class HemorrhageComponent {
  @Input() model: SummaryFindingUiModel;

  hemorrhageLocalizationType = HemorrhageLocalizationTypeEnum;
  etiologyType = EtiologyTypeEnum;
  atraumaticEtiologyType = AtraumaticEtiologyTypeEnum;
  characterizationType = CharacterizationTypeEnum;

  clearCharacterizationDetails() {
    this.model.etiologyType = EtiologyTypeEnum.None;
    this.clearEtiologyDetails();
  }

  clearEtiologyDetails() {
    this.model.isFracture = false;
    this.model.atraumaticEtiologyType = AtraumaticEtiologyTypeEnum.None;
  }
}
