import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnamnesisUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-ui.model';
import { ProstateUiModel } from '@models/pelvisMRT/ui/prostate/prostate-ui.model';
import { VolumeTypeEnum } from '@enums/pelvisMRT/prostate/volume-type.enum';
import { PsaVolumeTypeEnum } from '@enums/pelvisMRT/prostate/psa-volume-type.enum';

@Component({
  selector: 'rr-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PatientInformationComponent implements OnInit {
  @Input() model: ProstateUiModel;
  @Input() anamnesisModel: AnamnesisUiModel;

  volumeType: typeof VolumeTypeEnum;
  psaVolumeType: typeof PsaVolumeTypeEnum;

  constructor() {
    this.volumeType = VolumeTypeEnum;
    this.psaVolumeType = PsaVolumeTypeEnum;
  }

  ngOnInit() {
    this.calculateVolume();
    this.calculatePsaVolume();
  }

  calculateVolume() {
    let value = null;
    if (this.model.widthInMm && this.model.heightInMm && this.model.aPdiameterInMm) {
      value = (this.model.widthInMm * this.model.heightInMm * this.model.aPdiameterInMm * 0.52) / 1000;
    }

    this.model.volumeInCm3 = isNaN(value) || !value ? null : value.toFixed(1).replace('.', ',');
    this.calculatePsaVolume();

    if (this.model.volumeInCm3 === 'None' || this.model.volumeInCm3 === null) {
      this.model.volumeType = this.volumeType.None;
    }
  }

  calculatePsaVolume() {
    if (!this.anamnesisModel || !this.model.volumeInCm3) {
      this.model.psaVolume = null;
      return;
    }

    if (this.anamnesisModel.psaLevel !== null) {
      const value = this.anamnesisModel.psaLevel / parseFloat(this.model.volumeInCm3.replace(',', '.'));
      this.model.psaVolume = isNaN(value) ? null : value.toFixed(2).replace('.', ',');
    }

    if (this.anamnesisModel.psaLevel === null || this.model.volumeInCm3 === null) {
      this.model.psaVolume = null;
      this.model.psaVolumeType = this.psaVolumeType.None;
    }
  }

  setDisablePsaVolumeType() {
    return !(this.anamnesisModel && this.anamnesisModel.psaLevel !== null && this.model.volumeInCm3 !== null);
  }

  volumeDisable(): boolean {
    return this.model.widthInMm === null || this.model.heightInMm === null || this.model.aPdiameterInMm === null;
  }
}
