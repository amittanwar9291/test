import { Component, Input } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { HomogeneityTypeEnum } from '@enums/spineMRT/myelon/homogeneity-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/spineMRT/myelon/contrast-enhancement-type.enum';

@Component({
  selector: 'rr-extramedullary-extradural-epidural-characteristic-two',
  templateUrl: './extramedullary-extradural-epidural-characteristic-two.component.html',
  styleUrls: ['./extramedullary-extradural-epidural-characteristic-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ExtramedullaryExtraduralEpiduralCharacteristicTwoComponent {
  @Input() model: MyelonFindingUIModel;
  @Input() isCMReinforcedTypeYes: boolean;

  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
}
