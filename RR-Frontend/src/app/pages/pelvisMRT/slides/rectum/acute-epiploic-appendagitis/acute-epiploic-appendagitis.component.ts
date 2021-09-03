import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';

import { EpiploicAppendagitisDifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/acute-epiplic-appendagitis/epiploic-appendagitis-differential-diagnosis-type.enum';
import { EpiploicAppendagitisLocalizationTypeEnum } from '@enums/pelvisMRT/rectum/acute-epiplic-appendagitis/epiploic-appendagitis-localization-type.enum';

@Component({
  selector: 'rr-acute-epiploic-appendagitis',
  templateUrl: './acute-epiploic-appendagitis.component.html',
  styleUrls: ['./acute-epiploic-appendagitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AcuteEpiploicAppendagitisComponent {
  @Input() model: RectumFindingUiModel;
  epiploicAppendagitisDifferentialDiagnosisType: typeof EpiploicAppendagitisDifferentialDiagnosisTypeEnum;
  epiploicAppendagitisLocalizationType: typeof EpiploicAppendagitisLocalizationTypeEnum;

  constructor() {
    this.epiploicAppendagitisDifferentialDiagnosisType = EpiploicAppendagitisDifferentialDiagnosisTypeEnum;
    this.epiploicAppendagitisLocalizationType = EpiploicAppendagitisLocalizationTypeEnum;
  }
}
