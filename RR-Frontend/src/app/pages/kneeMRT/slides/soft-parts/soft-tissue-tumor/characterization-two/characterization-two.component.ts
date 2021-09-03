import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { CmEnhancementTypeEnum, HomogeneityTypeEnum } from '@enums/kneeMRT/soft-parts';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: SoftPartsFindingUiModel;
  @Input() isCMReinforcedTypeYes: boolean;

  cmEnhancementTypeEnum: typeof CmEnhancementTypeEnum;
  homogeneityTypeEnum: typeof HomogeneityTypeEnum;

  constructor() {
    this.cmEnhancementTypeEnum = CmEnhancementTypeEnum;
    this.homogeneityTypeEnum = HomogeneityTypeEnum;
  }
}
