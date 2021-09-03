import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { TendonsLocalizationTypeEnum } from '@enums/kneeMRT/soft-parts';

@Component({
  selector: 'rr-tractus-ilotibialis-tendon',
  templateUrl: './tractus-ilotibialis-tendon.component.html',
  styleUrls: ['./tractus-ilotibialis-tendon.component.sass', '../../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TractusIlotibialisTendonComponent {
  @Input() model: SoftPartsFindingUiModel;

  tendonsLocalizationTypeEnum: typeof TendonsLocalizationTypeEnum;

  constructor() {
    this.tendonsLocalizationTypeEnum = TendonsLocalizationTypeEnum;
  }

  clearRetraction() {
    if (!this.model.isRetraction) {
      this.model.retractionInMm = null;
    }
  }
}
