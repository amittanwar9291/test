import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';

@Component({
  selector: 'rr-tumor-localization',
  templateUrl: './tumor-localization.component.html',
  styleUrls: ['./tumor-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TumorLocalizationComponent {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  openLargeLocalizer(): void {
    const enumValues = Object.keys(BonesLocalizerElementsEnum).map(k => BonesLocalizerElementsEnum[k as BonesLocalizerElementsEnum]);

    this.emitLocalizer.emit({
      elem: enumValues,
      isExpansion: false
    });
  }
}
