import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';

import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';

@Component({
  selector: 'rr-osteitis-pubis',
  templateUrl: './osteitis-pubis.component.html',
  styleUrls: ['./osteitis-pubis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteitisPubisComponent {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [BonesLocalizerElementsEnum.RightOsPubis, BonesLocalizerElementsEnum.LeftOsPubis],
      isExpansion: true
    });
  }
}
