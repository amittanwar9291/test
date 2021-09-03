import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SoftPartsFindingUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-finding-ui.model';

import { LymphNodesAxillaryTypeEnum } from '@enums/shoulderMRT/soft-parts';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  styleUrls: ['../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphNodesComponent {
  @Input() model: SoftPartsFindingUiModel;

  lymphNodesAxillaryType: typeof LymphNodesAxillaryTypeEnum;

  constructor() {
    this.lymphNodesAxillaryType = LymphNodesAxillaryTypeEnum;
  }
}
