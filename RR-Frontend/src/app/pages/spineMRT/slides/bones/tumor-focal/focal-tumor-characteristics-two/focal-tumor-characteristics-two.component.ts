import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ShapeTypeEnum } from '@enums/spineMRT/bones';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-focal-tumor-characteristics-two',
  templateUrl: './focal-tumor-characteristics-two.component.html',
  styleUrls: ['./focal-tumor-characteristics-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocalTumorCharacteristicsTwoComponent {
  @Input() model: BonesFindingUiModel;

  shapeTypeEnum = ShapeTypeEnum;
}
