import { Component, Input } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

import { CartilageAndLabrumFindingUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-finding-ui.model';

import { MorphologyTypeEnum } from '@enums/hipMRT/cartilage-and-labrum';

@Component({
  selector: 'rr-femoroacetabular-impingment',
  templateUrl: './femoroacetabular-impingment.component.html',
  styleUrls: ['./femoroacetabular-impingment.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class FemoroacetabularImpingmentComponent {
  @Input() model: CartilageAndLabrumFindingUiModel;

  morphologyType = MorphologyTypeEnum;

  updateDecreasedOffset(): void {
    this.model.isDecreasedOffset = this.model.quantitativeAnalysisAlphaAngleInDegrees > 55;
  }
}
