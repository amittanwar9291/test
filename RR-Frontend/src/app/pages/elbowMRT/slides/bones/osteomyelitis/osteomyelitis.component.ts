import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesDifferentialDiagnosisTypeEnum, StadiumTypeEnum } from '@enums/elbowMRT/bones';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService } from '../bones-helper.service';

@Component({
  selector: 'rr-osteomyelitis',
  templateUrl: './osteomyelitis.component.html',
  styleUrls: ['./osteomyelitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteomyelitisComponent {
  @Input() model: BonesFindingUiModel;
  isCMYes: boolean;

  bonesDifferentialDiagnosisTypeEnum = BonesDifferentialDiagnosisTypeEnum;
  stadiumTypeEnum = StadiumTypeEnum;

  constructor(private bonesHelperService: BonesHelperService) {
    this.bonesHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
  }
}
