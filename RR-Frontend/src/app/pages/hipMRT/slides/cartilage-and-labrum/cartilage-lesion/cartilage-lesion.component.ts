import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { CartilageAndLabrumFindingUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-finding-ui.model';

import { EtiologyTypeEnum, OuterbridgeClassificationTypeEnum, TraumaticTypeEnum } from '@enums/hipMRT/cartilage-and-labrum';

@Component({
  selector: 'rr-cartilage-lesion',
  templateUrl: './cartilage-lesion.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CartilageLesionComponent {
  @Input() model: CartilageAndLabrumFindingUiModel;
  @Output() emitLocalizer = new EventEmitter();

  etiologyType = EtiologyTypeEnum;
  traumaticType = TraumaticTypeEnum;
  outerbridgeClassificationType = OuterbridgeClassificationTypeEnum;

  openLargeLocalizer(): void {
    this.emitLocalizer.emit();
  }
}
