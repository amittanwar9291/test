import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';

@Component({
  selector: 'rr-kolovaginal',
  templateUrl: './kolovaginal.component.html',
  styleUrls: ['./kolovaginal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class KolovaginalComponent {
  @Input() model: RectumFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  kMEnhancementType: typeof KMEnhancementTypeEnum;
  cmReinforcedType: typeof SimpleAnswerEnum;

  constructor() {
    this.kMEnhancementType = KMEnhancementTypeEnum;
    this.cmReinforcedType = SimpleAnswerEnum;
  }
}
