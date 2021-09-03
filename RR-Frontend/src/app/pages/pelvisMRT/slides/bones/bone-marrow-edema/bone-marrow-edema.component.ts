import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import { DistributionTypeEnum } from '@enums/pelvisMRT/bones/bone-marrow-edema';

@Component({
  selector: 'rr-bone-marrow-edema',
  templateUrl: './bone-marrow-edema.component.html',
  styleUrls: ['./../bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BoneMarrowEdemaComponent {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  distributionTypeEnum: typeof DistributionTypeEnum;

  constructor() {
    this.distributionTypeEnum = DistributionTypeEnum;
  }

  openLargeLocalizer(isExpansionLocalizer: boolean): void {
    const enumValues = Object.keys(BonesLocalizerElementsEnum).map(k => BonesLocalizerElementsEnum[k as BonesLocalizerElementsEnum]);

    this.emitLocalizer.emit({
      elem: enumValues,
      isExpansion: isExpansionLocalizer
    });
  }
}
