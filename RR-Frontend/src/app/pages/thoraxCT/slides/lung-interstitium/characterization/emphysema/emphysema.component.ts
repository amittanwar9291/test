import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { EmphysemaTypeEnum } from '@enums/thoraxCT/lung-interstitium';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';

@Component({
  selector: 'rr-emphysema',
  templateUrl: './emphysema.component.html',
  styleUrls: ['./emphysema.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EmphysemaComponent {
  @Input() model: LungInterstitiumFindingUiModel;

  emphysemaTypeEnum = EmphysemaTypeEnum;
}
