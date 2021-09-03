import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-testicles-epididymis',
  templateUrl: './testicles-epididymis.component.html',
  styleUrls: ['./testicles-epididymis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TesticlesEpididymisComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  simpleAnswerType: typeof SimpleAnswerEnum;
  CMEnhancementType: typeof CMEnhancementTypeEnum;

  constructor() {
    this.CMEnhancementType = CMEnhancementTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
  }
}
