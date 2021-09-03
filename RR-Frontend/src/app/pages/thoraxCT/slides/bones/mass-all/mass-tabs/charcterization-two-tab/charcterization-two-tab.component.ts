import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { CalcificationTypeEnum } from '@enums/thoraxCT/bones/calcification-type.enum';
import { PeriostealReactionTypeEnum } from '@enums/thoraxCT/bones/periosteal-reaction-type.enum';
import { AdjacentSclerosisTypeEnum } from '@enums/thoraxCT/bones/adjacent-sclerosis-type.enum';
import { ThoraxBonesFindingsTypeEnum } from '@enums/thoraxCT/bones/thorax-bones-findings-type.enum';

@Component({
  selector: 'rr-charcterization-two-tab',
  templateUrl: './charcterization-two-tab.component.html',
  styleUrls: ['./charcterization-two-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharcterizationTwoTabComponent {
  @Input() model: BonesFindingUiModel;

  calcificationTypeEnum = CalcificationTypeEnum;
  periostealReactionTypeEnum = PeriostealReactionTypeEnum;
  adjacentSclerosisTypeEnum = AdjacentSclerosisTypeEnum;
  thoraxBonesFindingsTypeEnum = ThoraxBonesFindingsTypeEnum;
}
