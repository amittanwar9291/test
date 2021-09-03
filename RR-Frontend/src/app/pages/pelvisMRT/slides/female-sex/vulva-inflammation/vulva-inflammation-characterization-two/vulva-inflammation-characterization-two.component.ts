import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-vulva-inflammation-characterization-two',
  templateUrl: './vulva-inflammation-characterization-two.component.html',
  styleUrls: ['./vulva-inflammation-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VulvaInflammationCharacterizationTwoComponent {
  @Input() model: FemaleSexFindingUiModel;
  differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;
}
