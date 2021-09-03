import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { PericardiumVesselsDiagnosisTypeEnum } from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-pulmonary-arteries',
  templateUrl: './pulmonary-arteries.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PulmonaryArteriesComponent implements OnInit {
  @Input() model: PericardiumVesselsFindingUiModel;

  previousPericardiumVesselsDiagnosisType: PericardiumVesselsDiagnosisTypeEnum;

  pericardiumVesselsDiagnosisType = PericardiumVesselsDiagnosisTypeEnum;

  ngOnInit(): void {
    this.previousPericardiumVesselsDiagnosisType = this.model.pericardiumVesselsDiagnosisType;
  }

  resetIsSuspicionOf(): void {
    if (this.previousPericardiumVesselsDiagnosisType !== this.model.pericardiumVesselsDiagnosisType) {
      this.model.isSuspicionOf = false;
    }

    this.previousPericardiumVesselsDiagnosisType = this.model.pericardiumVesselsDiagnosisType;
  }
}
