import { Component, Input } from '@angular/core';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { QuantityTypeEnum } from '@enums/pelvisMRT/rectum/fistula/quantity-type.enum';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';

@Component({
  selector: 'rr-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ComplexComponent {
  @Input() model: RectumFindingUiModel;
  @Input() localizationModel: LocalizationUiModel;
  @Input() technologyModel: TechnologyUiModel;

  kMEnhancementType: typeof KMEnhancementTypeEnum;
  quantityType: typeof QuantityTypeEnum;
  gender: typeof GenderTypeEnum;
  cmReinforcedType: typeof SimpleAnswerEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.kMEnhancementType = KMEnhancementTypeEnum;
    this.gender = GenderTypeEnum;
    this.quantityType = QuantityTypeEnum;
    this.cmReinforcedType = SimpleAnswerEnum;
  }
}
