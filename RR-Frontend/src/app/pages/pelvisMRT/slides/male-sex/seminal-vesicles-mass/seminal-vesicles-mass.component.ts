import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-seminal-vesicles-mass',
  templateUrl: './seminal-vesicles-mass.component.html',
  styleUrls: ['./seminal-vesicles-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SeminalVesiclesMassComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Input() seminalVesiclesMassDifferentialDiagnosisType: DropdownModel[];
}
