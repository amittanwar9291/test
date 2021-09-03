import { Component, Input } from '@angular/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { MaleSexPresetHttpService } from '@services/pelvisMRT/http/male-sex/male-sex-preset-http.service';

@Component({
  selector: 'rr-scrotum-mass',
  templateUrl: './scrotum-mass.component.html',
  styleUrls: ['./scrotum-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: MaleSexPresetHttpService
    }
  ]
})
export class ScrotumMassComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Input() localizationType: DropdownModel[];
  @Input() scrotumDifferentialDiagnosisType: DropdownModel[];
  constructor() {}
}
