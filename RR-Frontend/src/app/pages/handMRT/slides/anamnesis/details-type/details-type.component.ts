import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnamnesisIndicationFindingUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { DetailsTypeEnum } from '@enums/handMRT/anamnesis/details-type.enum';

@Component({
  selector: 'rr-han-details-type',
  templateUrl: './details-type.component.html',
  styleUrls: ['./details-type.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DetailsTypeComponent {
  @Input() model: AnamnesisIndicationFindingUiModel;
  detailsType: typeof DetailsTypeEnum;

  constructor() {
    this.detailsType = DetailsTypeEnum;
  }
}
