import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { QuantityTypeEnum } from '@enums/kneeMRT/soft-parts/articular-effusion/quantity-type.enum';
import { QualityTypeEnum } from '@enums/kneeMRT/soft-parts/articular-effusion/quality-type.enum';

@Component({
  selector: 'rr-articular-effusion',
  templateUrl: './articular-effusion.component.html',
  styleUrls: ['./articular-effusion.component.scss', '../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArticularEffusionComponent {
  @Input() model: SoftPartsFindingUiModel;

  quantityTypeEnum: typeof QuantityTypeEnum;
  qualityTypeEnum: typeof QualityTypeEnum;

  constructor() {
    this.quantityTypeEnum = QuantityTypeEnum;
    this.qualityTypeEnum = QualityTypeEnum;
  }
}
