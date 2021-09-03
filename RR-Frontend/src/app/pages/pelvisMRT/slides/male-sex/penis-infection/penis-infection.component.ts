import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ExpansionTypeEnum } from '@enums/pelvisMRT/male-sex/expansion-type.enum';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-penis-infection',
  templateUrl: './penis-infection.component.html',
  styleUrls: ['./penis-infection.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PenisInfectionComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Input() penisInfektionDifferentialDiagnosisType: DropdownModel[];

  expansionType: typeof ExpansionTypeEnum;
  cmEnhancementType: typeof CMEnhancementTypeEnum;
  simpleAnswerType: typeof SimpleAnswerEnum;

  constructor() {
    this.expansionType = ExpansionTypeEnum;
    this.cmEnhancementType = CMEnhancementTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
  }

  clearSubordinate() {
    this.model.isSubordinate = false;
  }
}
