import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-subarachnoid-hemorrhage',
  templateUrl: './subarachnoid-hemorrhage.component.html',
  styleUrls: ['./subarachnoid-hemorrhage.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubarachnoidHemorrhageComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  localizationTabMandatoryElements = [
    [
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isRightSide),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isLeftSide),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isMedian)
    ].join(' '),
    [
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isInfratentorial),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isOccipital),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isParietal),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isTemporal),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isFrontobasal),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isFrontal)
    ].join(' ')
  ];
}
