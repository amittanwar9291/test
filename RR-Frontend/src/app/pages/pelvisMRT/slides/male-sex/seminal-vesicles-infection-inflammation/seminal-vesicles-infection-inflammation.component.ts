import { Component, Input } from '@angular/core';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DirectionTypeEnum } from '@enums/pelvisMRT/male-sex/direction-type.enum';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { SeminalVesicleChannelTypeEnum } from '@enums/pelvisMRT/male-sex/seminal-vesicle-channel-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-seminal-vesicles-infection-inflammation',
  templateUrl: './seminal-vesicles-infection-inflammation.component.html',
  styleUrls: ['./seminal-vesicles-infection-inflammation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SeminalVesiclesInfectionInflammationComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  directionType: typeof DirectionTypeEnum;
  cmEnhancementType: typeof CMEnhancementTypeEnum;
  seminalVesicleChannelType: typeof SeminalVesicleChannelTypeEnum;
  simpleAnswerType: typeof SimpleAnswerEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums() {
    this.directionType = DirectionTypeEnum;
    this.cmEnhancementType = CMEnhancementTypeEnum;
    this.seminalVesicleChannelType = SeminalVesicleChannelTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
  }
}
