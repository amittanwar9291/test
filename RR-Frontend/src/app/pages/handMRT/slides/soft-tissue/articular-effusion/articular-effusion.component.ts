import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { QuantityTypeEnum } from '@enums/handMRT/soft-tissue/quantity-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';
import { filter } from 'lodash';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

@Component({
  selector: 'rr-articular-effusion',
  templateUrl: './articular-effusion.component.html',
  styleUrls: ['./articular-effusion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArticularEffusionComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() localizerSide: LocationTypeEnum;
  @Output() emitToggleLocalizer = new EventEmitter();

  quantityType: typeof QuantityTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums(): void {
    this.quantityType = QuantityTypeEnum;
  }

  resetDiameter(checkbox): void {
    if (!checkbox.checked) {
      this.model.diameterInMm = null;
    }
  }

  openLargeLocalizer() {
    this.emitToggleLocalizer.emit();
  }

  isSigngleValueSelected(): boolean {
    const selectedBones = filter(this.model.handJointsLocalizer, handBone => {
      return handBone;
    });
    return selectedBones.length === 1;
  }
}
