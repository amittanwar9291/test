import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PatternTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/pattern-type.enum';

import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-subarachnoid-localization-tab',
  templateUrl: './subarachnoid-localization-tab.component.html',
  styleUrls: ['./subarachnoid-localization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubarachnoidLocalizationTabComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  patternTypeEnum = PatternTypeEnum;

  sideValidationGroup = [
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isLeftSide),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isRightSide),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isMedian)
  ];

  regionValidationGroup = [
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isFrontal),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isFrontobasal),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isTemporal),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isParietal),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isOccipital),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isInfratentorial),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isSubarachnoidCisterns)
  ];
}
