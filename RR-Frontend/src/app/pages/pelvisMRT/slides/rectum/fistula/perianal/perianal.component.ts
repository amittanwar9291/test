import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { StJamesClassificationTypeEnum } from '@enums/pelvisMRT/rectum/fistula/st-james-classification-type.enum';
import { FistulaEndTypeEnum } from '@enums/pelvisMRT/rectum/fistula/fistula-end-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';

@Component({
  selector: 'rr-perianal',
  templateUrl: './perianal.component.html',
  styleUrls: ['./perianal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PerianalComponent {
  @Input() model: RectumFindingUiModel;
  @Input() fistulaLocalizationSSLTypeDropdownOptions: DropdownModel[];
  @Input() technologyModel: TechnologyUiModel;
  @Output() openLargeLocaliser = new EventEmitter();

  stJamesClassificationType: typeof StJamesClassificationTypeEnum;
  fistulaEndType: typeof FistulaEndTypeEnum;
  kMEnhancementType: typeof KMEnhancementTypeEnum;
  cmReinforcedType: typeof SimpleAnswerEnum;

  constructor() {
    this.stJamesClassificationType = StJamesClassificationTypeEnum;
    this.fistulaEndType = FistulaEndTypeEnum;
    this.kMEnhancementType = KMEnhancementTypeEnum;
    this.cmReinforcedType = SimpleAnswerEnum;
  }

  openLargeLocaliserFn() {
    this.openLargeLocaliser.emit();
  }
  isAbscessDisabled(): boolean {
    return (
      this.model.stJamesClassificationType !== this.stJamesClassificationType.IntersphinctericWithAbscess &&
      this.model.stJamesClassificationType !== this.stJamesClassificationType.TranssphinctericWithAbscess &&
      this.model.stJamesClassificationType !== this.stJamesClassificationType.Extrasphincteric
    );
  }
}
