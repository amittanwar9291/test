import { Component, Input } from '@angular/core';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { TesticlesTypeEnum } from '@enums/pelvisMRT/male-sex/testicles-type.enum';
import { DifferentialDiagnosisScrotumTraumaTypeEnum } from '@enums/pelvisMRT/male-sex/differential-diagnosis-scrotum-trauma-type.enum';

@Component({
  selector: 'rr-scrotum-trauma',
  templateUrl: './scrotum-trauma.component.html',
  styleUrls: ['./scrotum-trauma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ScrotumTraumaComponent {
  @Input() model: MaleSexFindingUiModel;
  testiclesType: typeof TesticlesTypeEnum;
  differentialDiagnosisScrotumTraumaType: typeof DifferentialDiagnosisScrotumTraumaTypeEnum;

  constructor() {
    this.testiclesType = TesticlesTypeEnum;
    this.differentialDiagnosisScrotumTraumaType = DifferentialDiagnosisScrotumTraumaTypeEnum;
  }
}
