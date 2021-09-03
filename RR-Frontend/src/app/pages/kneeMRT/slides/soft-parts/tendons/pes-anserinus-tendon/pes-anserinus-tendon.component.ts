import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { TendonsLocalizationTypeEnum } from '@enums/kneeMRT/soft-parts';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';

@Component({
  selector: 'rr-pes-anserinus-tendon',
  templateUrl: './pes-anserinus-tendon.component.html',
  styleUrls: ['./pes-anserinus-tendon.component.scss', '../../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PesAnserinusTendonComponent {
  @Input() model: SoftPartsFindingUiModel;

  tendonsLocalizationTypeEnum: typeof TendonsLocalizationTypeEnum;

  constructor() {
    this.tendonsLocalizationTypeEnum = TendonsLocalizationTypeEnum;
  }
}
