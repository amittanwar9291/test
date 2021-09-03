import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { FlapsUiModel } from '@models/cardioMRT/ui/flaps/flaps-ui.model';

import { AortaAscendensComponent } from './aorta-ascendens/aorta-ascendens.component';
import { PulmonaryArteryComponent } from './pulmonary-artery/pulmonary-artery.component';
import { MitralValveComponent } from './mitral-valve/mitral-valve.component';

@Component({
  selector: 'rr-measured-values',
  templateUrl: './measured-values.component.html',
  styleUrls: ['../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MeasuredValuesComponent {
  @Input() model: FlapsUiModel;

  @ViewChild(AortaAscendensComponent) aortaAscendens: AortaAscendensComponent;
  @ViewChild(PulmonaryArteryComponent) pulmonaryArtery: PulmonaryArteryComponent;
  @ViewChild(MitralValveComponent) mitralValve: MitralValveComponent;

  resetAortaAscendensMeasureFiles(): void {
    this.aortaAscendens?.resetMeasurePicture();
  }

  resetPulmonaryArteryMeasureFiles(): void {
    this.pulmonaryArtery?.resetMeasurePicture();
  }

  resetMitralValveMeasureFiles(): void {
    this.mitralValve?.resetMeasurePicture();
  }
}
