import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AbnormalitiesNormVariantsThyroidTypeEnum } from '@enums/neckMRT/thyroid/anomalies-normal-variants-thyroid-gland/abnormalities-norm-variants-thyroid-type.enum';
import { SideTypeEnum } from '@enums/neckMRT/thyroid/common/side-type.enum';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';

@Component({
  selector: 'rr-anomalies-normal-variants-thyroid-gland',
  templateUrl: './anomalies-normal-variants-thyroid-gland.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnomaliesNormalVariantsThyroidGlandComponent {
  @Input() model: ThyroidFindingUiModel;

  abnormalitiesNormVariantsThyroidType = AbnormalitiesNormVariantsThyroidTypeEnum;
  sideType = SideTypeEnum;
}
