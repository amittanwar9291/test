import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SoftPartsFindingUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-finding-ui.model';

import { MusculatureFindingType, LocationTypeEnum, DeltoideusLocationTypeEnum } from '@enums/shoulderMRT/soft-parts';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { MusculatureUiModel } from '@models/shoulderMRT/ui/soft-parts/musculature-ui.model';

@Component({
  selector: 'rr-musculature',
  templateUrl: './musculature.component.html',
  styleUrls: ['../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MusculatureComponent {
  @Input() model: SoftPartsFindingUiModel;
  @Input() findingDropdownConfig: FindingColumnConfig;
  @Input() findingMusculatureHandler: DynamicComponentHandler<MusculatureUiModel>;

  locationType: typeof LocationTypeEnum;
  deltoideusLocationType: typeof DeltoideusLocationTypeEnum;
  findingType: typeof MusculatureFindingType;

  constructor() {
    this.locationType = LocationTypeEnum;
    this.deltoideusLocationType = DeltoideusLocationTypeEnum;
    this.findingType = MusculatureFindingType;
  }
}
