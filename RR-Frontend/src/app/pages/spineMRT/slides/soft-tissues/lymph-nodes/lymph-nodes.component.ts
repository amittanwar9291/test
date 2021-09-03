import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CharacterizationTypeEnum } from '@enums/spineMRT/soft-tissues';

import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  styleUrls: ['./lymph-nodes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphNodesComponent {
  @Input() model: SoftTissuesFindingUiModel;

  characterizationTypeEnum: typeof CharacterizationTypeEnum = CharacterizationTypeEnum;
}
