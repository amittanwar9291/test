import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { DifferentialDiagnosisScrotumInfectionInflammationTypeEnum } from '@enums/pelvisMRT/male-sex/differential-diagnosis-scrotum-infection-inflammation-type.enum';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ScrotumDifferentialDiagnosisComponent {
  @Input() model: MaleSexFindingUiModel;
  differentialDiagnosisScrotumInfectionInflammationType: typeof DifferentialDiagnosisScrotumInfectionInflammationTypeEnum;

  constructor() {
    this.differentialDiagnosisScrotumInfectionInflammationType = DifferentialDiagnosisScrotumInfectionInflammationTypeEnum;
  }
}
