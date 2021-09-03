import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocalPropagationTypeEnum } from '@enums/feetMRT/bones/space-requirement';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-tumor-characterisation-two',
  templateUrl: './characterisation-two.component.html',
  styleUrls: ['./characterisation-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterisationTwoComponent {
  @Input() model: BonesFindingUiModel;

  localPropagationTypeEnum: typeof LocalPropagationTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums() {
    this.localPropagationTypeEnum = LocalPropagationTypeEnum;
  }
}
