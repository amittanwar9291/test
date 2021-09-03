import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { TendonsLocalizationTypeEnum } from '@enums/kneeMRT/soft-parts';

@Component({
  selector: 'rr-biceps-femoris-tendon',
  templateUrl: './biceps-femoris-tendon.component.html',
  styleUrls: ['./biceps-femoris-tendon.component.scss', '../../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BicepsFemorisTendonComponent {
  @Input() model: SoftPartsFindingUiModel;

  tendonsLocalizationTypeEnum: typeof TendonsLocalizationTypeEnum;

  constructor() {
    this.tendonsLocalizationTypeEnum = TendonsLocalizationTypeEnum;
  }
}
