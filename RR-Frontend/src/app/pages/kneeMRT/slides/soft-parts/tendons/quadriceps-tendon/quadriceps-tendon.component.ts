import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { TearTypeEnum, TendonsLocalizationTypeEnum } from '@enums/kneeMRT/soft-parts';

@Component({
  selector: 'rr-quadriceps-tendon',
  templateUrl: './quadriceps-tendon.component.html',
  styleUrls: ['./quadriceps-tendon.component.scss', '../../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class QuadricepsTendonComponent {
  @Input() model: SoftPartsFindingUiModel;

  tearTypeEnum: typeof TearTypeEnum;
  tendonsLocalizationTypeEnum: typeof TendonsLocalizationTypeEnum;

  constructor() {
    this.tearTypeEnum = TearTypeEnum;
    this.tendonsLocalizationTypeEnum = TendonsLocalizationTypeEnum;
  }
}
