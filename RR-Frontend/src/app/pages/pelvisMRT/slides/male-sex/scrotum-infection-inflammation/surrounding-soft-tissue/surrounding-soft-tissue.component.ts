import { Component, Input } from '@angular/core';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { ExpansionTypeEnum } from '@enums/pelvisMRT/male-sex/expansion-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-surrounding-soft-tissue',
  templateUrl: './surrounding-soft-tissue.component.html',
  styleUrls: ['./surrounding-soft-tissue.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SurroundingSoftTissueComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  simpleAnswerType: typeof SimpleAnswerEnum;

  CMEnhancementType: typeof CMEnhancementTypeEnum;
  expansionType: typeof ExpansionTypeEnum;

  constructor() {
    this.CMEnhancementType = CMEnhancementTypeEnum;
    this.expansionType = ExpansionTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
  }
}
