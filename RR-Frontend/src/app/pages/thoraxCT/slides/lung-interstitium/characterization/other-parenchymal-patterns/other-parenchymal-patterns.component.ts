import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MosaicIntensityTypeEnum, MosaicPatternTypeEnum } from '@enums/thoraxCT/lung-interstitium';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';

@Component({
  selector: 'rr-other-parenchymal-patterns',
  templateUrl: './other-parenchymal-patterns.component.html',
  styleUrls: ['./other-parenchymal-patterns.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OtherParenchymalPatternsComponent {
  @Input() model: LungInterstitiumFindingUiModel;

  mosaicPatternTypeEnum = MosaicPatternTypeEnum;
  mosaicIntensityTypeEnum = MosaicIntensityTypeEnum;
}
