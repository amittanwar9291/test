import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { LymphNodeStationsFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymph-node-stations-finding-ui.model';
import { LymphaticSystemFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphNodesComponent {
  @Input() model: LymphaticSystemFindingUiModel;
  @Input() findingDropdownConfig: FindingColumnConfig;
  @Input() findingLymphNodeStationsHandler: DynamicComponentHandler<LymphNodeStationsFindingUiModel>;
  @Input() W085: DropdownGroupedModel[];
  @Input() isCM: boolean;
  @Input() isDWI: boolean;
  @Input() closedLocalizer: boolean;
  @Output() emitLocalizer = new EventEmitter();
}
