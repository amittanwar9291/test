import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { TPTEnthesiopathyDistalTypeEnum, TendonsPatellarTendonTypeEnum } from '@enums/kneeMRT/soft-parts';

@Component({
  selector: 'rr-patellar-tendon',
  templateUrl: './patellar-tendon.component.html',
  styleUrls: ['./patellar-tendon.component.scss', '../../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PatellarTendonComponent {
  @Input() model: SoftPartsFindingUiModel;

  tptLocalizationType: typeof TendonsPatellarTendonTypeEnum;
  enthesiopathyDistalType: typeof TPTEnthesiopathyDistalTypeEnum;

  constructor() {
    this.tptLocalizationType = TendonsPatellarTendonTypeEnum;
    this.enthesiopathyDistalType = TPTEnthesiopathyDistalTypeEnum;
  }

  clearEnthesiopathyType() {
    if (!this.model.isEnthesiopathy) {
      this.model.enthesiopathyType = this.tptLocalizationType.None;
    }
  }
}
