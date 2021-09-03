import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CapsuleType } from '@enums/elbowMRT/cartilage/capsule';
import { CartilageLigamentsCapsuleFindingUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-ui.model';

@Component({
  selector: 'rr-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CapsuleComponent {
  @Input() model: CartilageLigamentsCapsuleFindingUiModel;
  @Input() isTechnologyCMReinforcedChecked: boolean;

  capsuleType = CapsuleType;

  clearCapsuleDetails(value: CapsuleType): string {
    return this.model.capsuleType !== value ? 'capsuleDetails capsuleDetails2' : '';
  }

  setExtraarticularArticularEffusion(): void {
    this.model.isExtraarticularJointEffusion = true;
  }

  clearProminentPlicaHumeroradialis(): void {
    this.model.isThickening = false;
    this.clearThickening();
    this.model.isIllDefined = false;
  }

  clearThickening(): void {
    this.model.isMoreThan3MmMaximumExtension = false;
  }
}
