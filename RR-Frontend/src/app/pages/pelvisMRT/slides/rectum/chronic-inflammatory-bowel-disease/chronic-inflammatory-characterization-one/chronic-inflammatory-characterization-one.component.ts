import { Component, Input } from '@angular/core';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { PatternsOfInflammationTypeEnum } from '@enums/pelvisMRT/rectum/chronich-inflammatory-bowel-disease/patterns-of-inflamation-type.enum';
import { WallAlterationTypeEnum } from '@enums/pelvisMRT/rectum/chronich-inflammatory-bowel-disease/wall-alteration-type.enum';

@Component({
  selector: 'rr-chronic-inflammatory-characterization-one',
  templateUrl: './chronic-inflammatory-characterization-one.component.html',
  styleUrls: ['./chronic-inflammatory-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChronicInflammatoryCharacterizationOneComponent {
  @Input() model: RectumFindingUiModel;
  patternsOfInflammationType: typeof PatternsOfInflammationTypeEnum;
  wallAlterationType: typeof WallAlterationTypeEnum;

  constructor() {
    this.patternsOfInflammationType = PatternsOfInflammationTypeEnum;
    this.wallAlterationType = WallAlterationTypeEnum;
  }
}
