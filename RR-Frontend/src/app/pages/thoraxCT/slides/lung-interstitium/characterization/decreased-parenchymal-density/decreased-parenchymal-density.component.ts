import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CystWallTypeEnum, LungInterstitiumCystTypeEnum, ReducedParenchymaDensityPatternTypeEnum } from '@enums/thoraxCT/lung-interstitium';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';

@Component({
  selector: 'rr-decreased-parenchymal-density',
  templateUrl: './decreased-parenchymal-density.component.html',
  styleUrls: ['./decreased-parenchymal-density.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DecreasedParenchymalDensityComponent {
  @Input() model: LungInterstitiumFindingUiModel;

  reducedParenchymaDensityPatternTypeEnum = ReducedParenchymaDensityPatternTypeEnum;
  lungInterstitiumCystTypeEnum = LungInterstitiumCystTypeEnum;
  cystWallTypeEnum = CystWallTypeEnum;
}
