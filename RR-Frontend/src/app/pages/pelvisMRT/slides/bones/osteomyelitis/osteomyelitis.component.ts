import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import { ODifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/bones/osteomyelitis/odifferential-diagnosis-type.enum';
import { StadiumTypeEnum } from '@enums/pelvisMRT/bones/osteomyelitis/stadium-type.enum';

@Component({
  selector: 'rr-osteomyelitis',
  templateUrl: './osteomyelitis.component.html',
  styleUrls: ['../bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteomyelitisComponent {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  stadiumType: typeof StadiumTypeEnum;
  differentialDiagnosisType: typeof ODifferentialDiagnosisTypeEnum;

  constructor() {
    this.stadiumType = StadiumTypeEnum;
    this.differentialDiagnosisType = ODifferentialDiagnosisTypeEnum;
  }

  openLargeLocalizer(): void {
    const enumValues = Object.keys(BonesLocalizerElementsEnum).map(k => BonesLocalizerElementsEnum[k as BonesLocalizerElementsEnum]);

    this.emitLocalizer.emit({
      elem: enumValues,
      isExpansion: false
    });
  }
}
