import { Component, Input } from '@angular/core';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-vesicocervical',
  templateUrl: './vesicocervical.component.html',
  styleUrls: ['./vesicocervical.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VesicocervicalComponent {
  @Input() model: RectumFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  kMEnhancementType: typeof KMEnhancementTypeEnum;
  cmReinforcedType: typeof SimpleAnswerEnum;

  constructor() {
    this.kMEnhancementType = KMEnhancementTypeEnum;
    this.cmReinforcedType = SimpleAnswerEnum;
  }
}
