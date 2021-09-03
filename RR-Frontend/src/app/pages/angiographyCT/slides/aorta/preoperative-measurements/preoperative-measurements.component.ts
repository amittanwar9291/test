import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AortaFindingUiModel } from '@models/angiographyCT/ui/aorta/aorta-finding-ui.model';

@Component({
  selector: 'rr-preoperative-measurements',
  templateUrl: './preoperative-measurements.component.html',
  styleUrls: ['./preoperative-measurements.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PreoperativeMeasurementsComponent {
  @Input() model: AortaFindingUiModel;

  constructor() {}

  resetSecondPlane() {
    if (!this.model.maxDiameterInMm) {
      this.model.secondPlaneInMm = null;
    }
  }
}
