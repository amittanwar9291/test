import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { FistulaMorphologyTypeEnum } from '@enums/pelvisMRT/rectum/fistula/fistula-morphology-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';
import { InternalChangeTypeEnum } from '@enums/pelvisMRT/rectum/common/internal-change-type.enum';

@Component({
  selector: 'rr-pilonidal-sinus',
  templateUrl: './pilonidal-sinus.component.html',
  styleUrls: ['./pilonidal-sinus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PilonidalSinusComponent {
  @Input() model: RectumFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  kMEnhancementType: typeof KMEnhancementTypeEnum;
  fistulaMorphologyType: typeof FistulaMorphologyTypeEnum;
  cmReinforcedType: typeof SimpleAnswerEnum;
  internalChangeType: typeof InternalChangeTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.kMEnhancementType = KMEnhancementTypeEnum;
    this.fistulaMorphologyType = FistulaMorphologyTypeEnum;
    this.cmReinforcedType = SimpleAnswerEnum;
    this.internalChangeType = InternalChangeTypeEnum;
  }
}
