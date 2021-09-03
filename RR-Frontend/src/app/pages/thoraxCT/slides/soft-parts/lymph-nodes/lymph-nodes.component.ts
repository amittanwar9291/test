import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LymphNodesAxillaryTypeEnum } from '@enums/thoraxCT/soft-parts/lymph-nodes-axillary';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  styleUrls: ['./lymph-nodes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphNodesComponent {
  @Input() model: SoftPartsFindingUiModel;

  lymphNodesAxillaryTypeEnum = LymphNodesAxillaryTypeEnum;

  clearLymphNodesDetails(value: LymphNodesAxillaryTypeEnum): string {
    return value === this.model.lymphNodesAxillaryType ? '' : 'col3-block col4-block';
  }
}
