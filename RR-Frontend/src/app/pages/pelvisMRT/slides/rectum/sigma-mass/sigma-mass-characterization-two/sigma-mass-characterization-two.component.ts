import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TstadiumInfiltrationTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/tstadium-infiltration-type.enum';
import { DifferentialDiagnosisTStadiumTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/differential-diagnosis-tstadium-type.enum';
import { GrowthPatternTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/growth-pattern-type.enum';
import { PerforationTypeEnum } from '@enums/pelvisMRT/rectum/common/perforation-type.enum';

@Component({
  selector: 'rr-sigma-mass-characterization-two',
  templateUrl: './sigma-mass-characterization-two.component.html',
  styleUrls: ['./sigma-mass-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SigmaMassCharacterizationTwoComponent {
  @Input() model: RectumFindingUiModel;

  growthPatternTypeEnum: typeof GrowthPatternTypeEnum;
  perforationTypeEnum: typeof PerforationTypeEnum;
  differentialDiagnosisTStadiumTypeEnum: typeof DifferentialDiagnosisTStadiumTypeEnum;
  infiltrationTypeEnum: typeof TstadiumInfiltrationTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.differentialDiagnosisTStadiumTypeEnum = DifferentialDiagnosisTStadiumTypeEnum;
    this.infiltrationTypeEnum = TstadiumInfiltrationTypeEnum;
    this.growthPatternTypeEnum = GrowthPatternTypeEnum;
    this.perforationTypeEnum = PerforationTypeEnum;
  }
}
