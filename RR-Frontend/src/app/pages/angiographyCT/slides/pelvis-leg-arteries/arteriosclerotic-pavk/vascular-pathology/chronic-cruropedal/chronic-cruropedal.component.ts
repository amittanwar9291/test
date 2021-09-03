import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import {
  ChronicLesionsTypeEnum,
  TypeBDetailsTypeEnum,
  TypeCDetailsTypeEnum,
  TypeDDetailsTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';

@Component({
  selector: 'rr-chronic-cruropedal',
  templateUrl: './chronic-cruropedal.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChronicCruropedalComponent implements OnInit {
  @Input() model: PelvisLegArteriesFindingUiModel;
  sideTypeEnum = SideTypeEnum;
  chronicLesionsTypeEnum = ChronicLesionsTypeEnum;
  typeBDetailsTypeEnum = TypeBDetailsTypeEnum;
  typeCDetailsTypeEnum = TypeCDetailsTypeEnum;
  typeDDetailsTypeEnum = TypeDDetailsTypeEnum;

  ngOnInit() {
    this.model.singularStenosis = true;
  }
}
