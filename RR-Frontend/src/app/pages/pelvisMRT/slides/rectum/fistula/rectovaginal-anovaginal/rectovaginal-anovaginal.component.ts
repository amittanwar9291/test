import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { LocationCraniocaudalTypeEnum } from '@enums/pelvisMRT/rectum/fistula/location-craniocaudal-type.enum';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';

@Component({
  selector: 'rr-rectovaginal-anovaginal',
  templateUrl: './rectovaginal-anovaginal.component.html',
  styleUrls: ['./rectovaginal-anovaginal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RectovaginalAnovaginalComponent {
  @Input() model: RectumFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  kMEnhancementType: typeof KMEnhancementTypeEnum;
  locationCraniocaudalType: typeof LocationCraniocaudalTypeEnum;
  cmReinforcedType: typeof SimpleAnswerEnum;

  constructor() {
    this.kMEnhancementType = KMEnhancementTypeEnum;
    this.locationCraniocaudalType = LocationCraniocaudalTypeEnum;
    this.cmReinforcedType = SimpleAnswerEnum;
  }
}
